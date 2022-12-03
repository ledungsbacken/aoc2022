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
    weights.push(current);
    weights.sort((a, b) => b - a);
    const first = weights[0];
    const second = weights[1];
    const third = weights[2];
    console.log(first + second + third);
});
