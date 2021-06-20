coordinate=0;
positionx=0;
positiony=0;
function setup(){
    video=createCapture(VIDEO);
    video.size(500,300);
    video.parent('liveVideo');
    canvas=createCanvas(500,300);
    canvas.parent('canvas');
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',Result);
}
function modelLoaded(){
    console.log("The model is loaded");
}
function Result(result){
    if(result.length>0){
        console.log(result);
        coordinate=result[0].pose.rightWrist.x;
        coordinate-=result[0].pose.leftWrist.x;
        positionx=result[0].pose.nose.x;
        positiony=result[0].pose.nose.y;
    }
}
function draw(){
    background('grey');
    square(positionx,positiony,coordinate);
    stroke('black');
    fill('lightgreen');
}

// It is the code for Circle Manipulator
// coordinate=0;
// positionx=0;
// positiony=0;
// function setup(){
//     video=createCapture(VIDEO);
//     video.size(500,300);
//     video.parent('liveVideo');
//     canvas=createCanvas(500,300);
//     canvas.parent('canvas');
//     poseNet=ml5.poseNet(video,modelLoaded);
//     poseNet.on('pose',Result);
// }
// function modelLoaded(){
//     console.log("The model is loaded");
// }
// function Result(result){
//     if(result.length>0){
//         console.log(result);
//         coordinate=result[0].pose.rightWrist.x;
//         coordinate-=result[0].pose.leftWrist.x;
//         positionx=result[0].pose.nose.x;
//         positiony=result[0].pose.nose.y;
//     }
// }
// function draw(){
//     background('grey');
//     circle(positionx,positiony,coordinate);
//     stroke('black');
//     fill('lightgreen');
// }