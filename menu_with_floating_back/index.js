const back =  document.getElementsByClassName('panning_background')[0]

const menu_items = Array.from(document.getElementsByClassName('menu_item'))
menu_items.forEach( (val, ind) => {
	val.onmouseover= () => {
		back.dataset.selected = ind;
	}
}
)
