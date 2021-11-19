var map;
var button = document.querySelector('#roadmap')
button.addEventListener('click',function() {
    map.setMapTypeId('roadmap')
} )
        function initMap() {
            var mapOptions = {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 8,
                    mapTypeId:'terrain' //roadmap, satellite, hybrid, terrain
            }
            map = new google.maps.Map(document.getElementById('map'),mapOptions) 
           
        }