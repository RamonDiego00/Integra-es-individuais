class OverlayMap{
    constructor(tileSize) {
        this.tileSize = tileSize;
       
    }

    getTile(coord, zoom, ownerDocument) {
        var div = ownerDocument.createElement('div')
        div.innerHTML = 'Ramon'
        div.style.width = this.tileSize.width+'px'
        div.style.height = this.tileSize.height+'px'
        div.style.fontSize = '10px'
        div.style.borderStyle = 'solid'
        div.style.borderWidth = '1px'
        div.style.borderColor = '#333'
        return div;
    }
}


var map;
var button = document.querySelector('#roadmap')
button.addEventListener('click',function() {
    map.setMapTypeId('roadmap')
} )
        function initMap() {
            var mapOptions = {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 8,
            }
            map = new google.maps.Map(document.getElementById('map'),mapOptions);
            map.overlayMapTypes.insertAt(0, new OverlayMap(new google.maps.Size(256, 256)))
        }