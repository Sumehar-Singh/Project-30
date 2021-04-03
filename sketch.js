const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,60);
    platform = new Ground(500, 450, 270, 15);
    platform2 = new Ground(950, 250, 210, 15);
    
    polygon = new Polygon(100,300);

    block1 = new Block(410,425,30,40);
    block2 = new Block(440,425,30,40);
    block3 = new Block(470,425,30,40);
    block4 = new Block(500,425,30,40);
    block5 = new Block(530,425,30,40);
    block6 = new Block(560,425,30,40);
    block7 = new Block(590,425,30,40);

    block8 = new Block(440,385,30,40);
    block9 = new Block(470,385,30,40);
    block10 = new Block(500,385,30,40);
    block11 = new Block(530,385,30,40);
    block12 = new Block(560,385,30,40);

    block13 = new Block(470,345,30,40);
    block14 = new Block(500,345,30,40);
    block15 = new Block(530,345,30,40);

    block16 = new Block(500,305,30,40);

    block17 = new Block(890,225,30,40);
    block18 = new Block(920,225,30,40);
    block19 = new Block(950,225,30,40);
    block20 = new Block(980,225,30,40);
    block21 = new Block(1010,225,30,40);

    block22 = new Block(920,185,30,40);
    block23 = new Block(950,185,30,40);
    block24 = new Block(980,185,30,40);

    block25 = new Block(950,145,30,40);
    slingshot = new SlingShot(polygon.body,{x:100, y:300});
}

function draw(){
    background("black");

    Engine.update(engine);
    textSize(25);
    fill("white");
    text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks", 200, 50); 
    text("Press Space to get a second chance to play!!", 350, 80);

    ground.display();
    platform.display(); 
    platform2.display();

    polygon.display();

    fill("skyblue");
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();

    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();

    fill("yellow");
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();

    fill("red");
    block13.display();
    block14.display();
    block15.display();

    block22.display();
    block23.display();
    block24.display();
        
    fill("lightgreen");
    block16.display();

    block25.display();
    
    slingshot.display();
   
}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}
