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

var infoWindow = new google.maps.InfoWindow({
    content:'<div class="info"><h2>Informações legais</h2></div>',
    // maxWidth: 200,
})

marker.addListener('mouseover', ()=> {
    infoWindow.open(map, marker)
})

}