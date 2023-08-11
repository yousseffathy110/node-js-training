const input1 = document.querySelector(".color1")
const input2 = document.querySelector(".color2")
const body = document.querySelector("body")
const light = document.querySelector(".light")
const dark = document.querySelector(".dark")
const h1 = document.querySelector("h1")
const random = document.querySelector(".random-btn")


function SetGradiaentBackgroungToBody(){
    body.style.background = `linear-gradient(to right, ${input1.value}, 
    ${input2.value})`
}

function DarkMode(){
    body.style.background = "#2d2d2d";
    h1.style.color = "#FFFFFF"
}


function LightMode(){
    body.style.background = "#FFFFFF";
    h1.style.color = "#2d2d2d"
    dark.style.background = "#2d2d2d"
    dark.style.color = "#ffffff"
    light.style.background = "#2d2d2d"
    light.style.color = "#ffffff"
    random.style.background = "#2d2d2d"
    random.style.color = "#ffffff"
}


function pickcolor() {
	var color = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' 
	+ (Math.floor(Math.random() * 256)) + ',' 
	+ (Math.floor(Math.random() * 256)) + ')';
  return color;
}

function getRandomColor() {
	var rndColor1 = pickcolor();
	var rndColor2 = pickcolor();
	body.style.background = "linear-gradient(to right, " + rndColor1 + ", " 
	+ rndColor2 +")";
}

input1.addEventListener("input", SetGradiaentBackgroungToBody)
input2.addEventListener("input", SetGradiaentBackgroungToBody)
dark.addEventListener("click", DarkMode)
light.addEventListener("click", LightMode)
random.addEventListener("click", getRandomColor);