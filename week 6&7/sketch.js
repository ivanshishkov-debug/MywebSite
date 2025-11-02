let hunger = 50;
let energy = 50;
let happiness = 50;
let health = 50;
let lastUpdate = 0;
let img;
let imgSleep;
let cooldownFeed = 0;
let cooldownSleep = 0;
let cooldownPlay = 0;
let cooldownClean = 0;
let Sleeping = false;
let sleeptimer = 0;

let ResetBtn;




function preload() {
  img = loadImage("dexter.png");
  imgSleep = loadImage("dextersleep.png");
  imgHappy = loadImage("dexterhappy.png");
  imgRoom = loadImage("dexterroom.png");
  imgDead = loadImage("dexterdead.png");
  imgApartament = loadImage("dexterapartament.png");
  imgDisney = loadImage("dexterdisney.png");
  imgKitchen = loadImage("dexterkitchen.png");
  imgBathroom = loadImage("dexterbathroom.png");
  imgPlayground = loadImage("dexterplayground.png");
}
function setup() {
  createCanvas(800, 800);




  let LoadBtn = createButton("Load");
  LoadBtn.position(500, 70);
  LoadBtn.size(50, 50);
  LoadBtn.style("color", "black");
  LoadBtn.mousePressed(loadGame);


  let SaveBtn = createButton("Save");
  SaveBtn.position(600, 70);
  SaveBtn.size(50, 50);
  SaveBtn.style("color", "black");
  SaveBtn.mousePressed(saveGame);

  let FeedBtn = createButton("Feed")
  FeedBtn.position(100, 200);
  FeedBtn.size(50, 20);
  FeedBtn.style("color", "black");
  FeedBtn.mousePressed(feed);


  let SleepBtn = createButton("Sleep")
  SleepBtn.position(300, 200);
  SleepBtn.size(50, 20);
  SleepBtn.style("color", "black");
  SleepBtn.mousePressed(sleep);



  let Playbtn = createButton("Play");
  Playbtn.position(100, 500);
  Playbtn.size(50, 20);
  Playbtn.style("color", "black");
  Playbtn.mousePressed(play);


  let CleanBtn = createButton("Clean");
  CleanBtn.position(300, 500);
  CleanBtn.size(50, 20);
  CleanBtn.style("color", "balck");
  CleanBtn.mousePressed(clean);

  ResetBtn = createButton("RESET");
  ResetBtn.position(100, 100);
  ResetBtn.size(60, 30);
  ResetBtn.style("color", "black");
  ResetBtn.mousePressed(reset);
  ResetBtn.hide()

  noSmooth();


  image(img, 100, 100, img.width * 5, img.height * 5);
  loadGame();
}
function draw() {
  background(220);

  if (health === 0) {
    image(imgDead, 10, 10, imgDead.width * 1.3, imgDead.height * 1.3);
    cooldownClean = 1000;
    cooldownFeed = 1000;
    cooldownPlay = 1000;
    cooldownSleep = 1000;
    ResetBtn.show();
  } else {


    if (millis() - lastUpdate > 1000) {

      updateStatsOverTime();
      lastUpdate = millis();
    }

    if (cooldownSleep > 0) {
      image(imgRoom, -100, 1, imgRoom.width * 1, imgRoom.height * 1);
      image(imgSleep, 100, 260, imgSleep.width * 0.6, imgSleep.height * 0.5);

    } else if (cooldownFeed > 0) {
     image(imgKitchen,1,1,imgKitchen.width* 2,imgKitchen.height*2);
       image(img, 100, 260, img.width * 0.6, img.height * 0.5);

    } else if (cooldownClean > 0){
     image(imgBathroom,1,1,imgBathroom.width *2,imgBathroom.height*2 );
     image(img, 100, 260, img.width * 0.6, img.height * 0.5);
    }
    else if(cooldownPlay > 0){
      image(imgPlayground,1,1,imgPlayground.width *0.5,imgPlayground.height*1);
    image(imgHappy, 100, 260, imgHappy.width * 0.2, imgHappy.height * 0.2);
    }
    else if (happiness >= 60) {
      image(imgDisney, -1000, -800, imgDisney.width * 2, imgDisney.height * 2);
      image(imgHappy, 100, 260, imgHappy.width * 0.2, imgHappy.height * 0.2);
    }
    else {
      image(imgApartament, 1, 1, imgApartament.width * 0.5, imgApartament.height * 0.5);
      image(img, 100, 260, img.width * 0.6, img.height * 0.5);

    }


    if (cooldownFeed > 0) {
      cooldownFeed = cooldownFeed - (deltaTime / 1000);
    }
    if (cooldownSleep > 0) {
      cooldownSleep = cooldownSleep - (deltaTime / 1000);
    }
    if (cooldownPlay > 0) {
      cooldownPlay = cooldownPlay - (deltaTime / 1000);
    }
    if (cooldownClean > 0) {
      cooldownClean = cooldownClean - (deltaTime / 1000);
    }

  }
  fill("orange");
  text("HUNGER", 30, 20)
  fill(255);
  rect(20, 40, 100, 10);
  fill("orange");
  rect(20, 40, hunger, 10);


  fill("yellow")
  text("ENERGY", 190, 20)
  fill(255);
  rect(180, 40, 100, 10);
  fill("yellow");
  rect(180, 40, energy, 10);

  fill("red")
  text("HEALTH", 360, 20)
  fill(255);
  rect(350, 40, 100, 10);
  fill("red");
  rect(350, 40, health, 10);



  fill("green")
  text("HAPPINNES", 510, 20);
  fill(255);
  rect(500, 40, 100, 10);
  fill("green");
  rect(500, 40, happiness, 10);

}




function feed() {
  if (cooldownFeed <= 0 && cooldownSleep <= 0 && hunger > 10) {
    hunger -= 20;
    energy += 5;
    health += 5;
    limitStats();
    cooldownFeed = 2;
  }




}
function sleep() {
  //time fot sleeping
  if (cooldownSleep <= 0 && energy < 40) {
    energy += 60;
    health += 10;
    hunger += 5;
    happiness += 5;
    limitStats();
    cooldownSleep = 15;
  }
}
function clean() {
  if (cooldownClean <= 0 && cooldownSleep <= 0) {
    health += 20;
    happiness += 5;
    limitStats();
    cooldownClean = 7;
  }
}
function play() {
  if (cooldownPlay <= 0 && cooldownSleep <= 0 && energy >= 10) {
    happiness += 15;
    energy -= 10;
    hunger += 5;
    limitStats();
    cooldownPlay = 3;
  }
}
function limitStats() {
  hunger = constrain(hunger, 0, 100);
  energy = constrain(energy, 0, 100);
  happiness = constrain(happiness, 0, 100);
  health = constrain(health, 0, 100);

}
function updateStatsOverTime() {
  hunger += 0.3;
  energy -= 0.1;
  happiness -= 0.3;
  health -= 10;
  if (hunger === 100) {
    health -= 3;
  }
  if (energy <= 0) {
    health -= 3;
  }
  if (happiness === 0) {
    health -= 1;
  }
  limitStats(); //чтобы значения не вышли за 0 или 100
}
function reset() {
  cooldownClean = 0;
  cooldownPlay = 0;
  cooldownFeed = 0;
  cooldownSleep = 0;
  health = 50;
  hunger = 50;
  energy = 50;
  happiness = 50;
  ResetBtn.hide();
}
function saveGame() {
  localStorage.setItem("hunger", hunger);
  localStorage.setItem("energy", energy);
  localStorage.setItem("health", health);
  localStorage.setItem("happinnes", happiness);
  localStorage.setItem("cooldownFeed", cooldownFeed);
  localStorage.setItem("cooldownSleep", cooldownSleep);
  localStorage.setItem("cooldownPlay", cooldownPlay);
  localStorage.setItem("cooldownClean", cooldownClean);



}
function loadGame() {
  hunger = Number(localStorage.getItem("hunger")) || hunger;
  energy = Number(localStorage.getItem("energy")) || energy;
  health = Number(localStorage.getItem("health")) || health;
  happiness = Number(localStorage.getItem("happinnes")) || happiness;
  cooldownFeed = Number(localStorage.getItem("cooldownFeed")) || 0;
  cooldownSleep = Number(localStorage.getItem("cooldownSleep")) || 0;
  cooldownPlay = Number(localStorage.getItem("cooldownPlay")) || 0;
  cooldownClean = Number(localStorage.getItem("cooldownClean")) || 0;
}
