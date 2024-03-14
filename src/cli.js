import readlineSync from 'readline-sync';

const getName = () => {
    const name = readlineSync.question('Your answer: ');
    return name
}   

export default getName;