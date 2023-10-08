img = "";


function preload(){
img = loadImage("OIP.jpg")
}

function draw(){
    image(img,0,0,640,420);
    fill("#FF0000");
    text("bed" , 145, 145);
    noFill();
    stroke("#FF0000");
    rect(130, 130, 330, 250);

    fill("#FF9999");
    text("painting" , 320, 120);
    noFill();
    stroke("#FF9999");
    rect(250, 60, 150, 100);


    fill("#FF9999");
    text("lamp" , 520, 220);
    noFill();
    stroke("#FF9999");
    rect(520, 200, 40, 120);


    fill("#FF9999");
    text("lamp" , 50, 180);
    noFill();
    stroke("#FF9999");
    rect(50, 170, 40, 120);
}

function setup(){
canvas = createCanvas(640, 420);
canvas.center();
objectDetector = ml5.objectDetector("cocossd", modelLoaded);
}

function modelLoaded(){
    console.log("bwahahahahahahahah");
    objectDetector.detect(img ,gotResult);
}

function gotResult(error, results){
    if(error){
        console.log(error,"bruh you are dum haha");
    }
    console.log(results)
}