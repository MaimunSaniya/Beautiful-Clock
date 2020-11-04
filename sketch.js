var hr,mn,sc,dy,mh,yr,s,m,h,sounds;

function setup() {
  createCanvas(500,500);
  angleMode(DEGREES);
  
}

function preload(){
  //sounds = loadSound()
}

function draw() {
  background(0);

  textFont("Times New Roman");
  fill(255);
  textSize(25);
  text(hr + ":" + mn + ":" + sc,330,470);
  text(dy + " / " + mh + " / " + yr,320,440);

  textSize(20);
  text("12",195,90);
  text("03",310,205);
  text("09",80,205);
  text("06",200,310);

  textStyle(ITALIC);
  textFont("Adreno Script Demo Regular");
  textSize(15);
  text("MaimunSaniya",189,270);
  
  translate(200,200);
  rotate(270);

  dy = day();
  mh = month();
  yr = year();
  hr = hour();
  mn = minute();
  sc = second();

  strokeWeight(2);
  stroke(176,224,230);
  noFill();
  s = map(sc,0,59,0,360);
  arc(0,0,300,300,0,s);

  push();
  rotate(s);
  line(0,0,95,0);
  pop();  

  strokeWeight(4);
  stroke(0,191,255);
  noFill();
  m = map(mn,0,60,0,360);
  arc(0,0,292,292,0,m);

  push();
  rotate(m);
  line(0,0,87,0);
  pop(); 

  strokeWeight(5.5);
  stroke(65,105,225);
  noFill();
  h = map(hr%12,0,12,0,360);
  arc(0,0,280,280,0,h);

  push();
  rotate(h);
  line(0,0,75,0);
  pop(); 

}