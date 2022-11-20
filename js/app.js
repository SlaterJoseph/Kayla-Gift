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

        const pics = pickPics(thisDate[3]);
        for(var i = 0; i < pics.length; i++){
            var img = $("<img>")
            img.attr("src", pics[i]);
            $("#pics").append(img);
        }

    });
});

function clearOverlays(){
    for (var i = 0; i < markersArray.length; i++ ) markersArray[i].setMap(null);
    markersArray.length = 0;
}

var fs = require('fs');
var path = require('path');
// In newer Node.js versions where process is already global this isn't necessary.
var process = require("process");

function pickPics(datePath){

    if(datePath === "None"){
        return [];
    }

    fs.readdir(datePath, function (err, files) {
        if (err) {
            alert("Could not list the directory.", err);
            process.exit(1);
        }

        var images = [];
        files.forEach(function (file, index) {
            // Make one pass and make the file complete
            images.push(file);
        });


        if(images.length > 3){
            var item1 = getRandomItem(images);
            images.delete(item1);

            var item2 = getRandomItem(images);
            images.delete(item2);

            var item3 = getRandomItem(images);
            images.delete(item3);

            return [item1, item2, item3];
        } else return images;
    });
}

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}