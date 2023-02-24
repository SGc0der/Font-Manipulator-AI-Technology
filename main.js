function setup() {
    video = createCapture(VIDEO);
    video.position(200, 190);
    video.size(400, 300);
    canvas = createCanvas(400, 300);
    canvas.position(690, 175);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded() 
{
    console.log(ml5.version);
}
function gotPoses(results) {
    console.log(results);
    if(results > 0)
    {

    }
}