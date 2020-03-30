const scaleScroll = ({ x, y, w, h, scale }) => {
	// const calcSide = (s, p) => x - (w * (scale - 1)) / 2
	if (scale === 1) {
		return { x, y }
	}
	
	return {
		x: scale > 1
			? x - (w * (scale - 1)) / 2
			: x + (w - (w * scale)) / 2,
		y: scale > 1
			? y - (h * (scale - 1)) / 2
			: y + (h - (h * scale)) / 2
	}
}

console.log(scaleScroll({	x:70, y:-1 ,w:100 ,h:20 , scale: 0.273 }))