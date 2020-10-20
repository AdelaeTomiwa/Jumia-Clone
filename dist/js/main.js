var startPoint = 0; // Start Point
var images = [];
var time = 5000;

// Images List
images[0] =
   'https://images.pexels.com/photos/3839432/pexels-photo-3839432.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
images[1] =
   'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
images[2] =
   'https://images.pexels.com/photos/2529787/pexels-photo-2529787.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
images[3] =
   'https://images.pexels.com/photos/4127632/pexels-photo-4127632.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';
images[4] =
   'https://images.pexels.com/photos/4437148/pexels-photo-4437148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
images[5] =
   'https://images.pexels.com/photos/3985062/pexels-photo-3985062.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
images[6] =
   'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
images[7] =
   'https://images.pexels.com/photos/318236/pexels-photo-318236.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
images[8] =
   'https://images.pexels.com/photos/1087727/pexels-photo-1087727.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';
images[9] =
   'https://images.pexels.com/photos/1727684/pexels-photo-1727684.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940';

// change the image
function changeImg() {
   document.slide.src = images[startPoint];
   if (startPoint < images.length - 1) {
      startPoint++;
   } else {
      startPoint = 0;
   }

   setTimeout('changeImg()', time);
}

window.onload = changeImg;
