eventListeners();

function eventListeners() {
    document.querySelector('#formulario').addEventListener('submit', validateForm);
}

function validateForm(e) {
    e.preventDefault();
    
    var user = document.querySelector('#user').value,
        password = document.querySelector('#password').value,
        password_repeat = document.querySelector('#password_repeat').value,
        action = document.querySelector('#action').value;

    if (password_repeat === 'null') {
        password_repeat = password;
    }

    if (user === '' || password === '' || password_repeat === '') {
        // The validation failed, fields are incomplete.
        errorMessage('fields');
    } else {
        if (password === password_repeat) {
            // The fields are right, we execute AJAX.

            // Data sent to the server.
            var data = new FormData();
            data.append('user', user);
            data.append('password', password);
            data.append('action', action);

            // Create the call for AJAX.
            var xhr = new XMLHttpRequest();

            // Open the connection.
            xhr.open('POST', 'assets/inc/models/user-model.php', true);

            // Return of data.
            xhr.onload = function () {
                // Status: success/ok.
                if (this.status === 200) {
                    var answer = xhr.responseText;
                    var response = JSON.parse(answer);
                    console.log(response);
                    // If the response is correct.
                    if (response.response === 'correct') {
                        if (response.action === 'create') {
                            // New user.
                            successMessage('user', response.name);
                        } else if (response.action === 'login') {
                            // Log in.
                            successMessage('login', response.name);
                        }
                    } else {
                        // User already taken.
                        if (response.response === 'Wrong password') {
                            errorMessage('wrong_data');
                        } else {
                            errorMessage('user');
                        }
                    }
                }
            }
            // Send the request.
            xhr.send(data);
        } else {
            // Passwords are not the same.
            errorMessage('passwords');
        }
    }
}

function errorMessage(error) {
    switch (error) {
        case 'fields':
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'You must fill up all fields'
            });
        break;
        
        case 'user':
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'User name already used'
            });
        break;

        case 'passwords':
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'The passwords are not equals'
            });
        break;     
        
        case 'wrong_data':
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Wrong user or password'
            });
        break; 
    }
}

function successMessage(success, name) {
    switch (success) {
        case 'user':
            Swal.fire({
                icon: 'success',
                title: 'User created',
                text: `The user '${name}' was created successfully`
            })
            .then(result => {
                if (result.value) {
                    // Redirect with JavaScript.
                    //The user doesn't have to do anything.
                    window.location.href = 'login.php'
                };
            });
        break;
        
        case 'login':
            Swal.fire({
                icon: 'success',
                title: `Welcome ${name}!`,
                text: 'Press OK to open dashboard'
            })
            .then(result => {
                if (result.value) {
                    // Redirect with JavaScript.
                    //The user doesn't have to do anything.
                    window.location.href = 'index.php'
                };
            });
        break;
    }
}