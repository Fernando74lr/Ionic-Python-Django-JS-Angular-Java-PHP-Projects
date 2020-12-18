
// Gretting by the moment of the day
function getDayMoment() {
    let hour = new Date().getHours();
    let greet;
    if (hour < 12) return greet = 'Good morning 👋';
    if (hour >= 12 && hour < 18) return greet = 'Good afternoon 👋';
    if (hour >= 18 && hour < 20) return greet = 'Good evening 🌗';
    if (hour >= 20) return greet = 'Good night 🌙';
}

// if (!(document.getElementById('greet')) === null) {
    let greet = document.getElementById('greet');
    greet.innerHTML = `${ getDayMoment() }`;
// }

