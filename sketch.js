const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function preload(){
    /*trashcanImage = loadImage("sprites/dustbin.png");
    trashcan=createSprite(810,380,140,140);
    trashcan.addImage(trashcanImage);*/
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);

    Iground = new InvisibleGround(600,407,1200,20);

    barrier = new Barrier(765,325,5,125);

    barrier2 = new Barrier(855,325,5,125);
    
    trash =  new Trash(810,323,140, PI/2);

    bird = new Bird(100,100);
}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
    
    
    
    bird.display();
    trash.display();
}

function keyPressed() {
    if(keyCode === UP_ARROW){
        Matter.Body.applyForce(bird.body,bird.body.position,{x:85,y:200});
    }
}