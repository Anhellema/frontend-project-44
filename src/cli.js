import readlineSync from 'readline-sync'

const getName = () => readlineSync.question('May I have your name? ')

const getAnswer = () => readlineSync.question('Your answer: ')

export { getName, getAnswer }
