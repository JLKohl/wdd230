var imageCount = 1;
var imageDescriptions = [
    'the Plaza del Sol, San Miguel of Cozumel, Mexico. Cozumel',
    'Aerial view of Chen Rio beach in Cozumel',
    'White sand beach in Cozumel',
    'Port in Puerta Maya - Cozumel, Mexico',
    'Turtle in the clear blue water of Cozumel Mexico',
    'Cozumel sign during sunrise Over the Caribbean Sea '
];

function changeImage(){
    document.getElementById("slideshowImage").src = 'images/image' + imageCount + '.webp';
    document.getElementById("imageDescription").textContent = imageDescriptions[imageCount-1];
    imageCount++;
    if (imageCount > 6) {
        imageCount = 1;
    }
}

setInterval(changeImage, 3000);