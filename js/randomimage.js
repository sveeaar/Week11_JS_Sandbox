const myButton = document.querySelector('button');
const image = document.querySelector('img');
const images = ["img1.jpg", "img2.jpg", "img3.jpg","img4.jpg", "img5.jpg"];


myButton.addEventListener('click', changeImage);

function changeImage() {

    let randomImage = Math.floor(Math.random() * images.length);
    console.log(randomImage);
    image.style.backgroundImage = images[randomImage];
    image.src = ("images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpg");
    }

