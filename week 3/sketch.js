let winner=0;
let block1 = 0
let block2 = 0
let block3 = 0
let block4 = 0
let block5 = 0
let block6 = 0
let block7 = 0
let block8 = 0
let block9 = 0
let resetButton;
let player = 1;
let winnerText="";
let drawText="";
let gameOver=false
function setup() {
  createCanvas(1000, 800);
resetButton= createButton ("reset")
resetButton.position(650,100);
resetButton.mousePressed(resetGame);


}
function draw() {
 if (player==1){
  background(0,0,250)
 }
 if(player ==2){
  background(250,0,0)
 }
  
  fill("black")
  rect(100, 80, 500, 540)
  fill("grey")

  //teken alle vakjes
 

  square(110, 100, 150, 20, 20, 20, 20)
  square(275, 100, 150, 20, 20, 20, 20)
  square(440, 100, 150, 20, 20, 20, 20)
  square(110, 270, 150, 20, 20, 20, 20)
  square(275, 270, 150, 20, 20, 20, 20)
  square(440, 270, 150, 20, 20, 20, 20)
  square(110, 440, 150, 20, 20, 20, 20)
  square(275, 440, 150, 20, 20, 20, 20)
  square(440, 440, 150, 20, 20, 20, 20)
 
  //als block1 == 1
  //teken op deze een X

  //als block1 gelijk is aan 2
  //Teken een O op  die plek


  //als block2 == 1
  //teken op deze een X

  //als block2 gelijk is aan 2
  //Teken een O op  die plek
  if (block1 == 1) {
    fill("blue")
    square(110, 100, 150, 20, 20, 20, 20)
  }
  if (block1 == 2) {
    fill("red")
    square(110, 100, 150, 20, 20, 20, 20)
  }
  if (block2 == 1) {
    fill("blue")
    square(275, 100, 150, 20, 20, 20, 20)
  }
  if (block2 == 2) {
    fill("red")
    square(275, 100, 150, 20, 20, 20, 20)
  }
  if (block3 == 1) {
    fill("blue")
    square(440, 100, 150, 20, 20, 20, 20)
  }
  if (block3 == 2) {
    fill("red")
    square(440, 100, 150, 20, 20, 20, 20)
  }
  if (block4 == 1) {
    fill("blue")
    square(110, 270, 150, 20, 20, 20, 20)
  }
  if (block4 == 2) {
    fill("red")
    square(110, 270, 150, 20, 20, 20, 20)
  }
  if (block5 == 1) {
    fill("blue")
    square(275, 270, 150, 20, 20, 20, 20)

  }
  if (block5 == 2) {
    fill("red")
    square(275, 270, 150, 20, 20, 20, 20)

  }
  if (block6 == 1) {
    fill("blue")
    square(440, 270, 150, 20, 20, 20, 20)
  }
  if (block6 == 2) {
    fill("red")
    square(440, 270, 150, 20, 20, 20, 20)
  }
  if (block7 == 1) {
    fill("blue")
    square(110, 440, 150, 20, 20, 20, 20)

  }
  if (block7 == 2) {
    fill("red")
    square(110, 440, 150, 20, 20, 20, 20)

  }
  if (block8 == 1) {
    fill("blue")
    square(275, 440, 150, 20, 20, 20, 20)
  }
  if (block8 == 2) {
    fill("red")
    square(275, 440, 150, 20, 20, 20, 20)
  }
  if (block9 == 1) {
    fill("blue")
    square(440, 440, 150, 20, 20, 20, 20)
  }
  if (block9 == 2) {
    fill("red")
    square(440, 440, 150, 20, 20, 20, 20)
  }
fill("white");
textSize(70);

if (winnerText != "") {
  text(winnerText, 200, 200);
} else if (drawText != "") {
  text(drawText, 200, 200);
}


 


}
function mouseClicked() {
  if (winner==0){

  
  let vakjeClicked = false;
  if (mouseY > 100 && mouseY < 250) {
    if (mouseX > 110 && mouseX < 260) {
      console.log("vakje 1")
      if (block1 == 0) {
        block1 = player;
        vakjeClicked = true;
      }
    }
  }

  if (mouseY > 100 && mouseY < 250) {

    if (mouseX > 275 && mouseX < 425) {
      console.log("vakje 2")
      if (block2 == 0) {
        block2 = player;
        vakjeClicked = true;
      }
    }
  }


  if (mouseY > 100 && mouseY < 250) {

    if (mouseX > 440 && mouseX < 590) {
      console.log("vakje 3")
      if (block3 == 0) {
        block3 = player;
        vakjeClicked = true;
      }
    }
  }
  if (mouseY > 270 && mouseY < 420) {
    if (mouseX > 110 && mouseX < 260){
      console.log("vakje 4")
    if (block4 == 0) {
      block4 = player;
      vakjeClicked = true;
    }
  }
}
  if (mouseY > 270 && mouseY < 420) {
    if (mouseX > 275 && mouseX < 425){
      console.log("vakje 5")
    if (block5 == 0) {
      block5 = player;
      vakjeClicked = true;
    }
    }
  }
  if (mouseY > 270 && mouseY < 420) {
    if (mouseX > 440 && mouseX < 590){
      console.log("vakje 6")
    if (block6 == 0) {
      block6 = player;
      vakjeClicked = true;
   } 
  }
  }
  if (mouseY > 440 && mouseY < 590) {
    if (mouseX > 110 && mouseX < 260){
      console.log("vakje 7")
    if (block7 == 0) {
      block7 = player;
      vakjeClicked = true;
   }
   }
  }
  if (mouseY > 440 && mouseY < 590) {
    if (mouseX > 275 && mouseX < 425){
      console.log("vakje 8")
    if (block8 == 0) {
      block8 = player;
      vakjeClicked = true;
    }
  }
}
  if (mouseY > 440 && mouseY < 590) {
    if (mouseX > 440 && mouseX < 590){
      console.log("vakje 9")
    if (block9 == 0) {
      block9 = player;
      vakjeClicked = true;
   }
   }
  }
  if (vakjeClicked) {
    if (player == 1) {
      player = 2
    }
    else {
      player = 1;
      
    }
   }

   Checkwinner();
  }
}
function Checkwinner() {
// --- проверка ничьи: только если победителя нет 
if (
  block1 != 0 && block2 != 0 && block3 != 0 &&
  block4 != 0 && block5 != 0 && block6 != 0 &&
  block7 != 0 && block8 != 0 && block9 != 0
) {
  drawText = "Draw";
} else {
  drawText = ""; 
}











if (block1 == block2 && block2 == block3 && block1 !=0){
  winner = block1;
  if (winner==1){
    winnerText="Blue Won"
  }else{
    winnerText="Red won"
  }
}
  if (block4 == block5&& block5==block6&& block4!=0){
    winner=block4;
    if (winner==1){
    winnerText="Blue Won"
  }else{
    winnerText="Red won"
  }
  }
  if (block7== block8&&block8 ==block9&&block7!=0){
    winner=block7;
    if (winner==1){
    winnerText="Blue Won"
  }else{
    winnerText="Red won"
  }
  }
  if (block1 == block4 && block4 == block7&& block1!=0){
    winner=block1;
    if (winner==1){
    winnerText="Blue Won"
  }else{
    winnerText="Red won"
  }
  }
  if (block2 == block5 && block5 == block8&& block2!=0){
    winner=block2;
    if (winner==1){
    winnerText="Blue Won"
  }else{
    winnerText="Red won"
  }
  }
  if (block3 == block6&& block6==block9 && block3!=0){
    winner=block3;
    if (winner==1){
    winnerText="Blue Won"
  }else{
    winnerText="Red won"
  }
  }
  if (block1 == block5&& block5== block9&&block1!=0){
    winner=block1;
    if (winner==1){
    winnerText="Blue Won"
  }else{
    winnerText="Red won"
  }
  }
  if (block3 == block5 && block5 == block7 && block3 != 0) {
    winner = block3;
    if (winner==1){
    winnerText="Blue Won"
  }else{
    winnerText="Red won"
  }
  }
  if (winner != 0) {
  console.log("Player " + winner + " wins!");
}









}

function resetGame(){
block1=0
block2=0
block3=0
block4=0
block5=0
block6=0
block7=0
block8=0
block9=0
winnerText="";
player = 1;
winner=0

}




