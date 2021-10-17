var canvas = new fabric.Canvas('myCanvas');

var ball_x = 0;
var ball_y = 0;
var hole_x = 800;
var ball_x = 400;


block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.fromUrl("golf-h.png", function (Img) {
		hole_obj = Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_x,
			top:hole_y
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromUrl("ball.png", function (Img) {
		ball_obj = Img;
		ball_obj.scaleToWidth(50);
		ball_obj.scaleToHeight(50);
		ball_obj.set({
			top:ball_x,
			top:ball_y
		});
		canvas.add(hole_obj);
	});
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==hole_y)){
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="You have hit the goal!!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up() {
		if (ball_y >=0) {
			ball_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Up Key is Pressed, X = " + ball_x + " , Y = " + ball_y);
			canvas.remove(ball_obj);
			newimage();
		}
	}
	

	function down() {
		if(ball_y <=450) {
			ball_y = ball_y + block_image_height;
			console.log("block image height = " + block_image_height);
			console.log("When Down Key is Pressed, X = " + ball_x + " , Y = " + ball_y);
			canvas.remove(ball_obj);
			newimage();
		}
	}

	function left() {
		if(ball_x >5) {
			ball_x = ball_x + block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Left Key is Pressed, X = " + ball_x + " , Y = " + ball_y);
			canvas.remove(ball_obj);
			newimage();
		}
	}

	function right() {
		if(ball_x <=1050) {
			ball_x = ball_x + block_image_width;
			console.log("block image width = " + block_image_width);
			console.log("When Right Key is Pressed, X = " + ball_x + " , Y = " + ball_y);
			canvas.remove(ball_obj);
			newimage();
		}
	}
	
}

