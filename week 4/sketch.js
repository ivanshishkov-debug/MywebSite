let vierhoek = [];
let circles = [];
function setup() {
  createCanvas(800, 600);



}
function draw() {
 background(0,20)
for (let c of circles ){////рисоавка кругов в дроу
  fill(random(255),random(255),random(255));
  noStroke();
ellipse(c.x,c.y,c.r);
c.x+=c.dx;
c.y +=c.dy;
}
for (let v of vierhoek){////рисоавка квадратов в дроу
fill(random(255),random(255),random(255));
  noStroke();
  rect(v.x,v.y,v.w,v.h);
  v.x+=v.dx;
  v.y+=v.dy;


}


}
function keyPressed(){
if (keyCode === BACKSPACE) {
  circles = [];
  vierhoek = [];
for  ( let i = 0;i < 20;i++){///основной спавн и цвет кругов
let x=random(width);
let y= random(height);
let r= random(20,100);
fill(random(255),random(255),random(255));
noStroke();
let circle = {




  x:x,
  y:y,
  r:r,
  dx : random (-2,2),///скорость по X
  dy : random (-2,2)///скорость по Y

};
circles.push(circle);

}
 for (let i=0;i < 20; i ++){///основной спавн и цвет квадратов
let x=random(width);
let y= random(height);
let w= random(20,100);
let h= random(20,100);
fill(random(255),random(255),random(255));
noStroke();
let square = {
x:x,
y:y,
w:w,
h:h,
dx : random (-2,2),
  dy : random (-2,2)

};
vierhoek.push(square);
 } 

}



}
