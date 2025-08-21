const container = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".carousel-slide");

let offset = 0;
let slideId = 0;

setInterval(() => {
	offset = slides[0].offsetWidth;
	container.style.transition = "left ease-in-out 500ms";
	container.style.left = -offset + "px";
	setTimeout(() => {
		container.style.transition = "none";
		slides[slideId].style.order = slides.length - 1;
		container.style.left = 0;
		slideId++;
		if (slideId === slides.length) {
			slideId = 0;
			slides.forEach((slide) => {
				slide.style.order = "initial";
			});
		}
	}, 500);
}, 3000);
