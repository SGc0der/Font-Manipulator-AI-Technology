function setup() 
{
    video = createCapture(VIDEO);
    video.position(200, 220);
    video.size(400, 300);
    canvas = createCanvas(400, 300);
    canvas.position(690, 205);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function modelLoaded() 
{
    console.log("PoseNet is on " + ml5.version);
}
leftWristX = 0;
rightWristX = 0;
difference = 0;
function gotPoses(results) 
{
    if(results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = Math.floor(leftWristX - rightWristX);
        console.log(leftWristX + " & " + rightWristX);
        console.log(difference);
    }
}
text_input = "";
function disable()
{
    //document.getElementById("text_input").disabled = true;
    text_input = document.getElementById("text_input").value;
    console.log(text_input);
}
function draw()
{
    background("white");
    textSize(difference);
    stroke("black");
    text(text_input , 10, 200);
}