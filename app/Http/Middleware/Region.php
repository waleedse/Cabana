<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Region
{
    public function handle(Request $request, Closure $next)
    {
        $position = $this->get_client_location($request);

        if (isset($position['country'])) {
            $blockedCountries = ['India', 'Pakistan', 'Bangladesh', 'Nigeria', 'South Africa'];
            $maintenanceCountries = ['Mauritius'];

            if (in_array($position['country'], $blockedCountries)) {
                abort(403, 'Access denied from your country.');
            }

            if (in_array($position['country'], $maintenanceCountries)) {
                abort(503, 'Service unavailable for maintenance in Mauritius.');
            }
        }

        return $next($request);
    }

    public function get_client_location(Request $request)
    {
        $curl = curl_init();
        $url = 'http://ip-api.com/json/'.$request->ip().'?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,zip,lat,lon,timezone,offset,currency,isp,org,as,';
        curl_setopt_array($curl, array(
            CURLOPT_URL => $url,
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

        $res = json_decode($res, true);
        return $res;
    }
}
