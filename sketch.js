const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg  = "sunrise1.png";

function preload() {
    getBackgroundImg();
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    if(backgroundImg)
    background(backgroundImg);


    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    var response = await fetch ("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=0500 && hour<=0700){
        bg = "sunrise1.png";
    }
    else if(hour>=0700 && hour<=0900){
        bg = "sunrise2.png";
    }
    else if(hour>=0900 && hour<=1100){
        bg = "sunrise3.png";
    }
    else if(hour>=1100 && hour<=1300){
        bg = "sunrise4.png";
    }   
    else if(hour>=1300 && hour<=1500){
        bg = "sunrise5.png";
    }
    else if(hour>=1500 && hour<=1800){
        bg = "sunrise6.png";
    }
    else if(hour>=1800 && hour<=1900){
        bg = "sunset7.png";
    }
    else if(hour>=1900 && hour<=2000){
        bg = "sunset8.png";
    }
    else if(hour>=2000 && hour<=2100){
        bg = "sunset9.png";
    }
    else if(hour>=2100 && hour<=2200){
        bg = "sunset10.png";
    }
    else if(hour>=2400 && hour<=2300){
        bg = "sunset11.png";
    }
    else if(hour>=2300 && hour<=2400){
        bg = "sunset12.png";
    }

    backgroundImg = loadImage(bg);
  

}
