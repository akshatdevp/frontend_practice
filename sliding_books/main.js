import './style.css'

const colors = [ "#e30512","#1d3fbb", "#ffbe00",  "#ff651a", "#00c1b5"]
const body = document.querySelector("body");

for(let i = 0 ;i < colors.length;i++){
	// const bookI = document.querySelector(".book"+(i+1))
	// bookI.style.background = colors[i];
	body.style.background = colors[i];
}

function calcSection() {
	const y = window.scrollY
	const section = Math.floor(y/window.innerHeight)
	return colors[section]
}

window.onscroll = () => {
	console.log(window.innerHeight)
	body.style.background = calcSection()
}

