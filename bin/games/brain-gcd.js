#!/usr/bin/env node
import readlineSync from 'readline-sync';
import participantName from './brain-games.js';
import { randomNumber, getAnswer, answerCheck, randomNumberGCD } from '../../src/index.js';

const brainGCD = () => { 
  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {

      const x = randomNumberGCD();
      const y = randomNumberGCD();

      const question = `${x} ${y}`;
        
      const gcd = (a, b) => {
        if (a === 0) {
          return b;
        }       
        while (b !== 0) {
          if (a > b) {
            a = a - b;
          } else {
            b = b - a;
          }
        }
        return a;
      }

      const correctAnswer = () => { return gcd(x, y); }

      const givenAnswer = () => { return parseInt(getAnswer(question)) };   
      
      if (answerCheck(givenAnswer(), correctAnswer()) === false) {
        return `Let's try again, ${participantName}!`
      }
  };
  return `Congratulations, ${participantName}!`;
};

console.log(brainGCD());