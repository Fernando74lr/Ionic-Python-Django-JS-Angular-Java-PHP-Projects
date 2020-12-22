<?php
    require 'vendor/autoload.php';
    require 'assets/inc/secret/credentials.php';

    \Stripe\Stripe::setApiKey($SECRET_KEY);

    $token = $_POST['stripeToken'];

    $charge = \Stripe\Charge::create([
        'amount' => 1500,
        'currency' => 'mxn',
        'description' => 'Test payment',
        'source' => $token
    ]);

    echo '<pre>', print_r($charge), '</pre>';
?>