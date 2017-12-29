// this function is to load the map and attach markers on the maps
function myMap() {
    // extract the location information from the api
    xhr('get', {
        path: '/location/'
    }, '#coop').done(function (json) {
        
        // fetch the DOM element that will contain the map
        var canvas = $('#mapData')[0];
        // set the initial center of the map(when the map loads it will be in this location)
        var mapOptions = {
            center: new google.maps.LatLng(40.9861699, -97.2208409),
            zoom: 4
        };
        // load the map
        map = new google.maps.Map(canvas, mapOptions);
        
        // fetch the location co-ordinates to insert the markers
        $.each(json,function(){
            
            var markerLocation = new google.maps.LatLng(this.latitude, this.longitude)
            var marker = new google.maps.Marker({
                position: markerLocation,
                animation: google.maps.Animation.BOUNCE,
                map: map

            });
            // extract the location city and state to add as a label on the markers
            var city = this.city;
            var state = this.state;
            // show the city name and state on an onclick event.
          google.maps.event.addListener(marker,'click',function(){
              
             var info = new google.maps.InfoWindow({
                     
                 content: city+", "+state
             }); 
              
              info.open(map,marker);
          });  
            
        });

    });


}
