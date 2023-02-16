let btn = document.getElementById("btn");
let numPtag = document.getElementById("num");
let res = document.getElementById("respond");
let inputValue = document.getElementById("guess").value;

function randomNumGenerator() {
    randomNum = Math.floor(Math.random()*20)-20;
	document.getElementById("num").innerText = randomNum;
	guessNum();
	print();
}
function guessNum() {
	input = Number(document.getElementById("guess").value);
}
function print() {
	if(Math.abs(randomNum - input)<= 5){
		document.getElementById("respond").innerText = "Hot";
	} else {
		document.getElementById("respond").innerText = "Cold";
	}
}
btn.addEventListener("click",randomNumGenerator);