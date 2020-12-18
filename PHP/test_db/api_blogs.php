<?php

    // Basic API

    function getBlogs() {

        try {
            require_once('assets/inc/functions/connection.php');
            $sql = "SELECT * FROM blogs ";
            $result = $conn->query($sql);
            
            $blogs = array();
            $blogs["items"] = array();

            while($row = $result->fetch_assoc()) {
                $item = array(
                    'id_blog' => $row['id_blog'],
                    'title_blog' => $row['title_blog'],
                    'description_blog' => $row['description_blog']
                );

                array_push($blogs['items'], $item);
            }

            # Result in JSON
            echo json_encode($blogs, JSON_PRETTY_PRINT);
        } catch (\Exception $e) {
            echo $e->getMessage();
        }
    }

    getBlogs();

?>