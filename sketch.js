var gamestate = "play"
function preload(){
sharkImg = loadImage("shark.png")
fishImg = loadImage("fish.png")
plasticImg = loadImage("plastic.png")
bgImg = loadImage("background.png")
}

function setup() {
 createCanvas(600, 400)
 shark = createSprite(400, 200, 40, 40)
 shark.addImage("sharkImg")
 shark.scale = 0.8
 fish = createSprite(200, 200, 40, 40)
 fish.addImage("fishImg")
 fish.scale = 0.5
 plastics()
 bg = createSprite(600, 400)
 bg.addImage("bgImg")
 bg.velocityX = 2
 plasticg = createGroup()

}

function draw(){
    drawSprites()
}

function plastics(){
    if (frameCount%70===0){
        plastic = createSprite(-100, random(50, 350))
        plastic.velocityX = 3
        plastic.addImage(plasticImg)
        plasticg.add(plastic)
        shark.depth = plastic.depth + 1
    }
}