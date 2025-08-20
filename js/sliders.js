(function () {
	const sliders = document.querySelectorAll(".slider-body");

	const arrowBefore = document.querySelector("#before");
	const arrowAfter = document.querySelector("#after");
	let value;

	arrowBefore.addEventListener("click", () => changePosition(-1));
	arrowAfter.addEventListener("click", () => changePosition(1));

	function changePosition(change) {
		const currentElement = Number(
			document.querySelector(".slider-body--show").dataset.id
		);
		value = currentElement + change;

		if (value === 0 || value == sliders.length + 1) {
			value = value === 0 ? sliders.length : 1;
		}

		sliders[currentElement - 1].classList.toggle("slider-body--show");
		sliders[value - 1].classList.toggle("slider-body--show");

		console.log(value);
	}
})();
