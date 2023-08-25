console.log("Welcome Tic Tac Toe");
const music = new Audio("music.mp3");
const audioTurn = new Audio("ting.mp3");
const gameOver = new Audio("gameover.mp3");

let turn = "X";

//  Function to Change Turn
 const changeTurn = () => {
 return turn === "X"? "0" : "X";
 }

//  Function To Check Win
 const checkWin = () => {

 };

//  Rendering Game Logic
 const boxes = document.getElementsByClassName("box");

 Array.from(boxes).forEach(el => {
  let boxtext = el.querySelector(".box-text");
  el.addEventListener("click", () => {
    if(boxtext.innerText === '') {
      boxtext.innerText = turn;

      turn = changeTurn();
      audioTurn.play();
      checkWin();

      document.getElementsByClassName("info")[0].innerText = "Turn for" + turn;
    }

  })

 });  