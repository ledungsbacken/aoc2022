// const fs = require('fs/promises');

// async function example() {
//     // try {
//     //     const data = (await fs.readFile('./exampleInput.txt', { encoding: 'utf8' })).split('\n');
//     //     console.log(data);
//     // } catch (err) {
//     //     console.log(err);
//     // }





//     const data = (await fs.readFile('./exampleInput.txt', { encoding: 'utf8' })).split('\n');

//     const elves = [];
//     for (const line of data) {
//     }
// }
// example();



// import * as readline from 'node:readline/promises';
// import { stdin as input, stdout as output } from 'node:process';

// const rl = readline.createInterface({ input, output });

// const answer = await rl.question('What do you think of Node.js? ');

// console.log(`Thank you for your valuable feedback: ${answer}`);

// rl.close();




const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('input.txt'),
    // input: require('fs').createReadStream('exampleInput.txt'),
});

let weights = [];
let current = 0;
rl.on('line', function (line) {
    if (line === '') {
        weights.push(current);
        current = 0;
        return;
    }
    current += parseInt(line);
});

rl.on('close', function () {
    console.log(Math.max(...weights));
});
