const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var groundObj1,groundObj2,groundObj3;
var blockA1,blockA2,blockA3,blockA4,blockA5,blockA6,blockA7;
var blockA8,blockA9,blockA10,blockA11,blockA12;
var blockB1,blockB2,blockB3,blockB4,blockB5,blockB6;
var blockC1,blockC2,blockC3;
var blockC4,blockC5,blockC6;
var blockD1;
var polygonObj,slingshot;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    groundObj1 = new Ground(600,395,1200,10);
    groundObj2 = new Ground(600,300,300,10);
    groundObj3 = new Ground(930,200,230,10);
    
    blockA1 = new Block1(505,270,30,40);
    blockA2 = new Block1(535,270,30,40);
    blockA3 = new Block1(565,270,30,40);
    blockA4 = new Block1(595,270,30,40);
    blockA5 = new Block1(625,270,30,40);
    blockA6 = new Block1(655,270,30,40);
    blockA7 = new Block1(685,270,30,40);

    blockA8 = new Block1(900,180,30,40);
    blockA9 = new Block1(925,180,30,40);
    blockA10 = new Block1(935,180,30,40);
    blockA11 = new Block1(945,180,30,40);
    blockA12 = new Block1(955,180,30,40);

    blockB1 = new Block2(535,250,30,40);
    blockB2 = new Block2(565,250,30,40);
    blockB3 = new Block2(595,250,30,40);
    blockB4 = new Block2(625,250,30,40);
    blockB5 = new Block2(655,250,30,40);

    blockB6 = new Block2(930,140,30,40);

    blockC1 = new Block3(565,230,30,40);
    blockC2 = new Block3(595,230,30,40);
    blockC3 = new Block3(625,230,30,40);

    blockC4 = new Block3(915,160,30,40);
    blockC5 = new Block3(925,160,30,40);
    blockC6 = new Block3(945,160,30,40);

    blockD1 = new Block4(595,210,30,40);

    polygonObj = new Polygon(200,200,20);

    slingshot = new SlingShot(polygonObj.body,{x:200,y:200});
    

}

function draw(){
    background(60,46,46);
    Engine.update(engine);

    textSize(30);
    fill("white")
    text('Drag the Hexagonal Stone and Release It towards the Blocks',100,50);

    groundObj1.display();
    groundObj2.display();
    groundObj3.display();

    blockA1.display();
    blockA2.display();
    blockA3.display();
    blockA4.display();
    blockA5.display();
    blockA6.display();
    blockA7.display();

    blockA8.display();
    blockA9.display();
    blockA10.display();
    blockA11.display();
    blockA12.display();

    blockB1.display();
    blockB2.display();
    blockB3.display();
    blockB4.display();
    blockB5.display();
    blockB6.display();

    blockC1.display();
    blockC2.display();
    blockC3.display();

    blockC4.display();
    blockC5.display();
    blockC6.display();

    blockD1.display();

    polygonObj.display();
    slingshot.display();

    

    drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(polygonObj.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
    

