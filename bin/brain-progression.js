#!/usr/bin/env node
import { name } from './brain-games.js'
import { getAnswer } from '../src/cli.js'

const randomMassive = () => {
  let array = []
  const maxArrayLength = 10

  const random = Math.ceil(Math.random() * 5)
  let arrayElement = random

  for (let i = 0; i < maxArrayLength; i++) {
    array.push(arrayElement + random)
    arrayElement += random
  }

  return array
}

let correctAnswer

const progressionGame = () => {
  let count = 0

  for (let i = count; i < 3; i++) {
    const newArray = randomMassive()

    const randomIndexHide = (array) => {
      const randomIndexToHide = Math.ceil(Math.random() * (array.length - 1))

      correctAnswer = array.at(randomIndexToHide)
      array[randomIndexToHide] = '..'

      return array
    }

    console.log('What number is missing in the progression?')
    console.log(`Question: ${randomIndexHide(newArray)} `)

    const answer = getAnswer()

    // const correctAnswer = ''
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

progressionGame()
