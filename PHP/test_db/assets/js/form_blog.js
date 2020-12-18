eventListeners();

function eventListeners() {
    document.querySelector('#formCreateBlog').addEventListener('submit', validateForm);
}

function validateForm(e) {
    e.preventDefault();
    
    var title = document.querySelector('#title').value,
        description = document.querySelector('#description').value,
        id_user = document.querySelector('#id_user').value,
        action = document.querySelector('#action').value;

    var image = document.querySelector('#image').value;
    var image_array = image.split('\\');
    var name_image = image_array[image_array.length - 1];

        console.table([title, description, action, id_user, name_image]);

    if (title === '' || description === '') {
        // The validation failed, fields are incomplete.
        message('error', 'Something went wrong!');
    } else {
        if (id_user) {
            // The fields are right, we execute AJAX.

            // Data sent to the server.
            var data = new FormData();
            data.append('title', title);
            data.append('description', description);
            data.append('action', action);            
            data.append('id_user', id_user);
            data.append('image', name_image);

            // Create the call for AJAX.
            var xhr = new XMLHttpRequest();

            // Open the connection.
            xhr.open('POST', 'assets/inc/models/blog-model.php', true);

            // Return of data.
            xhr.onload = function () {
                // Status: success/ok.
                if (this.status === 200) {
                    var answer = xhr.responseText;
                    var response = JSON.parse(answer);
                    console.log(response);
                    // If the response is correct.
                    if (response.response === 'correct') {
                        message('success', 'Saved!');
                    } else {
                        message('error', 'Something went wrong!');
                    }
                }
            }
            // Send the request.
            xhr.send(data);
        } else {
            message('error', 'Something went wrong!');
        }
    }
}

function message(status, message) {
    Swal.fire({
        icon: `${status}`,
        title: 'Status',
        text: `${message}`
    })
    .then(result => {
        if (result.value) {
            // Redirect with JavaScript.
            //The user doesn't have to do anything.
            window.location.href = 'index.php';
        };
    });
}