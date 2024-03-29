#!/usr/bin/env node
import readlineSync from 'readline-sync';
import { randomNumber, randomOperator, getAnswer, answerCheck } from '../../src/index.js';

const randomNumberForGCD = () => {
    let randomizer = Math.ceil(Math.random() * 2)
    if (randomizer === 1) {
        return Math.floor(Math.random() * 50) * 2
      } else if (randomizer === 2) {
        return Math.floor(Math.random() * 50) * 3
      }
    } 
const a = randomNumberForGCD()

const isGCD = (number) => {
  let aGCD = 1
  for (let i = 2; i < 10; ) {
    console.log(`число в цикле: ${number}, делитель цикла: ${i}`);
    console.log(number)
    console.log((number / i))
    console.log(Math.trunc(number / i))
    console.log((number / i) !== Math.trunc(number / i));
    if ( (number / i) !== Math.trunc(number / i)) {
      i++
      continue
    } else if ( number === i )  {
      return aGCD
    } else {
    console.log( number = ( number / i ));
    console.log("что это?");

    number = ( number / i );
    aGCD *= i
    }              
  }
  return aGCD
}
console.log(isGCD(a))