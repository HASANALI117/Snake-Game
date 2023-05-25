let gameBox = document.querySelector(".gameBox");
let score = document.querySelector(".score");
let scoreCount = 0;

let highScore = document.querySelector(".highScore");
let highScoreCount = localStorage.getItem("highScore") || 0;
highScore.innerText = `High Score : ${highScoreCount}`;

let foodX;
let foodY;

let snakeX = 3;
let snakeY = 3;

let snakeBody = [];

let direction = {
  dx: 0,
  dy: 0,
};

let gameLoop = setInterval(game, 100);

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

function gameOver() {
  clearInterval(gameLoop);
  alert("Game Over!");
}

function game() {
  if (snakeX > 0 && snakeY > 0 && snakeX < 31 && snakeY < 31) {
    let gameContent = `<div class="food" style="grid-area: ${foodY} / ${foodX}"></div>`;
    if (snakeX === foodX && snakeY === foodY) {
      scoreCount++;
      console.log(scoreCount);
      snakeBody.push([foodY, foodX]);
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
      if (
        i !== 0 &&
        snakeBody[0][0] === snakeBody[i][0] &&
        snakeBody[0][1] === snakeBody[i][1]
      ) {
        gameOver();
      }
    }

    if (scoreCount > highScoreCount) {
      highScoreCount = scoreCount;
    }

    localStorage.setItem("highScore", highScoreCount);
    score.innerText = `Score : ${scoreCount}`;
    gameBox.innerHTML = gameContent;
  } else {
    gameOver();
  }
}

document.addEventListener("keydown", function (e) {
  let newDirection = keyDirection[e.key];
  if (
    newDirection.dx + direction.dx !== 0 ||
    newDirection.dy + direction.dy !== 0
  ) {
    direction = keyDirection[e.key];
  }
});
