#!/usr/bin/env node

import readlineSync from 'readline-sync';
import participantName from './brain-games.js';

const isEvenGame = () => {
  let count = 0;
  console.log('Answer "yes" if the number is even, otherwise answer "no"');
  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 20);
    const getAnswer = () => {
      const result = readlineSync.question(`Question: ${randomNumber}
Your asnwer: `);
      return result;
    };
    const answer = getAnswer();
    if ((randomNumber % 2 === 0 && answer.toLowerCase() === 'yes') || ((randomNumber % 2 !== 0 && answer.toLowerCase() === 'no'))) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`Let's try again, ${participantName}!`);
    }
  }
  return count === 3 ? `Congratulations, ${participantName}!` : `Sorry you, ${participantName}, you lost!`;
};

console.log(isEvenGame());
