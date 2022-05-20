const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = canvas.width / 2;
let y = canvas.height / 2;
let radius = 50; 
let speed = 7;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;


function drawGame(){
    requestAnimationFrame(drawGame);
    clearScreen();
    inputs();
    boundryCheck();
    drawGreenBlob();
}

function boundryCheck(){
    if(y < radius){
        y = radius
    }
    if(x < radius){
        x = radius
    }
    if(y > canvas.height - radius){
    y = canvas.height - radius;
    }
    if(x > canvas.width - radius){
        x = canvas.width - radius;
    }

}

function inputs(){
    if(upPressed){
        y -= speed;
    }
    if(downPressed){
         y += speed;
    }
    if(leftPressed){
        x -= speed;
    }
    if(rightPressed){
        x += speed;
    }
}

function drawGreenBlob(){
ctx.fillStyle = "green"
if(upPressed || downPressed || leftPressed || rightPressed){
    ctx.fillStyle = "red";
}
    ctx.beginPath();
    ctx.arc(x,y, radius,0, Math.PI * 2);
    ctx.fill();
}

function clearScreen(){
ctx.fillStyle = "black";
ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

function keyDown(event){
    //up
    if(event.keyCode == 38){
        upPressed = true;
    }
    //down
    if (event.keyCode == 40){
        downPressed = true;
    }
    //left
    if (event.keyCode == 37){
        leftPressed = true;
    }
    //down
    if (event.keyCode == 39){
        rightPressed = true;
    }
}
function keyUp(event) {
    //up
    if(event.keyCode == 38){
        upPressed = false;
    }
    //down
    if (event.keyCode == 40){
        downPressed = false;
    }
    //left
    if (event.keyCode == 37){
        leftPressed = false;
    }
    //down
    if (event.keyCode == 39){
        rightPressed = false;
    }
}

drawGame();