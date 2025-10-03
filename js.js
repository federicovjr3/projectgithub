const canvas = document.getElementById('viewport');
const ctx = canvas.getContext('2d');

var img1 = new Image();

 img1.src = "Gemini_Generated_Image_bg99x6bg99x6bg99.bmp";

img1.onload = function() {

 ctx.drawImage(img1, 0, 0);

const imageData = ctx.getImageData(0, 0, img1.width, img1.height);
const pixels = imageData.data;

for (let i = 0; i < pixels.length; i += 4) {
  const r = pixels[i];
  const g = pixels[i + 1];
  const b = pixels[i + 2];
  const avg = (r + g + b) / 3;
  const  value = avg > 240 ? 255 : 0;
  pixels[i] = r ;    
  pixels[i + 1] = g ;
  pixels[i + 2] = b ; 
}
ctx.putImageData(imageData, 0, 0);
};


