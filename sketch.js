const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let Engine;
let world;
var ground, bridge;
var  leftWall, rightWall;
var jointPonint;
var jointLink;

var stones = [];






function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base(0,height - 10, width * 2, 20,"#795548", true);
  leftWall = new Base(300, height / 2 + 50, 600, 100,"#8d6e63", true );
  rightWall = new Base(width - 300, height / 2 + 50, 600, 100, "8d6e63", true);

  bridge = new bridge(15,{ x: width / 2 - 400, y: height /2});
  jointPonint = new Base(width - 600, height / 2 + 10, 40, 20,"#8d6e63", true);

  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stones = new stones(x, y, 80, 80);
    stones.push(stones);
  }
 
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show();
  bridge.show();
  leftWall.show();
  rightWall.show();

  for(var stones of stones) {
    stones.show();
  }

}
