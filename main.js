let gameBox = $(".gameBox");
let snake = $(".snake");
let food = $(".food");

let snakex = 0;
let snakey = 0;
let foodx = 0;
let foody = 0;
let snakeDivs = [[snakey, snakex]];
// let changeOfDirection = [];
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
  foodx = Math.floor(Math.random() * 10) + 1;
  foody = Math.floor(Math.random() * 10) + 1;
  food.css("grid-area", `${foody} / ${foodx}`);
}
randomFood();

let x = 1;
let y = 1;
function move() {
  // let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (x <= 10 && y <= 10 && x >= 1 && y >= 1) {
    // console.log(arr[x]);
    snake.css("grid-area", `${y} / ${x}`);
    x += direction.dx;
    y += direction.dy;
    snakex = Number(snake.css("grid-column").split("/")[0]);
    snakey = Number(snake.css("grid-row").split("/")[0]);
    console.log("x value: " + snakex + "     y value: " + snakey);
    // console.log(changeOfDirection);

    if (snakex === foodx && snakey === foody) {
      snakeDivs.push([foody, foodx]);
      console.log(snakeDivs);
      gameBox.append("<div class='snake'></div>");
      for (let i = 1; i < snakeDivs.length; i++) {
        $(".snake").css("grid-area", `${snakeDivs[i][0]} / ${snakeDivs[i][1]}`);
        snakeDivs[i][0] += direction.dy;
        snakeDivs[i][1] += direction.dx;
      }
      randomFood();
    }
  } else {
    clearInterval(myInterval);
    alert("Game Over");
  }
}
let myInterval = setInterval(move, 150);

// console.log(direction["d"]);
$("body").on("keydown", function (e) {
  // console.log(e.key);
  direction = dir[e.key];
  // changeOfDirection.push({
  //   x: snakex,
  //   y: snakey,
  //   dx: direction.dx,
  //   dy: direction.dy,
  // });
});
