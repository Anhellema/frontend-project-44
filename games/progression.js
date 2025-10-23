import { getRandomNumber } from '../src/index.js'

let correctAnswerVariable // только для рандом прогрессии?

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

  correctAnswerVariable = randomProgressionArray[hiddenIndex] // тут сохраняется ответ в глобальную переменную correctAnswer
  randomProgressionArray[hiddenIndex] = '..' // тут рандомно меняется индекс у массива для вопроса
  return randomProgressionArray // отдаем массив для вопроса
}

export { getRandomProgression, getProgressionQuestion, correctAnswerVariable }