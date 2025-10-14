#!/usr/bin/env node
import { name } from './brain-games.js'
import { getAnswer } from '../src/cli.js'

const calculate = (a, b, operator) => {
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

const operatorRandomizer = () => {
  const random = Math.ceil(Math.random() * 3)
  if (random === 1) {
    return '*'
  }
  else if (random === 2) {
    return '-'
  }
  else if (random === 3) {
    return '+'
  }
}

const calcGame = () => {
  let count = 0

  for (let i = count; i < 3; i++) {
    const randomNumber1 = Math.round(Math.random() * 25)
    const randomNumber2 = Math.round(Math.random() * 25)
    const randomOperator = operatorRandomizer()

    console.log('What is the result of the expression?')
    console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`)

    const answer = getAnswer()

    const correctAnswer = calculate(randomNumber1, randomNumber2, randomOperator)

    if (correctAnswer === Number(answer)) {
      console.log('Correct!')
      count += 1
    }
    else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
        Let's try again, ${name}!`)
    }
  }
  return console.log(`Congratulations, ${name}!`)
}

calcGame()
