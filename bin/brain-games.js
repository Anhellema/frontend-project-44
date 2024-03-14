#!/usr/bin/env node

import getName from "../src/cli.js";

console.log('Welcome to Brain Games!');

const participantName = getName();

console.log(`Hello, ${participantName}!`);


