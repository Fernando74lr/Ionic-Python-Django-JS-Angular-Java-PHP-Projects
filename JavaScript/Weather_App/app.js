// APP CONSTANTS AND VARS
const notificationElement = document.querySelector('.notification');
const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value p');
const descElement = document.querySelector('.temperature-description p');
const locationElement = document.querySelector('.location p');
const KELVIN = 273;
// API KEY
const key = "960734f316a56e1e410d62411f210ff3";

const weather = {};

weather.temperature = {
    unit : 'celsius'
};

if ('geolocation' in navigator) {
    navigator.geolocation.getCurrentPosition(setPosition, showError);
} else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser Doesn't Support Geolocation</p>";
}

// SET THE POSITION (LAT AND LON)
function setPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    getWeather(latitude, longitude);
}

// GET THE DATA FROM THE API
function getWeather(latitude, longitude) {
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`;

    fetch(api)
        .then((response) => response.json())
        .then((data) => {
            weather.temperature.value = Math.floor(data.main.temp - KELVIN);
            weather.description = capitalizeWords(data.weather[0].description);
            weather.iconId = data.weather[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        }).then(() => displayWeather());
}

// DISPLAY THE RENDER DATA INTO THE HTML
function displayWeather() {
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"></img>`;
    tempElement.innerHTML = `${weather.temperature.value}<span>°C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
// C° TO F° CONVERSION
let celsiusToToFahrenheit = (temperature) => (temperature * 9/5) + 32;

// CAPITALIZE EACH WORD
let capitalizeWords = (str) => str.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());

// SHOW ERROR IF IT EXISTS
function showError(error) {
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p>${error.message}</p>`;
}

tempElement.addEventListener('click', function() {
    // If temperature is not defined, it doesn't go further
    if (weather.temperature.value === undefined) return;

    if (weather.temperature.unit === 'celsius') {
        let fahrenheit = celsiusToToFahrenheit(weather.temperature.value);
        fahrenheit = Math.floor(fahrenheit);
        tempElement.innerHTML = `${fahrenheit}<span>°F</span>`;
        weather.temperature.unit = "fahrenheit";
    } else {
        tempElement.innerHTML = `${weather.temperature.value}<span>°C</span>`;
        weather.temperature.unit = "celsius";
    }
});

