const color1 = document.querySelector(".input-color1")
const color2 = document.querySelector(".input-color2")
const body = document.querySelector(".body")

function change_Backgroung(){
    body.style.background = "linear-gradient(to right, " + color1.value + ", " 
	+ color2.value +")";
}