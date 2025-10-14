#!/usr/bin/env node
import { name } from './brain-games.js'
import { getAnswer } from '../src/cli.js'

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

const gcdGame = () => {
  let count = 0

  for (let i = count; i < 3; i++) {
    const randomNumber1 = Math.ceil(Math.random() * 25) * 2
    const randomNumber2 = Math.ceil(Math.random() * 10) * 2

    console.log('Find the greatest common divisor of given numbers.')
    console.log(`Question: ${randomNumber1} ${randomNumber2}`)

    const answer = getAnswer()

    const correctAnswer = isGCD(randomNumber1, randomNumber2)
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

gcdGame()
