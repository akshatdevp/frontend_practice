import './style.css'
import anime from "animejs/lib/anime.es.js"
const tile_size = 70;
const wrapper = document.getElementsByClassName("tiles_wrapper")[0]
let color_index = 0;
const colors = [ 
"rgb(29,0,31)" ,
"rgb(229,55,31)" ,
"rgb(129,32,31)" ,
"rgb(29,85,31)" ,
"rgb(159,0,31)" ,
"rgb(229,0,31)" ,
"rgb(225,14,61)" 
]
let cols,rows;
const handleClick = (event, index) => {
	// console.log(event.clientX)
	anime({
		targets : ".tile",
		backgroundColor : colors[color_index++ % colors.length],
		// rotate : Math.floor(index/5)+'turn',
		// borderRadius : ["0%","50%"],
		rotate : index/colors.length+'turn',
		delay : anime.stagger(80 , {
			grid : [cols,rows],
			from : index
		})
	})

	
}

const createTile = (ind) => {
	const div = document.createElement("div")
	div.onclick = (e) => handleClick(e,ind)
	div.classList.add("tile")
	return div;
}

const createTiles = (n) => {
	wrapper.innerHtml = "";
	for(let i  = 0 ; i < n; i++)
		wrapper.appendChild(createTile(i));
}
function createGrid(){
	cols = Math.floor(document.body.clientWidth/tile_size);
	rows = Math.floor(document.body.clientHeight/tile_size);

	wrapper.style.setProperty("--cols",cols);
	wrapper.style.setProperty("--rows",rows);
	// console.log(cols,rows,wrapper.style)
	createTiles(cols*rows)
}
createGrid();
window.onresize = () => { 
	createGrid();
}


