//required variables
const redSlide = document.querySelector("#red");
const greenSlide = document.querySelector("#green");
const blueSlide = document.querySelector("#blue");
const header = document.querySelector("header");
const quoteUrl = "https://dummy-apis.netlify.app/api/color";
const btn = document.body.querySelector("#random-color");

//eventlistener for slider movement and random button
btn.addEventListener("click", randomColor);
document.body.addEventListener("input", setColors);

//initial call of main function so colors displayed correctly at page start
setColors();

function setColors() {
  //required variables
  let hexRed = ("0" + Number(redSlide.value).toString(16)).substr(-2);
  let hexGreen = ("0" + Number(greenSlide.value).toString(16)).substr(-2);
  let hexBlue = ("0" + Number(blueSlide.value).toString(16)).substr(-2);
  let hexColor = "#" + hexRed + hexGreen + hexBlue;
  let redValue = " " + redSlide.value + "";
  let greenValue = " " + greenSlide.value + "";
  let blueValue = " " + blueSlide.value + "";

  //setting background color of body and changing hex value in copy button
  document.querySelector("#hex-color").innerText = hexColor;
  document.body.style.setProperty("--bg-color", hexColor);

  //setting thumb colors of the sliders
  header.style.setProperty("--blue-thumb", "rgb(0,0," + blueSlide.value + ")");
  document.querySelector("#blue-content").innerText = blueValue;

  header.style.setProperty(
    "--green-thumb",
    "rgb(0," + greenSlide.value + ",0)"
  );
  document.querySelector("#green-content").innerText = greenValue;

  header.style.setProperty("--red-thumb", "rgb(" + redSlide.value + ",0,0)");
  document.querySelector("#red-content").innerText = redValue;

  //changing font and general colors of buttons to white or black depanding on mixed color
  if (
    (redSlide.value < 125 && greenSlide.value < 125) ||
    (redSlide.value < 125 && blueSlide.value < 125) ||
    (greenSlide.value < 125 && blueSlide.value < 125)
  ) {
    document.querySelector("p").style.setProperty("--text-color", "white");
    document.querySelector("button").style.setProperty("--text-color", "white");
  } else {
    document.querySelector("p").style.setProperty("--text-color", "black");
    document.querySelector("button").style.setProperty("--text-color", "black");
  }
  if (redSlide.value < 30 && greenSlide.value < 30 && blueSlide.value < 30) {
    document.querySelector("p").style.setProperty("--border-color", "white");
    document.querySelector("p").style.setProperty("--shadow-color", "white");
    document
      .querySelector("button")
      .style.setProperty("--border-color", "white");
    document
      .querySelector("button")
      .style.setProperty("--shadow-color", "white");
  } else {
    document.querySelector("p").style.setProperty("--border-color", "black");
    document.querySelector("p").style.setProperty("--shadow-color", "black");
    document
      .querySelector("button")
      .style.setProperty("--border-color", "black");
    document
      .querySelector("button")
      .style.setProperty("--shadow-color", "black");
  }
  if (redSlide.value > 250 && greenSlide.value > 250 && blueSlide.value > 250) {
    document.querySelector("p").style.setProperty("--hover-color", "black");
    document.querySelector("p").style.setProperty("--hover-text", "white");
    document
      .querySelector("button")
      .style.setProperty("--hover-color", "black");
    document.querySelector("button").style.setProperty("--hover-text", "white");
  } else {
    document.querySelector("p").style.setProperty("--hover-color", "white");
    document.querySelector("p").style.setProperty("--hover-text", "black");
    document
      .querySelector("button")
      .style.setProperty("--hover-color", "white");
    document.querySelector("button").style.setProperty("--hover-text", "black");
  }
}

//event listener for hex value button to copy the hexcode
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

//fetch api data to randomize sliders
function randomColor() {
  let p = fetch(quoteUrl);

  p.then((response) => {
    return response.json();
  }).then((apiItem) => {
    const r = apiItem.rgb.r;
    const g = apiItem.rgb.g;
    const b = apiItem.rgb.b;
    redSlide.value = r;
    greenSlide.value = g;
    blueSlide.value = b;
    setColors();
  });
}
