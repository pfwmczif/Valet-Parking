<canvas id="MyCanvas" width="800" height="400"> </canvas>

canvas = document.getElementById ('MyCanvas');
ctx= canvas.getContext ('2d);


greencar_width = 75;
greencar_height = 100;


greencar_x = 5;
greencar_y = 225;

;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";


function add() {
	background_ImgTag = New Image();
    background_ImgTag.onload = uploadBackground;
	background_ImgTag.src = background_image;

    greencar_ImgTag = New Image();
	greencar_ImgTag.onload = uploadgreencar;
	greencar_ImgTag.src = greencar_image;
}

function uploadBackground() {
	ctx.drawImage(background_ImgTag, 0 , 0, canvas.width, canvas.height);

}

function uploadgreencar() {
	
ctx.drawImage(greencar_ImgTag, greencar_x, greencar_y , greencar_width , greencar_height);
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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

function up()
{

	if(keyPressed == '38')
		{
			up();
			console.log("up");
		}

}

function down()
{
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	

}
function left()
{
	if(keyPressed == '37')
		{
			left();
			console.log("left");
		}


}

function right()
{
	if(keyPressed == '39')
		{
			right();
			console.log("right");
		}


}
