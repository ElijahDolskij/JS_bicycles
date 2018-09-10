const bynaryDataCreator = (amountOfItems = 10, numsLength = 10) => {
  if (amountOfItems > numsLength) {
    return '"amountOfItems" must be less than "numsLength"!' +
      'Please, try again.'
  }

  let result = []

  while (result.length < amountOfItems) {
    let newVal = Math.round(Math.random() * numsLength)
    if ((result.indexOf(newVal) + 1) === 0) {
      result.push(newVal)
    }
  }

  return result.sort((a, b) => a - b)
}

let testArr = bynaryDataCreator(6, 10)

const binarySearch = (arr, val) => {
  if (arr.length === 0 || !val) return
  let min = 0
  let max = arr.length - 1
  let mid = Math.floor(max / 2)
  let index = false;

  while (mid >= min && !index) {
    if (arr[mid] === val) {
      index = mid
    } else if (arr[mid] > val) {
      max = mid - 1
      mid = Math.floor(min + (max / 2))
    } else {
      min = mid + 1
      mid = Math.floor((min + max) / 2)
    }
  }

  return index || 'The search value is missing from the target array'
}
