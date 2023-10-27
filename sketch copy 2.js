let bubbles =[];
let time = 10;

function setup() {
  createCanvas(600, 400);

// for (let i = 0; i < 10; i++) {
// let x = random(width);
// let y = random(height);
// let r = random(10,40);

//   bubbles[i] = new Bubble(x, y, r);
// }
}


function mouseDragged(){
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}

function draw() {
  background(0);

  for(let i = 0; i < bubbles.length; i++) {
  bubbles[i].show();
  bubbles[i].move();
  } 

  time = time--;
  print(time);

  if (time == 0){
  let r = random(10, 50);
  let x = random(width);
  let y = random(height);
  let b = new Bubble(x, y, r);
  bubbles.push(b);
  time = 100;
}
  // bubbles[0].show();
  // bubbles[0].move();
  
  // bubbles[1].show();
  // bubbles[1].move();
}


class Bubble {
  constructor(tempX, tempY, tempR) {
    this.x = tempX;
    this.y = tempY;
    this.r = tempR;
  }
  
  move(){
      this.x = this.x + random(-5, 5);
  this.y = this.y + random(-5, 5);
  }
  
  show() {
  stroke(random(255), random(255), random(255));
  strokeWeight(4);
  noFill();
  // fill(125, 50);
  // noStroke();
  ellipse(this.x, this.y, this.r * 2);
  }
}
