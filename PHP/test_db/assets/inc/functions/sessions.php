<?php

    function autenticated_user () {
        if (!check_user()) {
            # Redirect if you are not logged.
            header('Location:login.php');
            # Closes so you can already redirect.
            exit(); 
        }
    }

    function check_user () {
        return isset($_SESSION['name']);
    }

    function getUserProfile() {
        return $_SESSION;
    }


    # It allows you to go from one page to another without having to log in all the time.
    session_start();
    autenticated_user();
    
?>