#!/usr/bin/env node
import readlineSync from 'readline-sync';
import participantName from '../brain-games.js';
import { randomNumber, getAnswer, answerCheck } from '../../src/index.js';
// , answerCheck, givenAnswer


const brainEven = () => { 
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {

    const question = randomNumber();

    const correctAnswer = () => { return question % 2 === 0 ? 'yes' : 'no' };

    const givenAnswer = () => { return getAnswer(question) };

    if (answerCheck(givenAnswer(), correctAnswer()) === false) {
      return `Let's try again, ${participantName}!`
    }
    
  };
  return `Congratulations, ${participantName}!`;
};

console.log(brainEven());
