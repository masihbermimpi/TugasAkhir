// import {  setInterval, setTimeout } from 'worker-timers';

function startTrafficSignal() {
  var green = document.getElementById("green");
  var red = document.getElementById("red");
  var yellow = document.getElementById("yellow");
  const h3 = document.getElementById("h3");
  const info = document.getElementById("infoP");

  green.style.backgroundColor = "#acabab";
  yellow.style.backgroundColor = "#acabab";

  setTimeout(function () {
    red.style.backgroundColor = "#fa6d6d";
    red.style.boxShadow = "0px 0px 15px #fe3b3b";
    yellow.style.backgroundColor = "#acabab";
    green.style.backgroundColor = "#acabab";
    yellow.style.boxShadow = "";
    green.style.boxShadow = "";

    h3.innerHTML = "Red Light";
    info.innerHTML =
      "Red light (lampu merah) yang menandakan anda harus berhenti. Dalam program traffic light ini setiap 5 detik warna lampu akan berubah.";
  }, 0);
  setTimeout(function () {
    red.style.backgroundColor = "#acabab";
    red.style.boxShadow = "";
    green.style.backgroundColor = "#acabab";
    green.style.boxShadow = "";
    yellow.style.backgroundColor = "#d3fa8b";
    yellow.style.boxShadow = "0px 0px 15px #dfff2b";

    h3.innerHTML = "Yellow Light";
    info.innerHTML =
      "Yellow light (lampu kuning) yang menandakan anda harus hati-hati. Dalam program traffic light ini setiap 5 detik warna lampu akan berubah.";
  }, 5000);

  setTimeout(function () {
    green.style.backgroundColor = "#97f7b4";
    red.style.backgroundColor = "#acabab";
    yellow.style.backgroundColor = "#acabab";
    green.style.boxShadow = "0px 0px 15px #36f760";
    red.style.boxShadow = "";
    yellow.style.boxShadow = "";

    h3.innerHTML = "Green Light";
    info.innerHTML =
      "Green light (lampu hijau) yang menandakan anda boleh berjalan. Dalam program traffic light ini setiap 5 detik warna lampu akan berubah.";
  }, 10000);
}

var timers = setInterval(function () {
  startTrafficSignal();
}, 15000);

startTrafficSignal();

const btnFooter = document.getElementById("bft");
btnFooter.addEventListener("mouseover", function () {
  btnFooter.innerHTML = "Hehehe";
});
btnFooter.addEventListener("mouseleave", function () {
  btnFooter.innerHTML = "Made with love by Jeki";
});

let greenn = document.getElementById("1green");
let redd = document.getElementById("1red");
let yelloww = document.getElementById("1yellow");

var lamp;
var lamp1;
var lamp2;
var lamp3;
var cond = true;

function startUserLamp() {
  let inpRed = document.getElementById("inpRed");
  let inpYellow = document.getElementById("inpYellow");
  let inpGreen = document.getElementById("inpGreen");

  let greenn = document.getElementById("1green");
  let redd = document.getElementById("1red");
  let yelloww = document.getElementById("1yellow");

  let valueRed = inpRed.value;
  var valueYellow = inpYellow.value;
  var valueGreen = inpGreen.value;

  var timeRed = valueRed * 1000;
  var timeYellow = valueYellow * 1000;
  var timeGreen = valueGreen * 1000;

  var totalTime = timeRed + timeYellow + timeGreen;

  lamp1 = setTimeout(function () {
    redd.style.backgroundColor = "#fa6d6d";
    redd.style.boxShadow = "0px 0px 15px #fe3b3b";
    yelloww.style.backgroundColor = "#acabab";
    yelloww.style.boxShadow = "";
    greenn.style.boxShadow = "";
    greenn.style.backgroundColor = "#acabab";
  }, 0);

  lamp2 = setTimeout(function () {
    redd.style.backgroundColor = "#acabab";
    redd.style.boxShadow = "";
    greenn.style.backgroundColor = "#acabab";
    greenn.style.boxShadow = "";
    yelloww.style.backgroundColor = "#d3fa8b";
    yelloww.style.boxShadow = "0px 0px 15px #dfff2b";
  }, valueRed * 1000);

  lamp3 = setTimeout(function () {
    greenn.style.backgroundColor = "#97f7b4";
    redd.style.backgroundColor = "#acabab";
    yelloww.style.backgroundColor = "#acabab";
    greenn.style.boxShadow = "0px 0px 15px #36f760";
    redd.style.boxShadow = "";
    yelloww.style.boxShadow = "";
  }, valueRed * 1000 + valueYellow * 1000);

  lamp = setTimeout(function () {
    startUserLamp();
  }, valueRed * 1000 + valueYellow * 1000 + valueGreen * 1000);
}

const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");

startButton.addEventListener("click", function () {
  startUserLamp();
});

stopButton.addEventListener("click", function () {
  clearTimeout(lamp1);
  clearTimeout(lamp2);
  clearTimeout(lamp3);
  clearTimeout(lamp);
  redd.style.backgroundColor = "#acabab";
  greenn.style.backgroundColor = "#acabab";
  yelloww.style.backgroundColor = "#acabab";
  redd.style.boxShadow = "";
  greenn.style.boxShadow = "";
  yelloww.style.boxShadow = "";
});
