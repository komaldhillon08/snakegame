// Game constants
let diration = { x: 0, y: 0 };
const foodSound = new Audio("../music/food.mp3");
const gameOverSound = new Audio("../music/gameover.mp3");
const moveSound = new Audio("../music/move.mp3");
const musicSound = new Audio("../music/music.mp3");
lastPaintTime = 0;
let speed = 2;
let skaneArr = [
    {
        x: 13,
        y: 15
    }
]
food = {
    x: 6,
    y: 7
}


// GAME FUNCTION 
function main(ctime) {
    window.requestAnimationFrame(main);
    //console.log(ctime);
    if ((ctime - lastPaintTime) / 1000 < 1 / speed) {
        return;
    }
    lastPaintTime = ctime
    gameEngine()

}

function gameEngine() {
    // part 1 update the snake array
    // render the snake and food 


    board.innerHTML = "";
    skaneArr.forEach((e, index) => {
        // display the snake 
        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        if (index === 0) {
            snakeElement.classList.add("head")
        } else {
            snakeElement.classList.add("snake")

        }
        board.appendChild(snakeElement);

    });
    // display the food 
    foodElement = document.createElement("div");
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food")
    board.appendChild(foodElement);
}













// MAIN LOGIC STRATS HERE 
window.requestAnimationFrame(main);