var map;
function initMap() {
    var mapOptions = {
            center:{lat:-3.716816, lng: -38.519115},
            zoom:6,
    }
    map = new google.maps.Map(document.getElementById('map'),mapOptions) 
//adicionar
var marker = new google.maps.Marker({
    position:{lat:-3.716816, lng: -38.519115},
    map: map,
    title: 'Sua atual localização',
    // label:'R',
    icon: href="./img/1.png",
    animation:google.maps.Animation.BOUNCE,
    // ou DROP
    draggable: true
})

// map.addListener('click', function(e) {
//     var clickPosition = e.latLng
//     new google.maps.Marker({
//         position:clickPosition,
//         map: map,
//         title: 'Sua atual localização',
//         // label:'R',
//         icon: href="./img/1.png",
//         animation:google.maps.Animation.BOUNCE,
//         // ou DROP
//         draggable: true
//     })
// })

//remover
// marker.setMap(null)
}