class Sprite{
	constructor(animation, x, y, speed){
		this.x = x;
		this.y = y;
		//this.w = this.animation[0].width;
		this.animation = animation;
		this.speed = speed;
		this.len = this.animation.length;
		this.index = 0; //This is the index of the current picture to show
	}

	show(){
		let index = floor(this.index) % this.len;
		image(this.animation[index],this.x, this.y);
	}

	animate(){
		this.index += this.speed;
		this.x += this.speed * 5;

		if(this.x > width){
			this.x = -192; //Width of the sprite
		}
	}
}