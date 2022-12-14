objects =[];
status = "";

function preload(){
    video = createVideo('video.mp4');
}

function setup(){
     canvas= createCanvas(500, 400);
     canvas.center();
     video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Onjects";

}

function modelLoaded() {
    console.log("model Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}