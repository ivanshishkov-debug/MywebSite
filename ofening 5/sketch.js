let ballx=500
let bally=200

let getal = 0
let stoplicht = 0

function setup() {
  createCanvas(800, 600);
}

function keyPressed() {
  if (keyCode == ENTER) {
    stoplicht++;
    if (stoplicht == 3){
      stoplicht=0
    }
    console.log(stoplicht);
  }

}
function draw() {
textSize(12)
  background(220);
  if (getal > 500) {
    getal = 0
  }

  getal++
  fill("black")
  text("1.Houd B in om een blokje te laten verschijnen.", 20, 20);
  text("2. Druk op spatie om het getal op 0 te zetten.", 20, 120)
  text("3. Druk op enter om van rood -> groen -> oranje te gaan.", 20, 240)
  text("4. Beweeg de eightball met WASD of de pijltjestoetsen.", 360, 20)
  text(getal, 40, 170);
  if (keyIsPressed === true) {
    if (keyCode === 66) {
      fill("white")
      rect(20, 40, 60, 60)
    }




  }

  fill("grey")
  rect(40, 270, 70, 200)
  rect(65, 470, 20, 120)
  if (keyIsPressed === true) {
    if (keyCode === 13) {
      //als stoplicht gelijk is aan 0
    }
  }
  if (stoplicht == 0) {

    fill("red")

    circle(75, 310, 50)

  }
  //als stoplicht gelijk is aan 1
  if (stoplicht == 1) {
    fill("orange")
    circle(75, 370, 50)
  }

  //als stoplicht gelijk is aan 2
  if (stoplicht == 2) {
    fill("green")
    circle(75, 430, 50)

  }
 if (keyIsDown(87)){

 bally--
 } 
  if (keyIsDown(83)){
    bally++
  }
  if (keyIsDown(65)){
    ballx--
  }
  if (keyIsDown(68)){
    ballx++
  }
  fill("black")
  circle(ballx,bally,160)
  fill("white")
  circle(ballx,bally,125)
textSize(40)
  fill("black")
 text("8",ballx-10,bally+10)

 
  




}