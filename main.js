var song = "";
var song1 = "";
var song2 = "";
var song1_status = "";
var song2_status = "";
var scorerw = 0;
var scorelw = 0;
var lefty = 0;
var leftx = 0;
var rightx = 0;
var righty = 0;

function preload(){
song1 = loadSound('');
song2 = loudSound('');
}

function setup(){
canvas = createCanvas(600,550);
canvas.center();
video = createCapture(VIDEO);
video.hide();
poseNet = ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){
console.log("modelLoaded");
}

function gotPoses(results){
if(results.length > 0){
console.log(results);
scorerw = results[0].pose.keypoints[10].score;
scorelw = results[0].pose.keypoints[9].score;
rightx = results[0].pose.rightWrist.x;
righty = results[0].pose.rightWrist.y;
leftx = results[0].pose.rightWrist.x;
lefty = results[0].pose.rightWrist.y;
}
}

function draw(){
Image(video,0,0,600,550);
song1_status = song1.isPlaying();
song2_status = song2.isPlaying();
fill('#00FF00');
stroke('#00FF00');
if(scorerw > 0.2){
circle(rightx,righty,20);
song2.stop();

if(song1_status == false){
song1.play;
document.getElementsById("q").innerHTML = "Playing ";
}
}
if(scorelw > 0.2){
    circle(leftx,lefty,20);
    song1.stop();
    
    if(song2_status == false){
    song2.play;
    document.getElementsById("q").innerHTML = "Playing ";
    }
    }
};

function play(){
song.play();
song.setvolume(1);
};



