// let gameBox = $(".gameBox");
// let snake = $(".snake");
// let food = $(".food");

// let snakex = 1;
// let snakey = 1;
// let foodx = 0;
// let foody = 0;
// let snakeDivs = [];
// let direction = {
//   dx: 1,
//   dy: 0,
// };
// const dir = {
//   d: {
//     dx: 1,
//     dy: 0,
//   },
//   w: {
//     dx: 0,
//     dy: -1,
//   },
//   a: {
//     dx: -1,
//     dy: 0,
//   },
//   s: {
//     dx: 0,
//     dy: 1,
//   },
// };

// function randomFood() {
//   foodx = Math.floor(Math.random() * 10) + 1;
//   foody = Math.floor(Math.random() * 10) + 1;
//   food.css("grid-area", `${foody} / ${foodx}`);
// }
// randomFood();

// function game() {
//   // gameBox.html(
//   //   `<div class="snake" style="grid-area:${snakey} / ${snakex}"></div>`
//   // );
//   snake.css("grid-area", `${snakey} / ${snakex}`);

//   if (snakex === foodx && snakey === foody) {
//     snakeDivs.push([foody, foodx]);
//     randomFood();
//     console.log(snakeDivs);
//   }
//   for (let i = snakeDivs.length - 1; i > 0; i--) {
//     snakeDivs[i] = snakeDivs[i] - 1;
//   }
//   snakeDivs[0] = [snakey, snakex];
//   for (let i = 0; i < snakeDivs.length; i++) {
//     gameBox.append(
//       `<div class="snake" style="grid-area:${snakeDivs[i][0]} / ${snakeDivs[i][1]}"></div>`
//     );
//   }

//   snakex += direction.dx;
//   snakey += direction.dy;
//   // let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   // if (snakex <= 10 && snakey <= 10 && snakex >= 1 && snakey >= 1) {
//   //   console.log(snakey, snakex);
//   // } else {
//   //   clearInterval(gameLoop);
//   //   alert("Game Over");
//   // }
//   // console.log(arr[x]);
//   // snakex = Number(snake.css("grid-column").split("/")[0]);
//   // snakey = Number(snake.css("grid-row").split("/")[0]);
//   // console.log("x value: " + snakex + "     y value: " + snakey);
//   // console.log(changeOfDirection);
//   // }
// }

// let gameLoop = setInterval(game, 150);
// $("body").on("keydown", function (e) {
//   direction = dir[e.key];
// });

let gameBox = $(".gameBox");
let snake = $(".snake");
let food = $(".food");
let snakex = 1;
let snakey = 1;
let foodx = 0;
let foody = 0;
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

function moveSnake() {
  // Move each segment of the snake's body
  for (let i = snakeDivs.length - 1; i > 0; i--) {
    snakeDivs[i] = [...snakeDivs[i - 1]];
    const [y, x] = snakeDivs[i];
    $(`.snake:nth-child(${i + 1})`).css("grid-area", `${y} / ${x}`);
  }
}

function game() {
  if (snakex <= 10 && snakey <= 10 && snakex >= 1 && snakey >= 1) {
    moveSnake(); // Call the moveSnake function

    if (snakex === foodx && snakey === foody) {
      snakeDivs.push([foody, foodx]);
      console.log(snakeDivs);
      randomFood();
      for (let i = 0; i < snakeDivs.length; i++) {
        gameBox.append(
          `<div class="snake" style="grid-area:${snakeDivs[i][0]} / ${snakeDivs[i][1]}"></div>`
        );
      }
    }
    // Move the snake's head
    snakeDivs[0] = [snakey, snakex];
    snake.css("grid-area", `${snakey} / ${snakex}`);
    console.log(snakey, snakex);
    snakex += direction.dx;
    snakey += direction.dy;
  } else {
    clearInterval(gameLoop);
    alert("Game Over");
  }
}

let snakeDivs = [[snakey, snakex]]; // Store the snake's body segments

let gameLoop = setInterval(game, 150);

$("body").on("keydown", function (e) {
  direction = dir[e.key];
});
