let emptyGrid = Array(16).fill().map(() => Array(16).fill(0));   ///maken empty grid
let grid = JSON.parse(JSON.stringify(emptyGrid));





let iets = [
  [0, 0, 0, 0, 0, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 4, 4, 4, 3, 3, 3, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 4, 4, 1, 1, 4, 4, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 3, 4, 4, 4, 4, 4, 3, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0]
  
  
]
let Flag = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0],
  [0, 0, 0, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0],
  [0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0],
  [0, 0, 0, 3, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0],
  [0, 0, 0, 0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
  [0, 0, 0, 3, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 3, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  
  
]


let selectedColor = 1;
function saveGrid(){
localStorage.setItem("pixelart",JSON.stringify(grid));//кладет в память рисунок в виде текста

}
function loadGrid(){
let saved = localStorage.getItem("pixelart");//загружает обратно страницу при перезагрузке
if (saved) {
  grid = JSON.parse(saved)//makes text to massive 
}

}
function setup() {
  createCanvas(800, 800);
let resetBtn = createButton("Reset");
resetBtn.position(100,480);
resetBtn.size(80,40);
resetBtn.mousePressed(() => {
for (let y = 0; y < grid.length; y++){
for (let x = 0; x < grid[y].length;x++){
 grid[y][x] = 0; //clean alle vakjes
}






}

});

let FlagBtn = createButton("Flag");
FlagBtn.position(340,400);
FlagBtn.mousePressed(() => grid = JSON.parse(JSON.stringify(Flag)));


let ietsBtn = createButton("flavor");
ietsBtn.position(420,400);
ietsBtn.mousePressed(()  => grid = JSON.parse(JSON.stringify(iets)));


let gridBtn = createButton("Grid");
gridBtn.position(480,400);
gridBtn.mousePressed(() => grid = JSON.parse(JSON.stringify(emptyGrid)));



let blueBtn = createButton("");
blueBtn.position(20,400);
blueBtn.size(40, 40);
blueBtn.style("background-color","blue");
blueBtn.mousePressed(() => selectedColor = 1);



let redBtn = createButton("");
redBtn.position(100,400);
redBtn.size(40,40);
redBtn.style("background-color","red");
redBtn.mousePressed(() => selectedColor = 3);

let greenBtn = createButton("");
greenBtn.position(180,400);
greenBtn.size(40,40);
greenBtn.style("background-color","green");
greenBtn.mousePressed(() => selectedColor = 2);

let yellowBtn= createButton("");
yellowBtn.position(260,400);
yellowBtn.size(40,40);
yellowBtn.style("background-color","yellow");
yellowBtn.mousePressed(() => selectedColor = 4)

let whiteBtn= createButton("");
whiteBtn.position(20,480);
whiteBtn.size(40,40);
whiteBtn.style("background-color","white")
whiteBtn.mousePressed(() => selectedColor = 0)




let saveBtn = createButton("Save");
saveBtn.position(300,480);
saveBtn.size(80,40);
saveBtn.mousePressed(saveGrid);



let loadBtn = createButton("Load");
loadBtn.position(390,480);
loadBtn.size(80,40);
loadBtn.mousePressed(loadGrid);
}
function draw() {
  background(220);


for (let y = 0; y < grid.length; y++) {
  for(let x = 0; x < grid[y].length;x++ ){
    if (grid[y][x]== 1){
      fill("blue");
    } else if (grid[y][x]== 0){
       fill("white")
    } else if ( grid[y][x]== 2){
      fill("green")
    } else if ( grid[y][x]== 3){
      fill("red")
    } else if (grid[y][x]== 4){
      fill("yellow")
    }
    rect(0 + x * 20, 0 + y *20,20)
  }
 

}




}

function mouseClicked() {
  for (let y = 0; y<grid.length;y++){
    for(let x = 0; x < grid[y].length;x++){
      let leftSide = x * 20;
      let rightSide = leftSide + 20;
      let topSide = y * 20;
      let lowSide = topSide + 20;


      if (mouseX > leftSide && mouseX < rightSide){
      if (mouseY > topSide && mouseY < lowSide){
         console.log(x + " "+ y);
         grid[y][x] = selectedColor; 
       
      }
    }
  }
 

}
}






