<?php
    # Get the values from the JavaScript call.
    $action = $_POST['action'];
    $password = $_POST['password'];
    $user = $_POST['user'];

    # Create new users.
    if ($action === 'create') {
        # HASH PASSWORDS.

        # Options of cost.
        $options = array(
            'cost' => 12
        );

        # Hash the password with BCRYPT algorithm with cost 12.
        $hash_password = password_hash($password, PASSWORD_BCRYPT, $options);

        # Import the connection.
        include '../functions/connection.php';
        
        # Consult the Database.
        try {
            # Prepare Statement to prevent SQL injection problems.
            $stmt = $conn->prepare("INSERT INTO `users` (user, password) VALUES (?, ?) ");
            # This is where the values are actually passed.
            $stmt->bind_param('ss', $user, $hash_password); 
            # We execute the query that returns values.
            $stmt->execute();

            # Give a custom answer.
            if ($stmt->affected_rows) {
                $response = array( 
                    'response' => 'correct',
                    # Para acceder al ID.
                    'id_insertado' => $stmt->insert_id,
                    'action' => $action
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

    # Log in users.
    if ($action === 'login') {
        # Import the connection.
        include './functions/connection.php';

        # Select the user from the Data Base.
        try {
            # Prepare Statement to prevent SQL injection problems.
            $stmt = $conn->prepare("SELECT user, id, password FROM users WHERE user = ?");
            # This is where we get the values.
            $stmt->bind_param('s', $user);
            # We execute the query that returns values.
            $stmt->execute();
            
            # Binds variables to a statement prepared for storing the result.
            $stmt->bind_result($user_name, $id_user, $pass_user);
            # Go get the results.
            $stmt->fetch();

            # Check if user exists.
            if ($user_name) {
                # Check if password is correct.
                if (password_verify($password, $pass_user)) {
                    # Log in.
                    session_start();
                    $_SESSION['name'] = $user;
                    $_SESSION['id'] = $id_user;
                    $_SESSION['login'] = true;

                    # Login success response.
                    $response = array(
                        'response' => 'correct',
                        'name' => $user_name,
                        'action' => $action
                    );
                } else {
                    # Login failed response.
                    $response = array(
                        'response' => 'Wrong password'
                    );
                }
            } else {
                $response = array(
                    'error' => 'User does not exists'
                );
            }

            # Finish statements.
            $stmt->close();
            # Finish DB connection.
            $conn->close();
        } catch (Exception $e) {
            // In case of error, it takes the exception.
            $response = array(
                'pass' => $e->getMessage()
            );
        }
        
        # Send response back to JavaScript call.
        echo json_encode($response);
    }
?>