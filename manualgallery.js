var imagePath = "images/";

var images = [
  "image1.jpg",
  "image2.jpg",
  "image3.jpg",
  "image4.jpg",
  "image5.jpg",
  "image6.jpg",
  "image7.jpg",
  "image8.jpg",
  "image9.jpg",
  "image10.jpg",
  "image11.jpg",
  "image12.jpg"
];

var index = 0;

function next() {
  index++;	
  if(index > images.length - 1) {
    index = 0;
  }
  document.getElementById('image').src = imagePath + images[index];
}

function previous() {
  index--;	
  if(index < 0) {
    index = images.length - 1;
  }
  document.getElementById('image').src = imagePath + images[index];
}

function start() {
  index = 0;
  document.getElementById('image').src = imagePath + images[index];
}
