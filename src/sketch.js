let spritesheet;
let spritedata;
let animation = [];
let horses = [];

function preload(){
	//This function will make some troubles in Chrome
	//This need to be use in a local server o Mozilla
	spritedata = loadJSON('horse.json');
	spritesheet = loadImage('spritesheet.png');
}

function setup() {
  createCanvas(640, 480);
  let frames = spritedata.frames;
  for(let i=0; i<frames.length; i++){
  	let pos = frames[i].position;
  	let img = spritesheet.get(pos.x, pos.y, pos.w, pos.h);
  	animation.push(img);
  }

  for(let i=0; i<5; i++){
  	horses[i] = new Sprite(animation, 0, i*75, random(0.1, 1));
  }
  //horse = new Sprite(animation, 100, 100, 2);
  //console.log(animation);
}

function draw() {
	background(0);
	
	for(let horse of horses){
  		horse.show();
  		horse.animate();
  	}
  //image(animation[frameCount % animation.length],0,0);
}

//this is just a comment