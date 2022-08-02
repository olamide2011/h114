noseX=0;
noseY=0;
function preload() {
    clown_image=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function setup() {
    canvas= createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300) 
}
function draw(){
    image(video,0,0,300,300)
}