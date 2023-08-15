//Game code(moves and board setup)
//Setting up board 
let board = [
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
];

let widthh; // = width / 3;
let heightt; // = height / 3;

let artificial = 'X';
let human = 'O';
let currentPlayer = human;

function setup() {
  createCanvas(400, 400);
  widthh = width / 3;
  heightt = height / 3;
  bestMove();
}

function equals3(a, b, c) {
  return a == b && b == c && a != '';
}
//code to see winner
function checkWinner() {
  let winner = null;

  // horizontal
  for (let i = 0; i < 3; i++) {
    if (equals3(board[i][0], board[i][1], board[i][2])) {
      winner = board[i][0];
    }
  }

  // Vertical
  for (let i = 0; i < 3; i++) {
    if (equals3(board[0][i], board[1][i], board[2][i])) {
      winner = board[0][i];
    }
  }

  // Diagonal
  if (equals3(board[0][0], board[1][1], board[2][2])) {
    winner = board[0][0];
  }
  if (equals3(board[2][0], board[1][1], board[0][2])) {
    winner = board[2][0];
  }

  let openSpots = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == '') {
        openSpots++;
      }
    }
  }

  if (winner == null && openSpots == 0) {
    return 'tie';
  } else {
    return winner;
  }
}

function mousePressed() {
  if (currentPlayer == human) {
    // Human make turn
    let i = floor(mouseX / widthh);
    let j = floor(mouseY / heightt);
    // If valid turn
    if (board[i][j] == '') {
      board[i][j] = human;
      currentPlayer = artificial;
      bestMove();
    }
  }
}

function draw() {
  background(255);
  strokeWeight(4);

  line(widthh, 0, widthh, height);
  line(widthh * 2, 0, widthh * 2, height);
  line(0, heightt, width, heightt);
  line(0, heightt * 2, width, heightt * 2);

  for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 3; i++) {
      let x = widthh * i + widthh / 2;
      let y = heightt * j + heightt / 2;
      let spot = board[i][j];
      textSize(32);
      let r = widthh / 4;
      if (spot == human) {
        noFill();
        ellipse(x, y, r * 2);
      } else if (spot == artificial) {
        line(x - r, y - r, x + r, y + r);
        line(x + r, y - r, x - r, y + r);
      }
    }
  }

  let result = checkWinner();
  if (result != null) {
    noLoop();
    let resultP = createP('');
    resultP.style('font-size', '32pt');
    if (result == 'tie') {
      resultP.html('It is a Tie!');
    } else {
      resultP.html(`${result} wins the match!`);
    }
  }
}
