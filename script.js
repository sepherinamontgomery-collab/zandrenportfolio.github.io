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

const hero = document.getElementById("home");

const heroImages = [
"images/Boho Artwork Aesthetic Today's Mantra _20260219_102030_0000.png",
"images/Orange and Black Illustrated Design Thinking Process Explained Poster_20260219_101928_0000.png",
"images/Screenshot 2026-03-17 210250.png"
];

let current = 0;

/* SET FIRST IMAGE IMMEDIATELY */
hero.style.backgroundImage = `url(${heroImages[current]})`;

/* CHANGE EVERY 3 SECONDS */
setInterval(() => {
current = (current + 1) % heroImages.length;
hero.style.backgroundImage = `url(${heroImages[current]})`;
}, 3000);
