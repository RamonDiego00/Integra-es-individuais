//Atributos

// MapType
// maxZoom*
// titleSize*
// name
// minZoom
// alt

//Métodos

// getTile(coord, zoom, docu)
// releaseTile(tile)
// minZoom

// MeuMapa

class MeuMapa{
    constructor(tileSize) {
        this.tileSize = tileSize;
        this.maxZoom = 18;
        this.name = 'meumapa';
        this.alt = 'O mapa não carregou'
    }

    getTile(coord, zoom, ownerDocument) {
        var div = ownerDocument.createElement('div')
        div.innerHTML = 'Ramon'
        div.style.width = this.tileSize.width='px'
        div.style.height = this.tileSize.height='px'
        div.style.fontSize = '10px'
        div.style.backgroundColor = '#add'
        div.style.boderWidth = '1px'
        div.style.boderColor = '#333'
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
                    mapTypeId:'meumapa', //roadmap, satellite, hybrid, terrain
                    mapTypeControlOptions: {
                        mapTypeIds: ['roadmap', 'meumapa','satellite', 'terrain']
                    }
            }
            map = new google.maps.Map(document.getElementById('map'),mapOptions);

            map.mapTypes.set('meumapa', new MeuMapa(new google.maps.Size(256, 256)));
           
        }