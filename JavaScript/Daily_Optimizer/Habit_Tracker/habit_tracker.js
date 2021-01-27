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
};

let weekDayDiv = (i, count, weekDay) => $(`#contributions-${i}`).append(`<div class="weekDate" id="date-${count}">${weekDay}</div>`);

function getDayDate(date, month, year) {
    new_date = new Date(`${year}-${month}-${date}`);
    console.log(new_date);
    return new_date.toString().split(' ')[0];
}

function getSundayDate(date, month, year) {
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
            }
            date = MONTHS[month - 1];
        }
    }
    return parseInt(new_date.toString().split(' ')[2]) - 1;
}

function getNumberMonths() {
    res = [];
    n = -7;
    for (let i = 0; i < 53; i++) res.push(n+=8);
    return res;
}

function printContributions() {
    let nextMonth = '';
    let newRow = 54;
    let count = -7;
    let weekDay = '';
    let drawedMonths = [];
    let day = TODAY.getDay();
    let date = TODAY.getDate();
    let month = TODAY.getMonth();
    let year = TODAY.getFullYear()-1;
    const NUMBER_MONTHS = getNumberMonths();
    let sunDate = getSundayDate(date, month, year) + (day == 0 ? 7 : 0);
    if (sunDate > DAY_MONTHS[month]) { 
        sunDate -= DAY_MONTHS[month];
    }

    for (let i = 0; i < 54; i++) {
        container(i);
        for (let j = 0; j < 8; j++) {
            // debugger;
            if (count < 1) {
                switch (count) {
                    case -5: weekDay = 'Mon'; break;
                    case -3: weekDay = 'Wed'; break;
                    case -1: weekDay = 'Fri'; break;
                    default: weekDay = ''; break;
                }
                count++;
                weekDayDiv(i, count, weekDay);
            } else {
                if (NUMBER_MONTHS.includes(count)) {
                    if (sunDate == DAY_MONTHS[month]) {
                        nextMonth = MONTHS[month+1];
                        drawedMonths.push(nextMonth);
                        weekDayDiv(i, count, `<span style="padding-left:10px">${nextMonth}</span>`);
                        nextMonth = '';
                    } else {
                        if (nextMonth.length > 0) {
                            weekDayDiv(i, count, `<span style="padding-left:10px">${nextMonth}</span>`);
                            nextMonth = '';
                        } else {
                            weekDayDiv(i, count, '');
                        }
                    }
                    count++;
                } else {
                    if (count != (365 + newRow + day)) {
                        if (sunDate != DAY_MONTHS[month]) {
                            // New day
                            sunDate++;
                        } else {
                            // New month
                            if (month + 1 == 12) {
                                // New Year
                                month = 0;
                                year++;  
                            } else {
                                month++;
                            }
                        
                            sunDate = 1;
                            if (!drawedMonths.includes(MONTHS[month])) {
                                nextMonth = MONTHS[month];
                                drawedMonths.push(nextMonth);
                            }
                        }
                        count++;
                        contribution(i, sunDate, month, year, count);
                    }
                }
            }
        }
    }
}
