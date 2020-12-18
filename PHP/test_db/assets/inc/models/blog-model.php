<?php
    # Get the values from the JavaScript call.
    $action = $_POST['action'];
    $title = $_POST['title'];
    $description = $_POST['description'];
    $id_user = $_POST['id_user'];
    $image = $_POST['image'];

    # Create new users.
    if ($action === 'createBlog') {
        # Import the connection.
        include '../functions/connection.php';
        
        # Consult the Database.
        try {
            # Prepare Statement to prevent SQL injection problems.
            $stmt = $conn->prepare("INSERT INTO `blogs` (title_blog, image_blog, description_blog, id_user) VALUES (?, ?, ?, ?) ");
            # This is where the values are actually passed.
            $stmt->bind_param('ssss', $title, $image, $description, $id_user); 
            # We execute the query that returns values.
            $stmt->execute();

            # Give a custom answer.
            if ($stmt->affected_rows > 0) {
                $response = array( 
                    'response' => 'correct',
                    # Para acceder al ID.
                    'id_insertado' => $stmt->insert_id,
                    'action' => $action,
                    'title' => $title,
                    'id' => $id_user,
                    'description' => $description
                );
            } else {
                $response = array(
                    'response' => 'error'
                );
            }

            # Finish statements.
            $stmt->close();
            # Finish DB connection.
            $conn->close();
        } catch (Exception $e) {
            // In case of error, it takes the exception.
            $response = array(
                'error' => $e->getMessage()
            );
        }

        # Send response back to JavaScript call.
        echo json_encode($response);
    
    }
?>