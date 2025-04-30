<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Models\Country;

class Region
{
    public function handle(Request $request, Closure $next)
    {
        $position = $this->get_client_location($request);

        if (isset($position['geoplugin_countryName'])) {
            $blockedCountries = ['India', 'Pakistan', 'Bangladesh', 'Nigeria', 'South Africa'];

            if (in_array($position['geoplugin_countryName'], $blockedCountries)) {
                abort(403, 'Access denied from your country.');
            }
        }

        return $next($request);
    }

    public function get_client_location(Request $request)
    {
        $curl = curl_init();

        curl_setopt_array($curl, array(
            CURLOPT_URL => 'http://www.geoplugin.net/php.gp?ip=' . $request->ip(),
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

        $res = unserialize($res);
        return $res;
    }
}
