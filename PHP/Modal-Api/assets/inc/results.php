<?php
    $str_json = file_get_contents('php://input');
    $object = json_decode($str_json);
    var_dump($object);
?>

<h1><?php echo $object['hour'] ?></h1>