// Request a number until it will be getting or canceled
const readNumber = () => {
	let i
	
	while (!isFinite(i)) {
		i = prompt('Enter a number')
	}
	
	if (i === null || i === '') {
		return null
	}
	
	return +i
}
// ------------------------------------


