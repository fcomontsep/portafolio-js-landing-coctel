const openModal = document.querySelector(".menu-contacto");
const closeModal = document.querySelector(".modal-close");

const modal = document.querySelector(".modal");

openModal.addEventListener("click", (e) => {
	e.preventDefault();
	modal.classList.add("modal--show");
});

closeModal.addEventListener("click", (e) => {
	e.preventDefault();
	modal.classList.remove("modal--show");
});
