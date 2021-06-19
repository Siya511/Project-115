nose_x = 0;
nose_y = 0;

function preload(){}

function setup(){
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is Initialized");
}

function gotPoses(result){
    if(result.lenght > 0){
        console.log(result);

        nose_x = result[0].pose.nose.x;
        nose_y = result[0].pose.nose.y;

    }
}

function draw(){}

function take_snapshot(){
    save("mustache_image.png");
}