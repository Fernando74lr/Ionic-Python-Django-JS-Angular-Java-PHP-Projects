const Nicolas = ['Gladiador', 'Pulp Fiction']

const Benjamin = ['Uncut gems', 'La teoría del todo'];

const Fernanda = ['Los ilusionistas', 'El conjuro'];

const Max = ['Straight outta compton', 'El irlandés'];

const Edgar = ['Pacific Rim', 'Bastardos sin gloria'];

const Fernando = ['Falsa identidad', 'Baywatch'];
 		
const Kaleb = ['Ya no estoy aquí', 'NULL Unu jajaja'];

const options = [Nicolas, Benjamin, Fernanda, Max, Edgar, Fernando, Kaleb];

function boogie() {
    let random_winner = Math.floor(Math.random() * 6);
    let random_movie = Math.round(Math.random());
    let final_winner;

    switch(random_winner) {
        case 0: final_winner = 'Nico'; break;
        case 1: final_winner = 'Benjamín'; break;
        case 2: final_winner = 'Fer mujer'; break;
        case 3: final_winner = 'Max'; break;
        case 4: final_winner = 'Edgar'; break;
        case 5: final_winner = 'Fer hombre'; break;
        case 6: final_winner = 'Kaleb'; break;
    }

    let final_movie = options[random_winner][random_movie];

    document.getElementById("name_winner").innerHTML = "Winner: " + final_winner;
    document.getElementById("name_movie").innerHTML = "Movie: " + final_movie;
}