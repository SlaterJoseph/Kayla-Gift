document.querySelector(".side-panel-toggle").addEventListener("click", () => {
    document.querySelector(".wrapper").classList.toggle("side-panel-open");
});


function initMap(){

    var options = {
        zoom: 13,
        center: {lat:40.7506, lng:-73.9935},
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    add_marker( {lat:40.75660161879017, lng:-73.98876249883801})

    
    // var infoWindow = new google.maps.infoWindow({
    //     content: ''
    // });

    function add_marker(coords){
        var marker = new google.maps.Marker({
            position: coords,
            map: map,
            icon: "images/heart-marker.png"
        });
    }

}


