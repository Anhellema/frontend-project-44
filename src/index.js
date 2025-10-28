import { playerName } from '../bin/brain-games.js'
import { getAnswer } from '../src/cli.js'
import { isEven } from '../games/even.js'
import { calculateFunction, operatorRandomizer } from '../games/calculate.js'
import { isGCD } from '../games/GCD.js'
import { getRandomProgression, getProgressionQuestion, correctAnswerVariable } from '../games/progression.js'
import { isPrime } from '../games/prime.js'

const getRandomNumber = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const gameType = {
  brainEven: {
    gameRules: 'Answer "yes" if the number is even, otherwise answer "no".',
    getGameQuestion: () => [getRandomNumber()],
    getCorrectAnswerValue: q => isEven(q),
  },
  brainCalc: {
    gameRules: 'What is the result of the expression?',
    getGameQuestion: () => [getRandomNumber(3, 25), operatorRandomizer(), getRandomNumber(3, 15)],
    getCorrectAnswerValue: arr => calculateFunction(arr[0], arr[2], arr[1]),
  },
  brainGCD: {
    gameRules: 'Find the greatest common divisor of given numbers.',
    getGameQuestion: () => [getRandomNumber(0, 60), getRandomNumber(0, 36)],
    getCorrectAnswerValue: arr => isGCD(arr[0], arr[1]),
  },
  brainProgression: {
    gameRules: 'What number is missing in the progression?',
    getGameQuestion: () => getProgressionQuestion(getRandomProgression()),
    getCorrectAnswerValue: () => correctAnswerVariable, // получаем измененную переменную из глобального окружения
  },
  brainPrime: {
    gameRules: 'Answer "yes" if given number is prime. Otherwise answer "no".',
    getGameQuestion: () => [getRandomNumber()],
    getCorrectAnswerValue: q => isPrime(q),
  },
}

const brainGame = (game) => {
  const { gameRules, getGameQuestion, getCorrectAnswerValue } = game

  for (let i = 0; i < 3; i++) {
    const thisLoopQuestion = getGameQuestion()
    const readQuestion = thisLoopQuestion.join(' ')

    console.log(gameRules)
    console.log(`Question: ${readQuestion}`)

    const answer = getAnswer()
    const correctAnswer = getCorrectAnswerValue(thisLoopQuestion)

    if (correctAnswer == answer) {
      console.log('Correct!')
    }
    else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
        Let's try again, ${playerName}!`)
    }
  }
  return console.log(`Congratulations, ${playerName}!`)
}

export { gameType, brainGame, getRandomNumber }
