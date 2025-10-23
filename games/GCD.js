const isGCD = (a, b) => {
  let GCD

  while (b !== 0) {
    const temp = a % b
    a = b
    b = temp
  }

  GCD = a
  return GCD
}

export { isGCD }