const isPrime = (number) => {
  if (number === 2) {
    return 'yes'
  }

  else if (number < 2 || number % 2 === 0) {
    return 'no'
  }

  let sqrtNumber = Math.floor(Math.sqrt(number))
  for (let i = 3; i <= sqrtNumber; i += 2) {
    if (number % i === 0) {
      return 'no'
    }
  }
  return 'yes'
}

export { isPrime }
