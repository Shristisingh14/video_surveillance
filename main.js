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
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function modelLoaded() {
    console.log("model Loaded");
    status = true;
    video.loop();
    video.speed(1);
    video.volume(0);
}

function draw() {
    image(video, 0, 0, 500, 400);
    if(status != "")
    {
        objectDetector.detect(video, gotResults);
        for( i = 0; i < objects.length; i++ ){
            document.getElementById("status").innerHTML = "Status : Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected : " + objects.length;
            fill("#00FF00");
            percent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 2, objects[i].y-15);
            noFill();
            stroke("#00FF00");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);

        }
    }
}
function gotResults(error, results) {
  if(error){
    console.log(error);
  }
  console.log(results);
  objects = results;
}