let colorB1;
let colorB2;
let colorB3;
let patternB;
let saveB;

let color1;
let color2;
let color3;

let square;

let x;

let pattern = 1;

function setup() {
  if(windowWidth < 651) {
      square = createCanvas(200, 200);
      x = 20;
  } else {
      square = createCanvas(400, 400);
      x = 40;
  }

  square.parent("createDiv");
  
  patternB = createButton("pattern");
  patternB.style("font-family", "Courier");
  patternB.mousePressed(changePattern);
  
  saveB = createButton("save");
  saveB.style("font-family", "Courier");
  saveB.mousePressed(saveSquare);

  colorB1 = document.createElement("INPUT");
  colorB1.setAttribute("type", "color");
  colorB1.setAttribute("id", "col1");
  document.getElementById("createButtons").appendChild(colorB1);
  document.getElementById("col1").value = "#4D7C8A";

  colorB2 = document.createElement("INPUT");
  colorB2.setAttribute("type", "color");
  colorB2.setAttribute("id", "col2");
  document.getElementById("createButtons").appendChild(colorB2);
  document.getElementById("col2").value = "#CBDF90";

  colorB3 = document.createElement("INPUT");
  colorB3.setAttribute("type", "color");
  colorB3.setAttribute("id", "col3");
  document.getElementById("createButtons").appendChild(colorB3);
  document.getElementById("col3").value = "#80B5AA";

  patternB.parent("createButtons");
  saveB.parent("createButtons");
}

function windowResized() {
  if(windowWidth < 651) {
      resizeCanvas(200, 200);
      x = 20;
  } else {
      resizeCanvas(400, 400);
      x = 40;
  }
}

function draw() {
  background(220);

  color1 = document.getElementById("col1").value
  color2 = document.getElementById("col2").value
  color3 = document.getElementById("col3").value
  
  noStroke();
  
  // colorB1.style("background-color", color1);
  // colorB2.style("background-color", color2);
  // colorB3.style("background-color", color3);

  patternB.style("background-color", "#F3EBE6");
  saveB.style("background-color", "#F3EBE6");
  
  //color1
  fill(color1);
  rect(0,0,x**2);
  
  if (pattern == 1) {

    //color2
    fill(color2);

    rect(0,0,x);
    rect(9*x,0,x);

    rect(2*x,x,x);
    rect(4*x,x,x);
    rect(5*x,x,x);
    rect(7*x,x,x);

    rect(x,2*x,x);
    rect(8*x,2*x,x);

    rect(3*x,3*x,x);
    rect(6*x,3*x,x);

    rect(x,4*x,x);
    rect(8*x,4*x,x);

    rect(x,5*x,x);
    rect(8*x,5*x,x);

    rect(3*x,6*x,x);
    rect(6*x,6*x,x);

    rect(x,7*x,x);
    rect(8*x,7*x,x);

    rect(2*x,8*x,x);
    rect(4*x,8*x,x);
    rect(5*x,8*x,x);
    rect(7*x,8*x,x);

    rect(0,9*x,x);
    rect(9*x,9*x,x);

    //color3
    fill(color3);

    rect(x,0,x);
    rect(4*x,0,x);
    rect(5*x,0,x);
    rect(8*x,0,x);

    rect(0,x,x);
    rect(1*x,x,x);
    rect(3*x,x,x);
    rect(6*x,x,x);
    rect(8*x,x,x);
    rect(9*x,x,x);

    rect(2*x,2*x,x);
    rect(4*x,2*x,x);
    rect(5*x,2*x,x);
    rect(7*x,2*x,x);

    rect(x,3*x,x);
    rect(8*x,3*x,x);

    rect(0,4*x,x);
    rect(2*x,4*x,x);
    rect(7*x,4*x,x);
    rect(9*x,4*x,x);

    rect(0,5*x,x);
    rect(2*x,5*x,x);
    rect(7*x,5*x,x);
    rect(9*x,5*x,x);

    rect(x,6*x,x);
    rect(8*x,6*x,x);

    rect(2*x,7*x,x);
    rect(4*x,7*x,x);
    rect(5*x,7*x,x);
    rect(7*x,7*x,x);

    rect(0,8*x,x);
    rect(1*x,8*x,x);
    rect(3*x,8*x,x);
    rect(6*x,8*x,x);
    rect(8*x,8*x,x);
    rect(9*x,8*x,x);

    rect(x,9*x,x);
    rect(4*x,9*x,x);
    rect(5*x,9*x,x);
    rect(8*x,9*x,x);
    
  } else if (pattern == 2) {
    //color2
    fill(color2);
    
    rect(x,0,x);
    rect(8*x,0,x);
    
    rect(0,x,x);
    rect(9*x,x,x);
    
    rect(2*x,2*x,x);
    rect(4*x,2*x,x);
    rect(5*x,2*x,x);
    rect(7*x,2*x,x);
    
    rect(3*x,3*x,x);
    rect(6*x,3*x,x);
    
    rect(2*x,4*x,x);
    rect(7*x,4*x,x);
    
    rect(2*x,5*x,x);
    rect(7*x,5*x,x);
    
    rect(3*x,6*x,x);
    rect(6*x,6*x,x);
    
    rect(2*x,7*x,x);
    rect(4*x,7*x,x);
    rect(5*x,7*x,x);
    rect(7*x,7*x,x);
    
    rect(0,8*x,x);
    rect(9*x,8*x,x);
    
    rect(x,9*x,x);
    rect(8*x,9*x,x);
  
    //color3
    fill(color3);
    
    rect(2*x,0,x);
    rect(4*x,0,x);
    rect(5*x,0,x);
    rect(7*x,0,x);
    
    rect(x,x,x);
    rect(4*x,x,x);
    rect(5*x,x,x);
    rect(8*x,x,x);
    
    rect(0,2*x,x);
    rect(9*x,2*x,x);
    
    rect(0,4*x,x)
    rect(x,4*x,x);
    rect(4*x,4*x,x);
    rect(5*x,4*x,x);
    rect(8*x,4*x,x);
    rect(9*x,4*x,x)
    
    rect(0,5*x,x)
    rect(x,5*x,x);
    rect(4*x,5*x,x);
    rect(5*x,5*x,x);
    rect(8*x,5*x,x);
    rect(9*x,5*x,x)
    
    rect(0,7*x,x);
    rect(9*x,7*x,x);
    
    rect(x,8*x,x);
    rect(4*x,8*x,x);
    rect(5*x,8*x,x);
    rect(8*x,8*x,x);
    
    rect(2*x,9*x,x);
    rect(4*x,9*x,x);
    rect(5*x,9*x,x);
    rect(7*x,9*x,x);
    
  } else if (pattern == 3) {
    //color2
    fill(color2);
    
    rect(0,0,x);
    rect(3*x,0,x);
    rect(6*x,0,x);
    rect(9*x,0,x);
    
    rect(0,3*x,x);
    rect(3*x,3*x,x);
    rect(6*x,3*x,x);
    rect(9*x,3*x,x);
    
    rect(0,6*x,x);
    rect(3*x,6*x,x);
    rect(6*x,6*x,x);
    rect(9*x,6*x,x);
    
    rect(0,9*x,x);
    rect(3*x,9*x,x);
    rect(6*x,9*x,x);
    rect(9*x,9*x,x);
    
    //color3
    fill(color3);
    
    rect(x,0,x);
    rect(5*x,0,x);
    rect(7*x,0,x);
    
    rect(0,x,x);
    rect(6*x,x,x);
    
    rect(3*x,2*x,x);
    rect(9*x,2*x,x);
    
    rect(2*x,3*x,x);
    rect(4*x,3*x,x);
    rect(8*x,3*x,x);
    
    rect(3*x,4*x,x);
    rect(9*x,4*x,x);
    
    rect(0,5*x,x);
    rect(6*x,5*x,x);
    
    rect(x,6*x,x);
    rect(5*x,6*x,x);
    rect(7*x,6*x,x);
    
    rect(0,7*x,x);
    rect(6*x,7*x,x);
    
    rect(3*x,8*x,x);
    rect(9*x,8*x,x);
    
    rect(2*x,9*x,x);
    rect(4*x,9*x,x);
    rect(8*x,9*x,x);
    
  } else if (pattern == 4) {
    //color2
    fill(color2);
    
    rect(0,0,x);
    rect(4*x,0,x);
    rect(5*x,0,x);
    rect(9*x,0,x);
    
    rect(x,x,x);
    rect(2*x,x,x);
    rect(7*x,x,x);
    rect(8*x,x,x);
    
    rect(x,2*x,x);
    rect(3*x,2*x,x);
    rect(6*x,2*x,x);
    rect(8*x,2*x,x);
    
    rect(2*x,3*x,x);
    rect(3*x,3*x,x);
    rect(6*x,3*x,x);
    rect(7*x,3*x,x);
    
    rect(0,4*x,x);
    rect(9*x,4*x,x);
    
    rect(0,5*x,x);
    rect(9*x,5*x,x);
    
    rect(2*x,6*x,x);
    rect(3*x,6*x,x);
    rect(6*x,6*x,x);
    rect(7*x,6*x,x);
    
    rect(x,7*x,x);
    rect(3*x,7*x,x);
    rect(6*x,7*x,x);
    rect(8*x,7*x,x);
    
    rect(x,8*x,x);
    rect(2*x,8*x,x);
    rect(7*x,8*x,x);
    rect(8*x,8*x,x);
    
    rect(0,9*x,x);
    rect(4*x,9*x,x);
    rect(5*x,9*x,x);
    rect(9*x,9*x,x);
    
    //color3
    fill(color3);
    
    rect(3*x,x,x);
    rect(6*x,x,x);
    
    rect(2*x,2*x,x);
    rect(4*x,2*x,x);
    rect(5*x,2*x,x);
    rect(7*x,2*x,x);
    
    rect(x,3*x,x);
    rect(4*x,3*x,x);
    rect(5*x,3*x,x);
    rect(8*x,3*x,x);
    
    rect(2*x,4*x,x);
    rect(3*x,4*x,x);
    rect(6*x,4*x,x);
    rect(7*x,4*x,x);
    
    rect(2*x,5*x,x);
    rect(3*x,5*x,x);
    rect(6*x,5*x,x);
    rect(7*x,5*x,x);
    
    rect(x,6*x,x);
    rect(4*x,6*x,x);
    rect(5*x,6*x,x);
    rect(8*x,6*x,x);
    
    rect(2*x,7*x,x);
    rect(4*x,7*x,x);
    rect(5*x,7*x,x);
    rect(7*x,7*x,x);
    
    rect(3*x,8*x,x);
    rect(6*x,8*x,x);
    
  } else {
        //color2
    fill(color2);
    
    rect(0,0,2*x);
    rect(6*x,0,2*x);
    
    rect(2*x,2*x,2*x);
    rect(8*x,2*x,2*x);
    
    rect(4*x,4*x,2*x);
    
    rect(0,6*x,2*x);
    rect(6*x,6*x,2*x);
    
    rect(2*x,8*x,2*x);
    rect(8*x,8*x,2*x);
    
    //color3
    fill(color3);
    
    rect(2*x,0,2*x);
    rect(8*x,0,2*x);
    
    rect(4*x,2*x,2*x);
    
    rect(0,4*x,2*x);
    rect(6*x,4*x,2*x);
    
    rect(2*x,6*x,2*x);
    rect(8*x,6*x,2*x);
    
    rect(4*x,8*x,2*x);
    
  }
}

function changePattern() {
  if (pattern < 5) {
    pattern ++;
  } else {
    pattern = 1;
  }
}

function saveSquare() {
  saveCanvas(square, "mySquare", "jpg");
}
