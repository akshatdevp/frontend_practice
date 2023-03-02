import './style.css'

const circle = document.getElementById('dynamic')
document.onmousemove = e => {
	// console.log(e.clientX,e.clientY)
	circle.style.transform = "translate(" + e.clientX + "px," + e.clientY + "px)"

}

// 
const x = document.querySelector("h1")
const original_text = x.textContent

x.onmouseover = e => {
	let i = 0;
	const interval = setInterval( () => {
		const x = e.srcElement.innerText
		e.srcElement.innerText =
			x.split("")
			 .map(
				(_,ind) =>  {
					if(ind < i) return original_text[ind]
					return String.fromCharCode(Math.floor(Math.random()*26) + 65)
				}).join("")
		if(i > 11){
			e.srcElement.innerText = original_text
			clearInterval(interval)
		}
		i+=(1/3)
	},30)

}

