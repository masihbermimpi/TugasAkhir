const btnFooter = document.getElementById("bft");
btnFooter.addEventListener("mouseover", function () {
  btnFooter.innerHTML = "Hehehe";
});
btnFooter.addEventListener("mouseleave", function () {
  btnFooter.innerHTML = "Made with love by Jeki";
});

const idCalon = document.getElementById("idCalon");
const modal = document.getElementById("modal");
const bgModal = document.getElementById("cardModal");
const pilihC1 = document.getElementById("submit1");
const pilihC2 = document.getElementById("submit2");
const skorCalon1 = document.getElementById("skorC1");
const skorCalon2 = document.getElementById("skorC2");
let skor1 = 0;
let skor2 = 0;
let calon;

pilihC1.addEventListener("click", function () {
  modal.style.display = "flex";
  bgModal.style.display = "flex";
  idCalon.innerHTML = "Calon 1";
  calon = 1;
});
pilihC2.addEventListener("click", function () {
  modal.style.display = "flex";
  bgModal.style.display = "flex";
  idCalon.innerHTML = "Calon 2";
  calon = 2;
});

const tidak = document.getElementById("no");
const iya = document.getElementById("yes");

tidak.addEventListener("click", function () {
  modal.style.display = "none";
  bgModal.style.display = "none";
});

skorCalon1.textContent = skor1;
skorCalon2.textContent = skor2;

iya.addEventListener("click", function () {
  modal.style.display = "none";
  bgModal.style.display = "none";
  if (calon === 1) {
    skor1++;
    skorCalon1.textContent = skor1;
  } else if (calon === 2) {
    skor2++;
    skorCalon2.textContent = skor2;
  }
  console.log(skor1);
});
