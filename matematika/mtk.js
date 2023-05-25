const btnFooter = document.getElementById("bft");
btnFooter.addEventListener("mouseover", function () {
  btnFooter.innerHTML = "Hehehe";
});
btnFooter.addEventListener("mouseleave", function () {
  btnFooter.innerHTML = "Made with love by Jeki";
});

const suhuBefore = document.getElementById("suhuBefore");
const suhuAfter = document.getElementById("suhuAfter");
const popupKiri = document.getElementById("popupKiri");
const popupKanan = document.getElementById("popupKanan");

const celcius = document.getElementById("celcius");
const fahrenheit = document.getElementById("fahrenheit");
const reamur = document.getElementById("reamur");
const kelvin = document.getElementById("kelvin");

const celcius1 = document.getElementById("celcius1");
const fahrenheit1 = document.getElementById("fahrenheit1");
const reamur1 = document.getElementById("reamur1");
const kelvin1 = document.getElementById("kelvin1");

const input = document.getElementById("input1");
const result = document.getElementById("input2");

let inputValue = input.value;
let resultValue = result.value;

let jenisSuhu = 1;
let jenisSuhu2 = 1;

input.addEventListener("focus", function () {
  input.value = "";
});

suhuBefore.addEventListener("click", function () {
  popupKiri.style.display = "flex";
  suhuBefore.style.display = "none";
});
suhuAfter.addEventListener("click", function () {
  popupKanan.style.display = "flex";
  suhuAfter.style.display = "none";
});

celcius.addEventListener("click", function () {
  popupKiri.style.display = "none";
  suhuBefore.style.display = "flex";
  suhuBefore.innerHTML = "Celcius";
  jenisSuhu = 1;
});
fahrenheit.addEventListener("click", function () {
  popupKiri.style.display = "none";
  suhuBefore.style.display = "flex";
  suhuBefore.innerHTML = "Fahrenheit";
  jenisSuhu = 2;
});
reamur.addEventListener("click", function () {
  popupKiri.style.display = "none";
  suhuBefore.style.display = "flex";
  suhuBefore.innerHTML = "Reamur";
  jenisSuhu = 3;
});
kelvin.addEventListener("click", function () {
  popupKiri.style.display = "none";
  suhuBefore.style.display = "flex";
  suhuBefore.innerHTML = "Kelvin";
  jenisSuhu = 4;
});

celcius1.addEventListener("click", function () {
  popupKanan.style.display = "none";
  suhuAfter.style.display = "flex";
  suhuAfter.innerHTML = "Celcius";
  jenisSuhu2 = 1;
});
fahrenheit1.addEventListener("click", function () {
  popupKanan.style.display = "none";
  suhuAfter.style.display = "flex";
  suhuAfter.innerHTML = "Fahrenheit";
  jenisSuhu2 = 2;
});
reamur1.addEventListener("click", function () {
  popupKanan.style.display = "none";
  suhuAfter.style.display = "flex";
  suhuAfter.innerHTML = "Reamur";
  jenisSuhu2 = 3;
});
kelvin1.addEventListener("click", function () {
  popupKanan.style.display = "none";
  suhuAfter.style.display = "flex";
  suhuAfter.innerHTML = "Kelvin";
  jenisSuhu2 = 4;
});

const btnConvert = document.getElementById("btnConvert");

btnConvert.addEventListener("click", function () {
  let inputValue = input.value;
  let resultValue = result.value;
  let fixed;
  switch (jenisSuhu) {
    case 1:
      if (jenisSuhu === jenisSuhu2) {
        inputValue = input.value;
        resultValue = result.value;
        result.value = inputValue;
      } else if (jenisSuhu2 === 2) {
        // celcius => fahrenheit
        inputValue = input.value;
        result.value = (input.value * 9) / 5 + 32;
      } else if (jenisSuhu2 === 3) {
        // celcius => reamur
        inputValue = input.value;
        result.value = (input.value * 4) / 5;
      } else if (jenisSuhu2 === 4) {
        // celcius => kelvin
        inputValue = input.value;
        result.value = Number(input.value) + 273.15;
      }
      break;

    case 2:
      if (jenisSuhu === jenisSuhu2) {
        inputValue = input.value;
        resultValue = result.value;
        result.value = inputValue;
      } else if (jenisSuhu2 === 1) {
        // fahrenheit > celcius
        inputValue = input.value;
        fixed = ((input.value - 32) * 5) / 9;
        result.value = fixed.toFixed(1);
      } else if (jenisSuhu2 === 3) {
        // fahrenheit > reamur
        inputValue = input.value;
        fixed = ((input.value - 32) * 4) / 9;
        result.value = fixed.toFixed(1);
      } else if (jenisSuhu2 === 4) {
        // fahrenheit > kelvin
        inputValue = input.value;
        fixed = ((Number(input.value) + 459.67) * 5) / 9;
        result.value = fixed.toFixed(1);
      }
      break;
    case 3:
      if (jenisSuhu === jenisSuhu2) {
        inputValue = input.value;
        resultValue = result.value;
        result.value = inputValue;
      } else if (jenisSuhu2 === 1) {
        // reamur > celcius
        inputValue = input.value;
        fixed = (input.value * 5) / 4;
        result.value = fixed.toFixed(1);
      } else if (jenisSuhu2 === 2) {
        // reamur > fahrenheit
        inputValue = input.value;
        fixed = (input.value * 9) / 4 + 32;
        result.value = fixed.toFixed(1);
      } else if (jenisSuhu2 === 4) {
        // reamur > kelvin
        inputValue = input.value;
        fixed = (Number(input.value) * 5) / 4 + 273.15;
        result.value = fixed.toFixed(1);
      }
      break;
    case 4:
      if (jenisSuhu === jenisSuhu2) {
        inputValue = input.value;
        resultValue = result.value;
        result.value = inputValue;
      } else if (jenisSuhu2 === 1) {
        // kelvin > celcius
        inputValue = input.value;
        fixed = Number(input.value) - 273.15;
        result.value = fixed.toFixed(1);
      } else if (jenisSuhu2 === 2) {
        // kelvin > fahrenheit
        inputValue = input.value;
        fixed = (Number(input.value) * 9) / 5 - 459.67;
        result.value = fixed.toFixed(1);
      } else if (jenisSuhu2 === 3) {
        // kelvin > reamur
        inputValue = input.value;
        fixed = ((Number(input.value) - 273.15) * 4) / 5;
        result.value = fixed.toFixed(1);
      }
      break;
  }
});

let cond = 1;
let pendek;
const select = document.getElementById("select");
const selectPopup = document.getElementById("selectPopup");
const resultInput = document.getElementById("resultInput");

const inputSatu = document.getElementById("inputSatu");
const inputDua = document.getElementById("inputDua");
const results = document.getElementById("resultJkw");

inputSatu.addEventListener("click", function () {
  inputSatu.value = "";
});
inputDua.addEventListener("click", function () {
  inputDua.value = "";
});
results.addEventListener("click", function () {
  results.value = "";
});

select.addEventListener("click", function () {
  select.innerHTML = "";
  selectPopup.style.display = "flex";
});

const btnJarak = document.getElementById("jarak");
const btnKecepatan = document.getElementById("kecepatan");
const firstInput = document.getElementById("firstInput");
const secondInput = document.getElementById("secondInput");
const btnWaktu = document.getElementById("waktu");
const hitung = document.getElementById("hitung");

btnJarak.addEventListener("click", function () {
  selectPopup.style.display = "none";
  select.innerHTML = "Jarak";
  resultInput.innerHTML = "Jarak";
  results.value = "Result";
  firstInput.innerHTML = "Kecepatan";
  secondInput.innerHTML = "Waktu";

  inputSatu.value = "Km / Jam";
  inputDua.value = "Jam";
  cond = 3;
});
btnKecepatan.addEventListener("click", function () {
  selectPopup.style.display = "none";
  select.innerHTML = "Kecepatan";
  resultInput.innerHTML = "Kecepatan";
  results.value = "Result";
  firstInput.innerHTML = "Jarak";
  secondInput.innerHTML = "Waktu";

  inputSatu.value = "Km";
  inputDua.value = "Jam";
  cond = 2;
});
btnWaktu.addEventListener("click", function () {
  selectPopup.style.display = "none";
  select.innerHTML = "Waktu";
  resultInput.innerHTML = "Waktu";
  results.value = "Result";
  firstInput.innerHTML = "Jarak";
  secondInput.innerHTML = "Kecepatan";

  inputSatu.value = "Km";
  inputDua.value = "Km / Jam";
  cond = 1;
});

hitung.addEventListener("click", function () {
  if (cond === 1) {
    pendek = inputSatu.value / inputDua.value;
    results.value = pendek.toFixed(2) + " Jam";
  } else if (cond === 2) {
    pendek = inputSatu.value / inputDua.value;
    results.value = pendek.toFixed(2) + " Km / Jam";
  } else {
    pendek = inputSatu.value * inputDua.value;
    results.value = pendek.toFixed(2) + " Km";
  }
});
