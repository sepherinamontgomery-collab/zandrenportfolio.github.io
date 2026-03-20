const images = document.querySelectorAll("#portfolio img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeModal");

images.forEach(img => {
img.addEventListener("click", () => {
modal.style.display = "flex";
modalImg.src = img.src;
});
});

closeBtn.onclick = () => {
modal.style.display = "none";
};

modal.onclick = (e) => {
if (e.target !== modalImg) {
modal.style.display = "none";
}
};
