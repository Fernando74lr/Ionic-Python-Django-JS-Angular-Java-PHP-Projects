<?php
    # Get the name of the file where is being called.
    function getCurrentPage() {
        # basename: returns the name of the selected file.
        # _SERVER: access to the files it's hosted.
        # PHP_SELF: returns the current file.
        $file = basename($_SERVER['PHP_SELF']);
        # Replace the '.php' with nothing.
        $page = str_replace(".php", "", $file);
        echo $page;

        return $page;
    }
?>