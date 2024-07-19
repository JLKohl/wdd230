var imageCount = 1;
var imageDescriptions = [
    'the Plaza del Sol, San Miguel of Cozumel, Mexico. Cozumel',
    'Aerial view of Chen Rio beach in Cozumel',
    'thing for image 3',
    'Description is for image 4',
    'Description that I have for image 5',
    'test for image 6'
];

function changeImage(){
    document.getElementById("slideshowImage").src = 'https://picsum.photos/400/200?random=beach' + imageCount;
    document.getElementById("imageDescription").textContent = imageDescriptions[imageCount-1];
    imageCount++;
    if (imageCount > 6) {
        imageCount = 1;
    }
}

setInterval(changeImage, 2000);