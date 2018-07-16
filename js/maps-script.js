function myMap(){
    var mapCanvas = document.getElementById("map");
    var myCenter = new google.maps.LatLng(52.552578, 13.382203);
    var mapOptions = {center: myCenter, zoom: 15};
    var map = new google.maps.Map(mapCanvas,mapOptions);
    var marker = new google.maps.Marker({
        position: myCenter,
    });
    var image = {
        url: 'pics/mappointer.svg',
        scaledSize: new google.maps.Size(50, 50),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(25, 50)
    };

    marker.setIcon(image);
    marker.setMap(map);
    var infoWindow = new google.maps.InfoWindow({content:'<b>Flux Ice Cream</b><br>Prinzenallee 1<br>13357 Berlin'});
    infoWindow.open(map,marker);
};
/*google.maps.event.addDomListener(window,"load",myMap());*/
