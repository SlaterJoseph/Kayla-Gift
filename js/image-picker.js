var fs = require('fs');
var path = require('path');
// In newer Node.js versions where process is already global this isn't necessary.
var process = require("process");

function pickPics(datePath){
    if(datePath == "None"){
        return -1;
    }

    fs.readdir(datePath, function (err, files) {
        if (err) {
            console.error("Could not list the directory.", err);
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
        } else return images;
    });
}

function getRandomItem(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const item = arr[randomIndex];
    return item;
}