#!/usr/bin/env node
import readlineSync from 'readline-sync';
import participantName from '../brain-games.js';
import { randomNumber, randomOperator, getAnswer, answerCheck } from '../../src/index.js';

const calcGame = () => {
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {

    const a = randomNumber();
    const b = randomNumber();
    const operator = randomOperator();
    const question = `${a} ${operator} ${b}`;

    const correctAnswer = () => {
      switch (operator) {
        case '+':
          return a + b;
        case "-":
          return a - b;
        case "*":
          return a * b;
        default:
          return 0;
     }
   };

    const givenAnswer = () => { return parseInt(getAnswer(question)) };
    
    if (answerCheck(givenAnswer(), correctAnswer()) === false) {
      return `Let's try again, ${participantName}!`
    }
  }
  return `Congratulations, ${participantName}!`;
};

console.log(calcGame());