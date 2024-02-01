
difference=0
LeftwristX=0
RightwristX=0

function setup(){
    video=createCapture(VIDEO)
    video.size(550,500)
    canvas=createCanvas(550,500)
    canvas.position(560,150)
    poseNet=ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}

function modelLoaded(){
    console.log('poseNet is intiallized')
}

function draw(){
    background('#999897')
    fill('#8f6060')
    stroke('#292626')
    strokeWeight(10)
    text("Aditya",50,400)

    textSize(difference)
}

function gotPoses(results){
    if(results.length>0){
        leftwristX=results[0].pose.leftWrist.x
        rightwristX=results[0].pose.rightWrist.x
        difference=floor(leftwristX-rightwristX)

    }
}