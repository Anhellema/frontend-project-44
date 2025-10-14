import { getAnswer } from '../src/cli.js'
import { name } from './brain-games.js'

const isEvenGame = () => {
  let count = 0

  for (let i = count; i < 3; i++) {
    const randomNumber = Math.round(Math.random() * 100)

    console.log('Answer "yes" if the number is even, otherwise answer "no".')
    console.log(`Question: ${randomNumber}`)

    const answer = getAnswer()

    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no'

    if (correctAnswer === answer) {
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

isEvenGame()
