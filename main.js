let gameBox = $(".gameBox");
let snake = $(".snake");
let food = $(".food");

let snakex;
let snakey;
let snakeDivs = {
  x: 5,
  y: 5,
};

let currentX = Number(snake.css("grid-column").split("/")[0]);
let currentY = Number(snake.css("grid-row").split("/")[0]);

let foodx = Math.floor(Math.random() * 10) + 1;
let foody = Math.floor(Math.random() * 10) + 1;

let direction = {
  dx: 1,
  dy: 0,
};
const dir = {
  d: {
    dx: 1,
    dy: 0,
  },
  w: {
    dx: 0,
    dy: -1,
  },
  a: {
    dx: -1,
    dy: 0,
  },
  s: {
    dx: 0,
    dy: 1,
  },
};

function randomFood() {
  food.css("grid-area", `${foody} / ${foodx}`);
}
randomFood();

let x = 1;
let y = 1;
let myInterval = setInterval(move, 150);
function move() {
  // let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (x <= 10 && y <= 10 && x >= 1 && y >= 1) {
    snake.css("grid-area", `${y} / ${x}`);
    console.log("x value: " + currentX + "     y value: " + currentY);
    // console.log(arr[x]);
    x += direction.dx;
    y += direction.dy;
  } else {
    clearInterval(myInterval);
    alert("Game Over");
  }
}
// console.log(direction["d"]);
$("body").on("keydown", function (e) {
  console.log(e.key);
  direction = dir[e.key];
});
