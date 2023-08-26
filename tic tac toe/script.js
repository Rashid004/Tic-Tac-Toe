console.log("Welcome Tic Tac Toe");
// Dom Selection 
const music = new Audio("music.mp3");
const audioTurn = new Audio("ting.mp3");
const gameOver = new Audio("gameover.mp3");

const boxes = document.getElementsByClassName("box");
const reset = document.querySelector(".btn-reset");


let turn = "X";
let isGameover = false;

//  Function to Change Turn
 const changeTurn = () => {
 return turn === 'X'? '0' : 'X';
 };

//  Function To Check Win
 const checkWin = () => {
  const boxtext = document.getElementsByClassName('box-text');
  let wins = [
    [0,1,2 ,5,5,0],
    [3,4,5 ,5,15,0],
    [6,7,8 ,5,25,0],

    [0,3,6 ,-4.2,15,90],
    [1,4,7 ,6,15,90],
    [2,5,8 ,16,16,90],

    [0,4,8 ,5,14.8,45],
    [2,4,6 ,6.5,15,135],
  ]
   
  // music.play();
  wins.forEach(e => {
    if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) &&
     (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]]. innerText !== '')) {
      document.querySelector('.info').innerText = boxtext[e[0]].innerText + ' Won The Match🏆🎉'
      document.querySelector('.img-box').getElementsByTagName('img')[0].style.width = '20rem';

      document.querySelector('.line').style.transform = `translate(${e[[3]]}vw, ${e[[4]]}vw) rotate(${e[[5]]}deg)`;
      document.querySelector('.line').style.width = '20vw';
       isGameover = true;
       gameOver.play();
    }
  })
 };

//  Rendering Game Logic
const renderGame = function() {
  Array.from(boxes).forEach(el => {
   let boxtext = el.querySelector(".box-text");
   el.addEventListener("click", () => {

     if(boxtext.innerText === '') {
       boxtext.innerText = turn;

       turn = changeTurn();
       audioTurn.play();
       checkWin();

       if(!isGameover) {
         document.getElementsByClassName("info")[0].innerText = "Turn for player " + turn;
         }
       }
     });
   });  
};
renderGame();

//  Function for reset Game 
const resetGame = function() {
reset.addEventListener('click', () => {
  let boxtext = document.querySelectorAll(".box-text");
   Array.from(boxtext).forEach(el => {
    el.innerText = '';
  })
   turn = 'X';
      isGameover = false
      document.getElementsByClassName("info")[0].innerText = "Turn for Player " + turn;
      document.querySelector(".img-box").getElementsByTagName("img")[0].style.width = "0rem";
      document.querySelector(".line").style.width = "0";
      gameOver.pause();   
 });
};
resetGame();

