<?php

namespace App\Http\Controllers;

use App\Admin;
use App\Admin_Meta;
use App\Country;
use App\Promotion;
use App\Slider;
use Exception;
use Illuminate\Http\Request;
use Stevebauman\Location\Facades\Location;
use Illuminate\Support\Fluent;
use Validator;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class FrontController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function get_pamm_accounts()
    {




        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://secure.cabanacapitals.com/rest/pamm/accounts?version=1.0.0',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
		CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_HTTPHEADER => array(
            'Authorization: Bearer MzllZjQ4ZGM5MGU3NzVkYzY0Yzc5ZjVhYjAxODg4ZTlkZGY0M2NlOTAwYTZmY2QxNjk2MzVlYTcwMjgwNjQwOQ',
            'Cookie: device_view=full'
        ),
        ));

        $res = curl_exec($curl);
				curl_close($curl);

		//$response = ['status' => 200 , 'response' => $res , 'info' => curl_getinfo($curl) , 'errorno' =>  curl_errno($curl) , 'error' => curl_error($curl)];
        return $res;

    }
    public function get_pamm_account_detail($id)
    {




        $curl = curl_init();

        curl_setopt_array($curl, array(
        CURLOPT_URL => 'https://secure.cabanacapitals.com/rest/pamm/account/'.$id.' ?version=1.0.0',
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
		CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_HTTPHEADER => array(
            'Authorization: Bearer MzllZjQ4ZGM5MGU3NzVkYzY0Yzc5ZjVhYjAxODg4ZTlkZGY0M2NlOTAwYTZmY2QxNjk2MzVlYTcwMjgwNjQwOQ',
            'Cookie: device_view=full'
        ),
        ));

        $res = curl_exec($curl);
				curl_close($curl);

		//$response = ['status' => 200 , 'response' => $res , 'info' => curl_getinfo($curl) , 'errorno' =>  curl_errno($curl) , 'error' => curl_error($curl)];
        return $res;

    }
    protected function url($ip)
    {
        return "http://www.geoplugin.net/php.gp?ip=$ip";
    }
    public function get_client_location(Request $request){
        // $position = Location::get($request->ip());
        // $response = ['res' => $position];
        // return $response;


        $curl = curl_init();
        $url = 'http://ip-api.com/json/'.$request->ip().'?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,zip,lat,lon,timezone,offset,currency,isp,org,as,';
        curl_setopt_array($curl, array(
        CURLOPT_URL => $url,
        // CURLOPT_URL => 'http://www.geoplugin.net/php.gp?ip=41.66.128.0'.$request->ip(),

        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => '',
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 0,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => 'GET',
		CURLOPT_SSL_VERIFYPEER => true,

        ));

        $res = curl_exec($curl);
		curl_close($curl);
        return json_decode($res,true);

        // try {
        //     $response = unserialize($this->url($request->ip));
        //     return new Fluent($response);
        // } catch (Exception $e) {
        //     return false;
        // }
    }
    public function get_countries(){
        $countries = Country::all();
        return $countries;
    }


    public function admin_login(Request $request){
        $user = Admin::where('username',$request->username)->first();
        if($user){
            if($user->password == $request->password){
                $user_meta = Admin_Meta::
                        where('user_id',$user->id)
                        ->where('user_ip',$request->ip())
                        ->first();
                        if(!$user_meta){
                            $user_meta = new Admin_Meta();
                            $user_meta->token = Hash::make($user->id . time());
                            $user_meta->user_ip = $request->ip();
                            $user_meta->user_id = $user->id;
                            $user_meta->token_validation = date("d-m-Y H:m:sa");
                            $user_meta->save();
                        }
                        $user->token = $user_meta->token;
                $response = ['status' => 200 , 'msg' => 'Authentication Successfull.','user'=>$user];
                return $response;
            }else{
                $response = ['status' => 404 , 'msg' => 'Password authentication failed.'];
                return $response;
            }
        }else{
            $response = ['status' => 404 , 'msg' => 'User not found.'];
            return $response;
        }
    }
    public function admin_check_auth(Request $request){
        $user = Admin_Meta::where('token',$request->token)->where('user_ip',$request->ip())->first();
        if($user){
                $u = Admin::where('id',$user->user_id)->first();
                $response = ['status' => 200 , 'msg' => 'Authentication Successfull.','user'=>$u];
                return $response;
        }else{
            $response = ['status' => 404 , 'msg' => 'User not found.'];
            return $response;
        }
    }
    public function add_promotion(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'link' => 'required',
            'type' => 'required',
            'status' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first(),'errors' => $validator->errors()];
            return $response;
        }
        $promotion = new Promotion();
        $promotion->title = $request->title;
        $promotion->link = $request->link;
        $promotion->type = $request->type;
        $promotion->status = $request->status;
        if($promotion->type == 2){
            $promotion->countries = json_encode($request->selected_countries);
        }

        $promotion->save();
        $response = ['status' => 200 ];
        return $response;
    }
    public function update_promotion(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'link' => 'required',
            'type' => 'required',
            'status' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first(),'errors' => $validator->errors()];
            return $response;
        }
        $promotion = Promotion::where('id',$request->id)->first();
        $promotion->title = $request->title;
        $promotion->link = $request->link;
        $promotion->type = $request->type;
        $promotion->status = $request->status;
        if($promotion->type == 2){
            $promotion->countries = json_encode($request->selected_countries);
        }

        $promotion->save();
        $response = ['status' => 200 ];
        return $response;
    }
    public function get_promotion_by_id(Request $request){
        $promotion = Promotion::where('id',$request->id)->first();
        return $promotion;
    }
    public function get_all_promotions(Request $request){
        $promotion = Promotion::all();
        return $promotion;
    }
    public function delete_promotion(Request $request){
        $promotion = Promotion::where('id',$request->id)->delete();
        return $promotion;
    }

    public function add_slider(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'image' => 'required',
            'type' => 'required',
            'status' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first(),'errors' => $validator->errors()];
            return $response;
        }
        $slider = new Slider();
        $slider->title = $request->title;
        $slider->image = $request->image;
        $slider->type = $request->type;
        $slider->excluded = $request->excluded;
        $slider->index = $request->index;
        $slider->content = $request->content;

        $slider->status = $request->status;
        if($slider->type == 2){
            $slider->countries = json_encode($request->selected_countries);
        }

        $slider->save();
        $response = ['status' => 200 ];
        return $response;
    }
    public function api_check(Request $request){
        return 'helo';
    }
    public function update_slider(Request $request){
        $validator = Validator::make($request->all(), [
            'title' => 'required',
            'image' => 'required',
            'type' => 'required',
            'status' => 'required',
        ]);
        if($validator->fails()){
            $response = ['status' => 219 , 'msg' => $validator->errors()->first(),'errors' => $validator->errors()];
            return $response;
        }
        $slider = Slider::where('id',$request->id)->first();
        $slider->title = $request->title;
        $slider->image = $request->image;
        $slider->type = $request->type;
        $slider->excluded = $request->excluded;
        $slider->content = $request->content;
        $slider->index = $request->index;
        $slider->status = $request->status;
        if($slider->type == 2){
            $slider->countries = json_encode($request->selected_countries);
        }

        $slider->save();
        $response = ['status' => 200 ];
        return $response;
    }
    public function get_slider_by_id(Request $request){
        $slider = Slider::where('id',$request->id)->first();
        return $slider;
    }
    public function get_all_sliders(Request $request){
        $sliders = [];
        $sliders = Slider::get();
        foreach($sliders as $i => $s){
            foreach($sliders as $j => $s1){
                if($s1->index > $s->index){

                    $temp = $sliders[$i];
                    $sliders[$i] = $sliders[$j];
                    $sliders[$j] = $temp;
                }
            }
       }


        return  $sliders;
    }
    public function delete_slider(Request $request){
        $slider = Slider::where('id',$request->id)->delete();
        return $slider;
    }
    public function upload_image(Request $request){
        try{
            if ($request->hasFile('image')) {
                $file = $request->image;
                $filename = $file->getClientOriginalName();
                $image = date('His') . str_replace(' ','-',$filename);
                $destination_path = public_path().'/assets/images';
                $file->move($destination_path, $image);
                $url = $image;
                $response = ['status' => 200 , 'msg' => 'Image  Uploaded.','url' => $url , 'path' => $destination_path];
                return $response;
            }
        }catch(Exception $e){
            $response = ['status' => 401 , 'msg' => 'Image not Uploaded.','error' => $e];
            return $response;
        }
    }

    public function get_promotions(Request $request){
        $position = $this->get_client_location($request);
        if($position['country']){
            $promotions = [];
            $country = Country::where('name',$position['country'])->first();
            $all_countries_promotions = Promotion::where('type',1)->where('status',1)->get();
            $specific_promotions = Promotion::where('type',2)->where('status',1)->get();

            if(sizeof($specific_promotions) > 0){
                foreach($specific_promotions as $sp){
                    $sp_countries = json_decode($sp->countries);
                    if($sp_countries){
                        foreach($sp_countries as $spc){
                            if($spc->id == $country->id){
                                array_push($promotions,$sp);
                            }
                        }
                    }
                }
            }
            if(sizeof($all_countries_promotions) > 0){
                foreach($all_countries_promotions as $ac){
                    array_push($promotions,$ac);
                }
            }
            $response = ['status' => 200 , 'promotion' => $promotions , 'country' => $position['country'] , 'continent' =>
            // 'Africa'
            $position['geoplugin_continentName']
        ];
            return $response;

        }else{
            $promotions = Promotion::where('type',1)->where('status',1)->get();
            $response = ['status' => 200 , 'promotion' => $promotions , 'country' => $position['country']];
            return $response;
        }

    }
    public function get_home_sliders(Request $request){
        $position = $this->get_client_location($request);

        if($position['country']){
            $sliders = [];
            $country = Country::where('name',$position['country'])->first();
            $all_countries_sliders = Slider::where('type',1)->where('status',1)->get();
            $specific_sliders = Slider::where('type',2)->where('status',1)->get();

            if(sizeof($specific_sliders) > 0){
                foreach($specific_sliders as $sp){
                    $sp_countries = json_decode($sp->countries);
                    if($sp_countries){
                        if($sp->excluded == 1){
                            $check = 0;
                            foreach($sp_countries as $spc){
                                if($spc->id == $country->id){
                                   $check = 1;
                                }
                            }
                            if($check == 0){
                                array_push($sliders,$sp);
                            }
                        }else{
                            foreach($sp_countries as $spc){
                                if($spc->id == $country->id){
                                    array_push($sliders,$sp);
                                }
                            }
                        }

                    }
                }
            }
            if(sizeof($all_countries_sliders) > 0){
                foreach($all_countries_sliders as $ac){
                    array_push($sliders,$ac);
                }
            }
            foreach($sliders as $i => $s){
                foreach($sliders as $j => $s1){
                    if($s1->index > $s->index){

                        $temp = $sliders[$i];
                        $sliders[$i] = $sliders[$j];
                        $sliders[$j] = $temp;
                    }
                }
           }
            $response = ['status' => 200 , 'sliders' => $sliders];
            return $response;

        }else{
            $sliders = Slider::where('type',1)->where('status',1)->get();
            foreach($sliders as $i => $s){
                foreach($sliders as $j => $s1){
                    if($s1->index > $s->index){

                        $temp = $sliders[$i];
                        $sliders[$i] = $sliders[$j];
                        $sliders[$j] = $temp;
                    }
                }
           }


            $response = ['status' => 200 , 'sliders' => $sliders];
            return $response;
        }

    }
    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

public function sendContactEmail(Request $request)
{
    $validator = Validator::make($request->all(), [
        'name' => 'required',
        'email' => 'required|email',
        'phone' => 'required',
        'message' => 'required',
    ]);

    if ($validator->fails()) {
        $response = ['status' => 219, 'msg' => $validator->errors()->first(), 'errors' => $validator->errors()];
        return $response;
    }

    $data = [
        'name' => $request->name,
        'email' => $request->email,
        'phone' => $request->phone,
        'message' => $request->message,
    ];

    Mail::send('emails.contact', $data, function ($message) use ($data) {
        $message->from($data['email'], $data['name']);
        $message->to('your_email@example.com', 'Your Name');
        $message->subject('Contact Form Submission');
    });

    $response = ['status' => 200, 'msg' => 'Email sent successfully.'];
    return $response;
}

    public function sendSeminarEmail(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string',
            'email' => 'required|email',
            'phone' => 'required|string',
            'date' => 'required|string', // Changed to string
            'message' => 'nullable|string',
        ]);

        if ($validator->fails()) {
            return response()->json(['status' => 422, 'errors' => $validator->errors()], 422);
        }

        $data = [
            'name' => strval($request->name),
            'email' => strval($request->email),
            'phone' => strval($request->phone),
            'date' => strval($request->date), // Ensure it's a string
            'message' => $request->message ? strval($request->message) : '',
        ];

        try {
            Mail::send('emails.seminar', $data, function ($message) use ($data) {
                $message->from('info@cabanacapitals.com', 'Aurum Markets');
                $message->to('promotions@cabanacapitals.com', 'Seminar Organizer');
                $message->subject('Seminar Registration for ' . $data['date']);
            });
            Mail::send('emails.seminar', $data, function ($message) use ($data) {
                $message->from('info@cabanacapitals.com', 'Aurum Markets');
                $message->to($data['email'], 'Seminar Organizer');
                $message->subject('Seminar Registration for ' . $data['date']);
            });

            return response()->json(['status' => 200, 'message' => 'Registration successful. We will contact you soon.']);
        } catch (\Exception $e) {
            return response()->json(['status' => 500, 'message' => 'An error occurred while processing your request.'], 500);
        }
    }
}
