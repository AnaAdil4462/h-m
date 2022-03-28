var canvas = new fabric.Canvas('myCanvas');


#myCanvas
{
border-width:10px;
 background-color: white;
  border-style:ridge;
   border-color:darkviolet;
}
function new_image()
fabric.Image.fromURL('Birthday Image.jpg', function(Img)
 { block_image_object = Img;
block_image_object.scaleToWidth(700); block_image_object.scaleToHeight(510);
 block_image_object.set({ top:0, left:0 });
  canvas.add(block_image_object); });


 var x= document.getElementById("myAudio");

function new_image()
{
	fabric.img.fromURL('BirthdayImage.jpg',function(img) {
block_image_object=img;

block_image_object.scaleToWidth(700);
block_image_object.scaleToHeight(510);
block_image_object.set({
	top:0;
	left:0;
	
});
canvas.add(block_image_object);
	});

	function playSound () {
		X.play();
		}

