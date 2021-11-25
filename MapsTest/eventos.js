var map;
function initMap() {
    var mapOptions = {
            center:{lat:-3.716816, lng: -38.519115},
            zoom:6,
    }
    map = new google.maps.Map(document.getElementById('map'),mapOptions) 

    map.addListener('zoom_changed', function() {
        console.log('mudou zoom')
    })

    map.addListener('click', function(e) {
        console.log(e.latLng)
    })

    map.addListener('dbclick', function() {
        console.log('click duplo')
    })
    
}