//required variables
const redSlide = document.querySelector("#red");
const greenSlide = document.querySelector("#green");
const blueSlide = document.querySelector("#blue");
const header = document.querySelector("header");
let redValue = " " + redSlide.value + "";
let greenValue = " " + greenSlide.value + "";
let blueValue = " " + blueSlide.value + "";
let hexRed = ("0" + Number(redSlide.value).toString(16)).substr(-2);
let hexGreen = ("0" + Number(greenSlide.value).toString(16)).substr(-2);
let hexBlue = ("0" + Number(blueSlide.value).toString(16)).substr(-2);

//run on page start up for shown default values
header.style.setProperty("--red-content", redSlide.value);
document.querySelector("#red-content").innerText = redValue;
document.querySelector("#green-content").innerText = greenValue;
document.querySelector("#blue-content").innerText = blueValue;
header.style.setProperty("--red-thumb", "#" + hexRed + "0000");
header.style.setProperty("--green-thumb", "#00" + hexGreen + "00");
header.style.setProperty("--blue-thumb", "#0000" + hexBlue);

function setColors() {
  hexRed = ("0" + Number(redSlide.value).toString(16)).substr(-2);
  hexGreen = ("0" + Number(greenSlide.value).toString(16)).substr(-2);
  hexBlue = ("0" + Number(blueSlide.value).toString(16)).substr(-2);
  let hexColor = "#" + hexRed + hexGreen + hexBlue;
  document.querySelector("#hex-color").innerText = hexColor;
  document.body.style.setProperty("--bg-color", hexColor);
  if (
    (redSlide.value < 125 && greenSlide.value < 125) ||
    (redSlide.value < 125 && blueSlide.value < 125) ||
    (greenSlide.value < 125 && blueSlide.value < 125)
  ) {
    document.querySelector("p").style.setProperty("--text-color", "white");
  } else {
    document.querySelector("p").style.setProperty("--text-color", "black");
  }
  if (redSlide.value < 30 && greenSlide.value < 30 && blueSlide.value < 30) {
    document.querySelector("p").style.setProperty("--border-color", "white");
    document.querySelector("p").style.setProperty("--shadow-color", "white");
  } else {
    document.querySelector("p").style.setProperty("--border-color", "black");
    document.querySelector("p").style.setProperty("--shadow-color", "black");
  }
  if (redSlide.value > 250 && greenSlide.value > 250 && blueSlide.value > 250) {
    document.querySelector("p").style.setProperty("--hover-color", "black");
    document.querySelector("p").style.setProperty("--hover-text", "white");
  } else {
    document.querySelector("p").style.setProperty("--hover-color", "white");
    document.querySelector("p").style.setProperty("--hover-text", "black");
  }
}

setColors();
document.body.addEventListener("input", setColors);

redSlide.addEventListener("input", function () {
  hexRed = ("0" + Number(redSlide.value).toString(16)).substr(-2);
  let hexColor = "#" + hexRed + "0000";
  redValue = " " + redSlide.value + "";
  header.style.setProperty("--red-thumb", hexColor);
  document.querySelector("#red-content").innerText = redValue;
});

greenSlide.addEventListener("input", function () {
  hexGreen = ("0" + Number(greenSlide.value).toString(16)).substr(-2);
  let hexColor = "#00" + hexGreen + "00";
  greenValue = " " + greenSlide.value + "";
  header.style.setProperty("--green-thumb", hexColor);
  document.querySelector("#green-content").innerText = greenValue;
});

blueSlide.addEventListener("input", function () {
  hexBlue = ("0" + Number(blueSlide.value).toString(16)).substr(-2);
  let hexColor = "#0000" + hexBlue;
  blueValue = " " + blueSlide.value + "";
  header.style.setProperty("--blue-thumb", hexColor);
  document.querySelector("#blue-content").innerText = blueValue;
});

document.querySelector("#hex-color").addEventListener("click", function () {
  let hexColor = document.getElementById("hex-color").innerText;
  navigator.clipboard.writeText(hexColor);
  swal.fire({
    toast: true,
    position: "top",
    showConfirmButton: false,
    timer: 2500,
    icon: "info",
    title: "copied " + hexColor + " to clipboard.",
  });
});
