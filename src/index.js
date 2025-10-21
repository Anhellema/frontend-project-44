#!/usr/bin/env node
import { name } from '../bin/brain-games.js'
import { getAnswer } from '../src/cli.js'

let correctAnswer // только для рандом прогрессии?

const getRandomNumber = (min = 0, max = 100) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const getRandomProgression = () => {
  const length = getRandomNumber(5, 10)
  const start = getRandomNumber(1, 50)
  const step = getRandomNumber(2, 6)

  const progression = []
  for (let i = 0; i < length; i++) {
    progression.push(start + (i * step))
  }
  return progression
}

const getProgressionQuestion = (randomProgressionArray) => {
  const hiddenIndex = getRandomNumber(1, randomProgressionArray.length - 1)

  correctAnswer = randomProgressionArray[hiddenIndex] // тут сохраняется ответ в глобальную переменную correctAnswer
  randomProgressionArray[hiddenIndex] = '..' // тут рандомно меняется индекс у массива для вопроса
  return randomProgressionArray // отдаем массив для вопроса
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

const gameType = {
  brainEven: {
    rules: 'Answer "yes" if the number is even, otherwise answer "no".',
    question: () => [getRandomNumber()],
    correct: (q) => q % 2 === 0 ? 'yes' : 'no',
  },
  brainCalc: {
    rules: 'What is the result of the expression?',
    question: () => [getRandomNumber(25, 15), operatorRandomizer(), getRandomNumber(25, 15)],
    correct: (arr) => calculate(arr[0], arr[2], arr[1]),
  },
  brainGCD: {
    rules: 'Find the greatest common divisor of given numbers.',
    question: () => [getRandomNumber(0, 60), getRandomNumber(0, 36)],
    correct: (arr) => isGCD(arr[0], arr[1]),
  },
  brainProgression: {
    rules: 'What number is missing in the progression?',
    question:    getProgressionQuestion(getRandomProgression()),
    correct: () => correctAnswer, // получаем измененную переменную из глобального окружения
  },
  brainPrime: {
    rules: 'Answer "yes" if the number is even, otherwise answer "no".',
    question: () => [getRandomNumber()],
    correct: (q) => isPrime(q),
  },
}

const brainGame = (game) => {
  const { rules, question, correct } = game
  // сменить название на уникальное и сделать аргументом объект
  // цикл должен быть модульным с переменными для каждого ключа

  for (let i = 0; i < 3; i++) {
    const loopQuestion = question
    const readQuestion = loopQuestion.join(' ') // создаем константу где массив превращается в строку для вопроса

    // другой вопрос и ответ
    console.log(rules)
    console.log(`Question: ${readQuestion}`)
    // это одно и то же
    const answer = getAnswer()
    //  разный правильный ответ
    const correctAnswer = correct(loopQuestion)
    // тело цикла и ретурн одинаковые
    if (correctAnswer == answer) {
      console.log('Correct!')
    }
    else {
      return console.log(`${answer} is wrong answer ;(. Correct answer was ${correctAnswer}.
        Let's try again, ${name}!`)
    }
  }
  return console.log(`Congratulations, ${name}!`)
}
// вызов будет идти с агрументом объекта внутри
// brainGame(gameType.brainEven)

export { gameType, brainGame }
