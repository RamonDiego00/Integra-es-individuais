let map;

async function initMap() {
    var mapOptions = {
            center:{lat:-3.716816, lng: -38.519115},
            zoom:16,
            // mapTypeId: 'satelite'
    }
    map = new google.maps.Map(document.getElementById('map'),mapOptions) 

    new google.maps.TrafficLayer({map})
    
    const heatmapData = [

        new google.maps.LatLng (37.782, -122.447),
        
        new google.maps.LatLng (37.782, -122.445),
        
        new google.maps.LatLng (37.782, -122.443),
        
        new google.maps.LatLng (37.782, -122.441),
        
        new google.maps.LatLng (37.782, -122.439),
        
        new google.maps.LatLng (37.782, -122.437),
        
        new google.maps.LatLng (37.782, -122.435),
        
        new google.maps.LatLng (37.785, -122.447),
        
        new google.maps.LatLng (37.785, -122.445), 

        new google.maps.LatLng (37.785, -122.443),
        
        new google.maps.LatLng (37.785, -122.441),
        
        new google.maps.LatLng (37.785, -122.439),
        
        new google.maps.LatLng (37.785, -122.437),
        
        new google.maps.LatLng (37.785, -122.435)
                ]

    const heatmap = new google.maps.visualization.HeatmapLayer({
        data: heatmapData,
        map:map 
    })
    
}