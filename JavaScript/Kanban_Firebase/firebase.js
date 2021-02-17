
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

let tasksList = [];
let tasksDatetimes = [];
let tasksIds = [];
// Get cards
function getCards() {
    let cards = [];
    let datetimes = [];
    let ids = [];
    firestore.collection(`users/Fernando López Ramírez/tasks`).get()
        .then((tasks) => {
            tasks.forEach((subDoc) => {
                // console.log(subDoc.data());
                cards.push({
                    id: subDoc.data().id,
                    title: subDoc.data().description,
                    class: subDoc.data().current_board,
                    dragend: function (e) {
                        let element = $(`[data-eid=${e.dataset.eid}]`);
                        console.log("Change color " + changeColorBtn());
                        element.removeAttr('data-class');
                        element.attr('data-class', changeColorBtn());
                        updateBoard(subDoc.data().id, changeColorBtn());
                    }
                });
                datetimes.push({
                    id: subDoc.data().id,
                    date_created: subDoc.data().date_created,
                    time_created: subDoc.data().time_created
                });
                ids.push(subDoc.data().id);
            });
            // console.log(cards);
            tasksList = cards;
            tasksDatetimes = datetimes;
            tasksIds = ids;
        });
}

function updateBoard(id, new_board) {
    firestore.collection(`users/Fernando López Ramírez/tasks`).doc(id.toString())
        .update({
            current_board: new_board
        });
}

function deleteTask(id) {
    let index = tasksIds.indexOf(parseInt(id));
    if (index > -1) {
        tasksIds.splice(index, 1);
        console.log("Removed id " + 2 + " -> ", tasksIds);
    }
    firestore.collection(`users/Fernando López Ramírez/tasks`).doc(id)
        .delete()
        .then(console.log(`Document with id '${id}' was successfully deleted!`))
        .catch((error) => console.error("Error removing document: ", error));
}

let sizeTasks = 0;
getCards();
setTimeout(() => {
    let todoList = tasksList.filter(task => task.class === "primary");
    let workingList = tasksList.filter(task => task.class === "warning");
    let successList = tasksList.filter(task => task.class === "success");
    let notesList = tasksList.filter(task => task.class === "danger");
    sizeTasks = tasksList.length;
    console.log('tasksIds', tasksIds);
    console.log('tasksDatetimes', tasksDatetimes);
    console.log('sizeTasks', sizeTasks);
    console.log('tasksList', tasksList);
    kanbanBoard(todoList, workingList, successList, notesList);
}, 1300);

// Add a new card
function addCard(text, board) {
    let id = Math.max.apply(null, tasksIds) + 1;
    tasksIds.push(id);
    console.log("New id", tasksIds);
    firestore.doc(`users/Fernando López Ramírez/tasks/${id}`).set({
        id: id,
        current_board: board,
        description: text,
        date_created: getCurrentDate(),
        time_created: getCurrentTime()
    }).then(() => {
        console.log('Task created', {
            id: id,
            current_board: board,
            description: text,
        })
    }).catch((error) => {
        console.log('Got an error adding the task', error);
    });
}
