const operatorRandomizer = () => {
  let operatorArray = ['*', '-', '+']
  return operatorArray[Math.floor(Math.random() * (operatorArray.length))]
}

const calculateFunction = (a, b, operator) => {
  let result
  switch (operator) {
    case '*':
      result = a * b
      break
    case '-':
      result = a - b
      break
    case '+':
      result = a + b
      break
    default:
      result = null
  }
  return result
}

export { operatorRandomizer, calculateFunction }
