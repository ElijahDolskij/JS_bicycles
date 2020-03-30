/**
 * Create an iterable object with custom range of number
 * @constructor
 * @param {number} from - start of range.
 * @param {number} to - end of range.
 */
class RangeGenerator {
	constructor(from, to) {
		this.from = from
		this.to = to
	}
	[Symbol.iterator]() {
		return {
			current: this.from,
			last: this.to,
			next() {
				if (this.current <= this.last) {
					return {
						value: this.current++,
						done: false,
					}
				} else {
					return {
						value: this.last,
						done: true,
					}
				}
			},
		}
	}
}

const Range1 = new RangeGenerator(0, 10)
const Range2 = new RangeGenerator(3, 16)

for (let key of Range1) {
	console.log(key)
}

for (let key of Range2) {
	console.log(key)
}
