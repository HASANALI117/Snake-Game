let box = document.querySelector(".box");

let foodX;
let foodY;
let snakeX = 3;
let snakeY = 3;
let snakeBody = [];
let direction = {
  dx: 0,
  dy: 0,
};
const keyDirection = {
  d: { dx: 1, dy: 0 },
  a: { dx: -1, dy: 0 },
  w: { dx: 0, dy: -1 },
  s: { dx: 0, dy: 1 },
};
function randomFood() {
  foodX = Math.floor(Math.random() * 30 + 1);
  foodY = Math.floor(Math.random() * 30 + 1);
}
randomFood();
function game() {
  if (snakeX > 0 && snakeY > 0 && snakeX < 31 && snakeY < 31) {
    let gameContent = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    if (snakeX === foodX && snakeY === foodY) {
      snakeBody.push([foodY, foodX]);
      console.log(snakeBody);
      randomFood();
    }

    for (let i = snakeBody.length - 1; i > 0; i--) {
      snakeBody[i] = snakeBody[i - 1];
    }

    snakeBody[0] = [snakeY, snakeX];

    snakeX += direction.dx;
    snakeY += direction.dy;
    for (let i = 0; i < snakeBody.length; i++) {
      gameContent += `<div class="snake" style="grid-area: ${snakeBody[i][0]} / ${snakeBody[i][1]}"></div>`;
    }
    $(".snake").css("background-color", "yellow");
    box.innerHTML = gameContent;
  } else {
    clearInterval(gameLoop);
    alert("Game Over!");
  }
}
let gameLoop = setInterval(game, 100);
document.addEventListener("keydown", function (e) {
  direction = keyDirection[e.key];
});
