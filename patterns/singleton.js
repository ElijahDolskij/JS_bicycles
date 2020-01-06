class Counter {
  constructor() {
    if (typeof Counter.instance === 'object') {
      return Counter.instance
    }
    this.count = 0
    Counter.instance = this
    return this
  }
  get counterState() {
    return this.count
  }
  increment() {
    this.count++
  }
}

const a = new Counter();
const b = new Counter();
a.increment()
b.increment()
b.increment()
b.increment()
console.log(a.counterState, b.counterState)