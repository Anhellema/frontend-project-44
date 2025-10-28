const isPrime = (number) => {
  let result

  if (number < 2 || number % 2 === 0) {
    return 'no'
  }

  else if (number === 2) {
    return 'yes'
  }

  let squareNumber = Math.sqrt(number)

  for (let i = 0; i <= Math.floor(squareNumber); i++) {
    number % i === 0 ? result = 'no' : result = 'yes'
  }

  return result
}

export { isPrime }
