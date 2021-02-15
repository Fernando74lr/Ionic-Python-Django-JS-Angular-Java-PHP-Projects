
const config = {
    apiKey: 'AIzaSyACs3O_QpP_mYUiievS5lJa1Cs8oE3s-QQ',
    authDomain: "tests-b5ca7.firebaseapp.com",
    databaseURL: "https://tests-b5ca7.firebaseio.com/",
    projectId: "tests-b5ca7",
    storageBucket: "tests-b5ca7.appspot.com"
};

firebase.initializeApp(config);
const firestore = firebase.firestore();

// Get elements
// const btnSubmitCard = $('#add-card');
let email = $('#txtEmail').val();
let password = $('#txtPassword').val();
const btnLogin = $('#btnLogin');
const btnLogout = $('#btnLogout');
const btnSignUp = $('#btnSignUp');

btnLogout.click(e => {
    let name = $('#txtName').val();
    firestore.doc(`users/${name}`).get()
        .then(doc => {
            if (doc && doc.exists) {
                const myData = doc.data();
                $('#name').html(myData.name);
                $('#email').html(myData.email);
            }
        })
});

btnLogin.click(e => {
    let name = $('#txtName').val();
    // Store
    firestore.doc(`users/${name}`).set({
        name: name,
        email: email,
        password: password
    }).then(() => {
        console.log('Everything alright')
    }).catch((error) => {
        console.log('Got an error', error);
    });
});

// Add a new card
function addCard(id, text) {
    if ($('#add-card')) {
        $('#add-card').click(e => {
            firestore.doc(`users/Fernando López Ramírez/tasks/${id}`).set({
                description: text,
                date_created: getCurrentDate(),
                time_created: getCurrentTime()
            }).then(() => {
                console.log('Task created')
            }).catch((error) => {
                console.log('Got an error adding the task', error);
            });
        });
    }
}
