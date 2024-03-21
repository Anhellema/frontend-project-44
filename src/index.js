import readlineSync from 'readline-sync';
import participantName from '../bin/games/brain-games.js';
пше
const randomNumber = () => { return Math.floor(Math.random() * 20) };

const randomOperator = () => {
  let randomizer = Math.ceil(Math.random() * 3)
  if (randomizer === 1) {
    return '+'
  } else if (randomizer === 2) {
    return '-'
  } else {
    return '*'
  }
}

const getAnswer = (questionToGet) => {
  console.log(`Question: ${questionToGet}`);
  const answer = readlineSync.question('Your answer is: ');
  return answer;
};


const answerCheck = (answerToCheck, valueToCheck) => {
  if (answerToCheck === valueToCheck) {
    console.log('Correct!');
  } else {
    console.log(`'${answerToCheck}' is wrong answer ;(. Correct answer was '${valueToCheck}'.`);
    return false
  };
};

export { randomNumber, randomOperator, answerCheck, getAnswer,  };
