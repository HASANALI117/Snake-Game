let gameBox = $(".gameBox");
let snake = $(".snake");
let food = $(".food");

let snakex;
let snakey;
let snakeDivs = {
  x: 5,
  y: 5,
  // { x: 6, y: 6 },
};
// snake.css("grid-row", snakeDivs.y);
// snake.css("grid-column", snakeDivs.x);

let foodx = Math.floor(Math.random() * 10) + 1;
let foody = Math.floor(Math.random() * 10) + 1;

function randomFood() {
  food.css("grid-area", `${foody} / ${foodx}`);
}
randomFood();

let i = 1;
function move() {
  let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (i <= 10) {
    snake.css("grid-column", i);
    console.log(arr[i]);
  }
  i++;
}
setInterval(move, 650);
