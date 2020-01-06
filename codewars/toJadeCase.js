String.prototype.toJadenCase = function () {
	return this
		.split(' ')
		.map(item => item.split('')
			.map((itm, i) => i === 0 ? itm.toUpperCase() : itm)
			.join(''))
		.join(' ')
}