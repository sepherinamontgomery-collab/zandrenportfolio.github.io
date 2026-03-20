/* ---------- HERO BACKGROUND SLIDESHOW ---------- */

const hero = document.getElementById("home");

const heroImages = [
"images/Boho Artwork Aesthetic Today's Mantra _20260219_102030_0000.png",
"images/Orange and Black Illustrated Design Thinking Process Explained Poster_20260219_101928_0000.png",
"images/Screenshot 2026-03-17 210250.png"
];

let index = 0;

/* SET FIRST IMAGE */
hero.style.backgroundImage = `url(${heroImages[index]})`;

/* CHANGE IMAGE EVERY 3 SECONDS */
setInterval(() => {
index = (index + 1) % heroImages.length;
hero.style.backgroundImage = `url(${heroImages[index]})`;
}, 3000);

/* ---------- IMAGE MODAL (CLICK TO VIEW) ---------- */

const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");
const closeBtn = document.getElementById("closeModal");

images.forEach(img => {
img.addEventListener("click", () => {
modal.style.display = "flex";
modalImg.src = img.src;
});
});

/* CLOSE BUTTON */
closeBtn.onclick = () => {
modal.style.display = "none";
};

/* CLICK OUTSIDE TO CLOSE */
modal.onclick = (e) => {
if (e.target !== modalImg) {
modal.style.display = "none";
}
};
