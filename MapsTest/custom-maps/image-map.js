var map;
        function initMap() {
            var mapOptions = {
                    center: {lat: -34.397, lng: 150.644},
                    zoom: 8,
                    // disableDefaultUI: true,
                    // zoomControl:false,
                    // streetViewControl:false,
                    mapTypeControlOptions: {
                        style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                        position: google.maps.MapTypeControlStyle.TOP_CENTER,
                        mapTypeIds: ['osm']
                    }
            }

            map = new google.maps.Map(document.getElementById('map'),mapOptions)   

            //ImageMapType
            var imageMapType = new google.maps.ImageMapType({
                tileSize: new google.maps.Size(256,256) ,
                getTileUrl: function(coord, zoom) {
                    return 'https://tile.openstreetmap.org/' + zoom + '/' + coord.x + '/' + coord.y + '.png';
                },
                maxZoom: 18,
                name:'Open Street Map'
            });
            map.mapTypes.set('osm', imageMapType);
            map.setMapTypeId('osm')
        }