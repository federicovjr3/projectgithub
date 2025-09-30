  
var c = document.getElementById("viewport");
  
 var ctx = c.getContext("2d");


 const img = new Image();

  img.src = "Gemini_Generated_Image_bg99x6bg99x6bg99.bmp"

   img.onload = function () {


 const pixel = ctx.getImageData(0,0,  c.width, c.height);
const data =  pixel.data;

for (var y = 0; y <  480; y++) {
 index = ( 0 + y * Image.width) * 4; 
    data[index + 0] =   255;
    data[index + 1] =  255;
    data[index + 2]  = 0;
    data[index + 3] = 0;
  ctx.putImageData(pixel,  0, 0);
}
   ctx.drawImage(img, 0 , 0); 

 };
    

 console.log("yeah");

 