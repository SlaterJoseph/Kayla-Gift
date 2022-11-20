function initMap(){
    var options = {
        zoom: 11,
        center: {lat:40.70461243206324, lng:-73.99079274223253},
    }

    //40.70461243206324, -73.99079274223253

    map = new google.maps.Map(document.getElementById('map'), options);
}

//Date - Description - [Name, Lat, Long] - Path to Images
var map = "";
var markersArray = [];

for(var i = 0; i < dates.length; i++){
    var section = document.getElementById("dates-date");
    var btn = document.createElement("button");
    btn.innerHTML = dates[i][0];
    btn.className = "dates-button " + "dates-" + i + " btn btn-outline-dark";
    section.appendChild(btn)
}

document.querySelector(".side-panel-toggle").addEventListener("click", () => {
    document.querySelector(".wrapper").classList.toggle("side-panel-open");
});

function add_marker(coords, name, map){
    var marker = new google.maps.Marker({
        position: coords,
        map: map,
        title: name,
        icon: "images/heart-marker.png"
    });

    marker.addListener('click', function() {
        alert("This is a marker of " + marker.getTitle() + ".");
    })

    // marker.setMap();
    markersArray.push(marker);
}


$(function(){
    $(".dates-button").click(function(){
        const index = this.classList[1].split("-")[1];
        const thisDate = dates[index];

        clearOverlays();

        if(thisDate[2].length > 1){
            for(var i = 0; i < thisDate[2].length; i++){
                const coords  = {lat: thisDate[2][i][1], lng: thisDate[2][i][2]}
                add_marker(coords, thisDate[2][i][0], map)
            }
        } else {
            const coords  = {lat: thisDate[2][0][1], lng: thisDate[2][0][2]}
            add_marker(coords, thisDate[2][0][0], map)
        }
        
        $("#date").html(thisDate[0]);
        $("#date-desc").html(thisDate[1]);
        $("#pics").empty();

        const month = new Map([
            ["04", "Apr"],
            ["05", "May"],
            ["08", "Aug"],
            ["09", "Sep"],
            ["10", "Oct"],
            ["11", "Nov"],
        ]);

        var day = month.get(thisDate[0].split('/')[0])+ "-" + thisDate[0].split('/')[1] + "-" + thisDate[0].split('/')[2];
        var path = "images/dates/" + day + "/";

        for(var i = 0; i < thisDate[3]; i++){
            var thisPath = path + (i + 1) + ".jpg";
            var img = $('<img>');
            img.attr('src', thisPath);
            img.appendTo("#pics");
        }

    });
});

function clearOverlays(){
    for (var i = 0; i < markersArray.length; i++ ) markersArray[i].setMap(null);
    markersArray.length = 0;
}