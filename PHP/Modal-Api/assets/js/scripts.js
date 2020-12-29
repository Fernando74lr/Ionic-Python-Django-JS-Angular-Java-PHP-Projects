const templateUp = `
<td>
<div class="form-check">
    <label class="form-check-label">
        <input class="form-check-input" type="radio" id="nHora" value="
`;
const templateDown = `
    </label>
    </div>
</td>
`;

eventListeners();

function eventListeners() {
    let form = document.querySelector('#rescheduleForm');
    if (form) {
        form.addEventListener('submit', validateForm);
    }
}

function validateForm(e) {
    e.preventDefault();

    var office = $('#office').val(),
        date = $('#date').val(),
        hour = $('#nHora').val();

    // RESULT
    console.table([office, date, hour]);

    let str_json = JSON.stringify({ office: office, date: date, hour: hour });

    // Data sent to the server.
    // Create the call for AJAX.
    var xhr = new XMLHttpRequest();

    // Open the connection.
    xhr.open('POST', 'assets/inc/results.php', true);

    // Return of data.
    xhr.setRequestHeader("Content-type", "application/json");
    // xhr.onload = function () {
    //     // Status: success/ok.
    //     if (this.status === 200) {
    //         var answer = xhr.responseText;
    //         console.log(answer);
    //         var response = JSON.parse(answer);
    //         console.log(response);
    //     }
    // }
    // Send the request.
    xhr.send(str_json);

    // xhr.setRequestHeader("Content-type", "application/json");
    console.log("SENDED");

    // window.location.href = 'assets/inc/results.php'
}

// Find schedules button
$("#findSchedules").click(function() {
    let date = $('#date').val();
    getHours(date);
});

// Get hours of a date from API.
function getHours(date) {
    fetch(`https://labopat-5792e.appspot.com/getHoras?day=${date}`)
        .then(response => response.json())
        .then(schedules => showSchedules(schedules.horas, date));
}

function showSchedules(schedules, date) {

    if (schedules.length > 0) {
        // Hide error
        $("#noSchedules").addClass('hidden');
        $("#table").removeClass('hidden');
        // Print Schedules
        schedules.forEach(hour => {
            $("#table").append(`
                <tr>
                    ${templateUp}${date}_${hour.hour}_FALTA_a" ${hour.hours.a.free ? '' : 'disabled'}>${hour.hour}${templateDown}
                    ${templateUp}${date}_${hour.hour}_FALTA_b" ${hour.hours.b.free ? '' : 'disabled'}>${hour.hour}${templateDown}
                    ${templateUp}${date}_${hour.hour}_FALTA_c" ${hour.hours.c.free ? '' : 'disabled'}>${hour.hour}${templateDown}
                </tr>
            `);
        });
    } else {
        // Show error
        $("#noSchedules").removeClass('hidden');
        $("#table").addClass('hidden');
    }

}