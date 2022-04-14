
Webacam.set({
    width: 360,
    height: 350,
    image_format : 'png' ,
    png_quality : 90
})

camera = document.getElementById("camera");

Webacam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="capture_img" src="'+ data_uri + '"/>';

    });
}

console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/[...]', modelLoaded);

function modelLoaded()
{
    console.log('Model Loaded');

}
