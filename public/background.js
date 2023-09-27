let squareArray = [];
let speed;
let bttn;
let slider;
let canvas;
let choice = 0;

function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0,0);
    canvas.style("z-index", -1);
    canvas.style("position", "fixed");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  background(243, 235, 230);

  for (let i = 0; i < squareArray.length; i++) {
    squareArray[i].display();
    squareArray[i].move();
    squareArray[i].size();
  }
  
  speed = 2;
}

function mouseClicked() {
  if (mouseX < width && mouseY < height) {
    squareArray.push(new Square(mouseX, mouseY));
    choice ++;
  }
} //adding new squares/xs

class Square {
    constructor(_x, _y, _d = 50, _s = 1) {
      this.x = _x; 
      this.y = _y;
      this.d = _d; //for size
      this.s = _s; //for changing size
    }
  
    display() {
      noStroke();
      fill("#272727"); 
      rectMode(CENTER);

      push();
      translate(this.x, this.y);
      angleMode(DEGREES);
      rotate(45);
      if (choice%2 == 0) {
        rect(0, 0, 8, this.d);
        rect(0, 0, this.d, 8); //xs
      } else {
        square(0,0,this.d) //squares
      }
      pop();
      
      // console.log(choice)
    }
  
    move() {
      this.x = this.x + random(speed, -speed);
      this.y = this.y + random(0, -speed); //move up
    }
  
    size() {
      this.d += this.s;
      if (this.d > 50 || this.d < 5) {
        this.s *= -1; //shrink and grow between 5 and 50
      }
    }
  }
  

  