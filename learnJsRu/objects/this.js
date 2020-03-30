// calculator to read, sum and multi (for browsers only)
let calculator = {
	read() {
		this.a = +prompt('Enter a')
		this.b = +prompt('Enter b')
	},
	sum() {
		return this.a + this.b
	},
	mul() {
		return this.a * this.b
	},
}

// calculator.read()
// console.log('Sum: ', calculator.sum())
// console.log('Mul: ', calculator.mul())
// ------------------------------------


// ladder chain
let ladder = {
	step: 0,
	up() {
		this.step++;
		return this
	},
	down() {
		this.step--;
		return this
	},
	showStep: function() { // показывает текущую ступеньку
		console.log( this.step )
		return this
	}
};

//ladder.up().up().down().showStep()
// ------------------------------------

// the same calculator that above, but as constructor
function Calculator() {
	this.read = () => {
		this.a = +prompt('Enter a')
		this.b = +prompt('Enter b')
	}
	this.sum = () => {
		return this.a + this.b
	}
	this.mul = () => {
		return this.a * this.b
	}
}

// const calc = new Calculator()
// calc.read()
// console.log('Sum: ', calculator.sum())
// console.log('Mul: ', calculator.mul())
// ------------------------------------


// For browsers only
function Accumulator(startingValue) {
	this.value = startingValue
	this.read = () => {
		this.value = this.value + (+prompt('Input value:'))
	}
}

let accumulator = new Accumulator(1)

// accumulator.read()
// accumulator.read()
// alert(accumulator.value)
// ------------------------------------