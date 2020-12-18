<?php

    # Connect to DB.
    $conn = new mysqli('localhost', 'root', 'MASTERcapitan121', 'test');

    # Look up for errors.
    if ($conn->connect_error) {
        echo $conn->connect_error;
    }

?>
