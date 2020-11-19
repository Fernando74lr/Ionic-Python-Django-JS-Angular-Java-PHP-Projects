let btn = $('#btn');
let btn2 = $('#btn2');
let btnDelete = $('#delete');
let img = $('#img');
let user = $('#user').val();
let user_title = $('#user_name');
let repos = [];
let projects = $('#projects');

// Get user avatar and repositories.
btn.click(function() {

    // Clean repos
    if (repos.length > 0) {
        repos = [];
        projects.html(`
            <li style="list-style: none;">
            </li>
            <br>
        `);
    }

    // Set user name
    let user = $('#user').val();
    user_title.html(user);

    // Get user avatar.
    fetch(`//api.github.com/users/${user}`)
        .then(response => response.json())
        .then(data => {
            img.attr('width', "300px");
            img.attr('height', "300px");
            img.css('border-radius', "100%");
            img.attr('src', data.avatar_url);
        });

    // Get user repositories.
    fetch(`//api.github.com/users/${user}/repos`)
        .then(response => response.json())
        .then(data => {
            data.forEach(repo => {
                repos.push(repo);
            });
            print_repos();
        });
});

// Just take the date from UTC format.
let dateTransform = date => date.split("T")[0];

// Print repositories.
function print_repos() {
    repos.forEach(repo => {
        projects.append(`
            <li style="list-style: none;">
                <div class="card">
                    <h2>${repo.name}</h2>
                    <h5>${repo.description}</h5>
                    <h5>Lenguage: ${repo.language}</h5>
                    <h6><i>Created at: ${dateTransform(repo.created_at)}</i></h6>
                    <h6><i>Updated at: ${dateTransform(repo.updated_at)}</i></h6>
                <div>
            </li>
            <br>
        `);
    });
}
