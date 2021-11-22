var map;
var button = document.querySelector('#roadmap')
button.addEventListener('click',function() {
    map.setMapTypeId('roadmap')
} )
        function initMap() {
            var mapOptions = {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 8,
                    mapTypeId:'terrain', //roadmap, satellite, hybrid, terrain
                    mapTypeControl: true,
                     // disableDefaultUI: true,
                    // zoomControl:false,
                    // streetViewControl:false,
                    mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                        position: google.maps.ControlPosition.TOP_CENTER,
            },
                fullscreenControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP
                }
            }
            map = new google.maps.Map(document.getElementById('map'),mapOptions) 
           
        }