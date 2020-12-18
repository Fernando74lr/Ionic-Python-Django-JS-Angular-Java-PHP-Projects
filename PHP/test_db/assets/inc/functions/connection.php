<?php

    # Connect to DB.
    $conn = new mysqli('localhost', 'root', 'masterkey', 'test');

    # Look up for errors.
    if ($conn->connect_error) {
        echo $conn->connect_error;
    }

?>
