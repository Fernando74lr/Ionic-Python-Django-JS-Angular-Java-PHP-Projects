
// var admin = require("firebase-admin");

// var serviceAccount = require("secret/apiKey/simple-kanban-board-firebase-adminsdk-gu08s-3d2e8866a6.json");

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://simple-kanban-board-default-rtdb.firebaseio.com"
// });

// Firebase Credentials
var config = {
    apiKey: "3d2e8866a6209a9972b4cf5dec3ca1f08b4298c3",
    authDomain: "simple-kanban-board.firebaseapp.com",
    databaseURL: "https://simple-kanban-board-default-rtdb.firebaseio.com/",
    storageBucket: "simple-kanban-board.bucket.appspot.com"
};

// Initialize App
firebase.initializeApp(config);

// Get a reference to the database service
var database = firebase.database().ref().child('elements');

database.on('value',function(snapshot){

    snapshot.forEach(function(childSnapshot) {

        console.log(childSnapshot.key)

        console.log(childSnapshot.val())
    })

})

// function writeElementData(elementId, text, date_created, time_created) {
//     database.ref('elements/element' + elementId).set({
//         id: elementId,
//         text: text,
//         date_created: date_created,
//         time_created: time_created
//     });
//     console.log('ELEMENT CREATED');
// }

// writeElementData('1', 'This is a test', '08-02-2021', '23:23');