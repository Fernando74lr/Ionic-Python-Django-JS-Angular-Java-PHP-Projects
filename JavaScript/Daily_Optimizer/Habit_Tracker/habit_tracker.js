// VARIABLES Y CONSTANTES
const TODAY = new Date();
const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
const FEB = (TODAY.getFullYear() - 1) % 4 == 0 ? 29 : 28;
const DAY_MONTHS = [31, FEB, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];


// FORMATOS
let getDateFormated = (date, month, year) => `${MONTHS[month]} ${date}, ${year}`;
let container = (i) => $(`#container`).append(`<div id="contributions-${i}"></div>`);
let contribution = (i, date, month, year, count) => {
    $(`#contributions-${i}`).append(`
        <div
            class="date"
            data-toggle="tooltip" 
            style='background-color:${date == 1?'green':'white'};'
            title="${getDateFormated(date, month, year)}"
            id="date-${count}">

        </div>
    `);   
}

function getSundayDate(date, year, month) {
    let day = '', new_date = '';
    month++;
    while (day != 'Sun') {
        new_date = new Date(`${year}-${month}-${date}`);
        console.log(new_date.toString());
        day = new_date.toString().split(' ')[0];
        if (date != 1) {
            date--;
        } else {
            if (month != 1) {
                month--;
            } else {
                month = 12;
                // year--;
            }
            date = MONTHS[month - 1];
        }
    }
    return parseInt(new_date.toString().split(' ')[2]) - 1;
}

function printContributions() {
    let count = 0;
    let day = TODAY.getDay();
    let date = TODAY.getDate();
    let month = TODAY.getMonth();
    let year = TODAY.getFullYear()-1;
    let sunDate = getSundayDate(date, year, month) + (day == 0 ? 7 : 0);
    if (sunDate > DAY_MONTHS[month]) { 
        sunDate -= DAY_MONTHS[month];
    }

    for (let i = 0; i < 53; i++) {
        container(i);
        for (let j = 0; j < 7; j++) {
            // debugger;
            if (count != (365 + day)) { 
                if (sunDate != DAY_MONTHS[month]) {
                    // New day
                    sunDate++;
                } else {
                    // New month
                    sunDate = 1;
                    if (month + 1 == 12) {
                        // New Year
                        month = 0;
                        year++;  
                    } else {
                        month++;
                    }
                }
                count++;
                contribution(i, sunDate, month, year, count);
            }
        }
    }
}
