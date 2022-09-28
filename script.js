//required variables

const redSlide = document.querySelector("#red");
const greenSlide = document.querySelector("#green");
const blueSlide = document.querySelector("#blue");
const header = document.querySelector("header");
let redValue = " " + redSlide.value + "";
let greenValue = " " + greenSlide.value + "";
let blueValue = " " + blueSlide.value + "";

//run on page start up so page values are not empty
header.style.setProperty("--red-content", redSlide.value);
document.querySelector("#red-content").innerText = redValue;
document.querySelector("#green-content").innerText = greenValue;
document.querySelector("#blue-content").innerText = blueValue;

function setColors() {
  let hexRed = ("0" + Number(redSlide.value).toString(16)).substr(-2);
  let hexGreen = ("0" + Number(greenSlide.value).toString(16)).substr(-2);
  let hexBlue = ("0" + Number(blueSlide.value).toString(16)).substr(-2);
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
}

setColors();
document.body.addEventListener("input", setColors);

redSlide.addEventListener("input", function () {
  let hexRed = ("0" + Number(redSlide.value).toString(16)).substr(-2);
  let hexColor = "#" + hexRed + "0000";
  redValue = " " + redSlide.value + "";
  header.style.setProperty("--red-thumb", hexColor);
  g;
  document.querySelector("#red-content").innerText = redValue;
});

greenSlide.addEventListener("input", function () {
  let hexRed = ("0" + Number(greenSlide.value).toString(16)).substr(-2);
  let hexColor = "#00" + hexRed + "00";
  greenValue = " " + greenSlide.value + "";
  header.style.setProperty("--green-thumb", hexColor);
  document.querySelector("#green-content").innerText = greenValue;
});

blueSlide.addEventListener("input", function () {
  let hexRed = ("0" + Number(blueSlide.value).toString(16)).substr(-2);
  let hexColor = "#0000" + hexRed;
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
