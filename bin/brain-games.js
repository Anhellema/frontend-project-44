#!/usr/bin/env node
import { getName } from '../src/cli.js'

console.log('Welcome to the Brain Games!')
const playerName = getName()
console.log(`Hello, ${playerName}!`)

export { playerName }
