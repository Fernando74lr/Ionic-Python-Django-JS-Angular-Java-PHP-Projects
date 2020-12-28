<?php

    $date = "2020-12-28";

    $request = "https://labopat-5792e.appspot.com/getHoras?day=" + $date;

    $curl = curl_init();

    curl_setopt_array($curl, array(
        CURLOPT_URL => $request,
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "cache-control: no-cache"
        ),
    ));

    
?>
