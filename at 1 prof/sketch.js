const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint
var engine, world, ground, tower

function preload() {

}

function setup() {
  canvas = createCanvas(1200, 600)
  engine = Engine.create()
  world = engine.world

  

  //criar o corpo com 0, height -1, width *2,1,options
  //adicionar ao mundo


}

function draw() {
  //image(backgroundImg, 0, 0, 1200, 600)

  Engine.update(engine)


  
}
