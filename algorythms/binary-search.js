const bynaryDataCreator = (amountOfItems = 10, numsLength = 10, cashedArr) => {
  if (amountOfItems > numsLength) {
    return '"amountOfItems" must be less than "numsLength"!' +
      'Please, try again.'
  }

  let result = cashedArr ? cashedArr : []

  while (result.length < amountOfItems) {
    let newVal = Math.round(Math.random() * numsLength)
    if ((result.indexOf(newVal) + 1) === 0) {
      result.push(newVal)
    }
  }

  if (result.length !== amountOfItems) {
    result = [
      ...result,
      ...bynaryDataCreator(amountOfItems - result.length, numsLength, result)
    ]
  }

  return result.sort((a, b) => a - b)
}
