
// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = {lat: -25.344, lng: 131.036};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 4, center: uluru});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: uluru, map: map});
}

/*
    Set the default bounds for the autocomplete search results.


// This wil bias the search results to Sydney, Australia.
var defaultBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(-33-8902, 151.1759),
    new google.maps.LatLng(-33-8474, 151.2631));

var options = {
    bounds: defaultBounds
};

// Get the HTML element for the autocomplete box
var input = document.getElementById('pac-input');
map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

// Create the autocomplete object
var autocomplete = new google.maps.places.Autocomplete(input, options);
*/