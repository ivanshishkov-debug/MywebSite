let car2 = 1
let car1 = 1
let luka = 1
let gugu = 1
let x = 100
let wolk = 130
let night = -1800

function setup() {
  createCanvas(1000, 800)
}

function draw() {
  background(220)
  strokeWeight(0)

  fill("#ADD8E6")
  rect(1, 1, 1000, 800)
  fill("black")
  rect(night, 1, 1000, 800)
  fill("yellow")
  circle(x, 120, 150)
  fill("white")
  circle(700 + night, 120, 150)

  if (night > 600) night = 1110
  night++
  if (x > 2500) x = 1
  x++
  if (wolk < 0) wolk = 400
  wolk--
  if (gugu > 20) gugu = 0
  gugu += 0.2
  if (luka < 0) luka = 20
  luka -= 0.2

  let lightTimer = frameCount % 300
  let lightColor

  if (lightTimer < 120) {
    lightColor = "red"
  } else if (lightTimer < 160) {
    lightColor = "yellow"
  } else {
    lightColor = "green"
  }

  fill("grey")
  rect(900, 440, 10, 110)
  rect(880, 370, 50, 120)

  if (lightColor === "red") {
    fill("red")
    circle(905, 390, 30)
  }
  if (lightColor === "yellow") {
    fill("yellow")
    circle(905, 430, 30)
  }
  if (lightColor === "green") {
    fill("green")
    circle(905, 465, 30)
  }

  let speed1 = 0
  let speed2 = 0

  if (lightColor === "green") {
    speed1 = 6
    speed2 = 3
  } else if (lightColor === "yellow") {
    speed1 = 2
    speed2 = 1
  } else if (lightColor === "red") {
    speed1 = 0
    speed2 = 0
  }

  car1 += speed1
  car2 += speed2

  if (car1 > 1000) car1 = -200
  if (car2 > 1400) car2 = -400

  fill("white")
  circle(wolk, 190, 40)
  circle(wolk + 80, 190, 40)
  circle(wolk + 40, 190, 50)
  circle(wolk + 260, 190, 40)
  circle(wolk + 335, 190, 40)
  circle(wolk + 300, 190, 50)

  fill("grey")
  rect(1, 550, 1000, 800)
  triangle(300, 600, 600, 250, 700, 600)
  triangle(100, 600, 300, 200, 450, 600)

  fill("white")
  rect(40, 600, 70, 20)
  rect(200, 600, 70, 20)
  rect(360, 600, 70, 20)
  rect(520, 600, 70, 20)

  fill("green")
  rect(1, 550, 1000, 10)

  fill("pink")
  rect(car1 + 100, 600, 100, 60)
  rect(car1 + 180, 625, 30, 30)
  fill("black")
  circle(car1 + 115, 660, 30)
  circle(car1 + 175, 660, 30)

  fill("blue")
  rect(car2 + 60, 550, 100, 60)
  rect(car2 + 140, 580, 30, 30)
  fill("black")
  circle(car2 + 75, 610, 30)
  circle(car2 + 140, 610, 30)

  fill("red")
  rect(car2 - 360, 550, 100, 60)
  rect(car2 - 280, 580, 30, 30)
  fill("black")
  circle(car2 - 340, 610, 30)
  circle(car2 - 280, 610, 30)

  fill("brown")
  rect(200, 430, 20, 120)
  rect(380, 430, 20, 120)
  rect(600, 430, 20, 120)
  rect(80, 430, 20, 120)
  rect(490, 430, 20, 120)
  rect(300, 580, 20, 120)

  fill("green")
  circle(gugu + 220, 430, 60)
  circle(gugu + 400, 430, 60)
  circle(gugu + 620, 430, 60)
  circle(gugu + 100, 430, 60)
  circle(gugu + 510, 430, 60)
  circle(gugu + 320, 580, 60)

  fill("#006400")
  circle(luka + 195, 430, 60)
  circle(luka + 375, 430, 60)
  circle(luka + 595, 430, 60)
  circle(luka + 80, 430, 60)
  circle(luka + 485, 430, 60)
  circle(luka + 295, 580, 60)
}
