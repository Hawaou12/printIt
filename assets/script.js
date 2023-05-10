const slides = [
	{
		image:"slide1.jpg",
		tagLine:"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		image:"slide2.jpg",
		tagLine:"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		image:"slide3.jpg",
		tagLine:"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		image:"slide4.png",
		tagLine:"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// fonction variables
let elementCourant =0;
var srcImage = "./assets/images/slideshow/";
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const tagLine = document.querySelector("#banner p");

let elt = document.getElementById('dotCaroussel');

function ImageParagraphe(elementCourant){
	const image = slides[elementCourant].image;
	var imgBaner = banner.querySelectorAll("active");
	console.log(imgBaner);
	imgBaner[0].setAttribute("src", srcImage + image);

	//console.log(image);
	console.log(imgBaner);
	//p
	const tagline = slides[elementCourant].tagLine;
	var paragraphe = banner.querySelectorAll("active_p");
	console.log(paragraphe);
	paragraphe[0].innerHTML = tagline;
	}


for (i = 0; i < slides.length; i++) {
	if (elementCourant === i){
		elt.innerHTML += '<div class="dot dot_selected"></div>';
	} else{
		elt.innerHTML += '<div class="dot"></div>';
	}
}

const dots = document.querySelectorAll(".dot");
let imgTxt = slides[0].image.valueOf()
let tagTxt = slides[0].tagLine.valueOf()
const btnLeft = document.getElementById('btnLeft');
btnLeft.addEventListener('click', function() {       
	imgLeft();

});

const btnRight = document.getElementById('btnRight');
btnRight.addEventListener('click', function() {          
	imgRight();
});

// fonction bouton droit
function imgRight() {

 elementCourant++;
    if (elementCourant  > slides.length - 1) {
        elementCourant = 0;
    }
    updateSlide();
    updateDots();
}

// fonction bouton gauche
function imgLeft() {

	elementCourant--;
	   if (elementCourant < 0) {
		   elementCourant = slides.length - 1;
	   }
	   updateSlide();
	   updateDots();
   }

function updateSlide() {
    bannerImg.src = `./assets/images/slideshow/${slides[elementCourant].image}`;
    tagLine.innerHTML = slides[elementCourant].tagLine;
}

function updateDots() {
    dots.forEach((dot) => dot.classList.remove("dot_selected"));
	console.log(dots);
    dots[elementCourant].classList.add("dot_selected");
}

