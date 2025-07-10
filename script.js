const popup = document.getElementById("popUp");
const photo = document.querySelectorAll(".PHOTO img");
const poto = document.getElementById("popImg");
const tutup = document.getElementById("closeBtn");

photo.forEach((img) => {
  img.addEventListener("click", () => {
    poto.src = img.src;
    popup.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  popup.style.display = "none";
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.style.display = "none";
  }
});

poto.addEventListener("click", () => {
  alert("Jangan Sentuh ayangku!!");
});
