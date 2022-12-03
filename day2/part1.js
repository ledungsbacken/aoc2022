const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('input.txt'),
    // input: require('fs').createReadStream('exampleInput.txt'),
});

const moveMap = {
    A: 'Rock',
    B: 'Paper',
    C: 'Scissors',
    X: 'Rock',
    Y: 'Paper',
    Z: 'Scissors',
};

const rules = {
    Rock: {
        Rock: 'RoundDraw',
        Paper: 'RoundLoss',
        Scissors: 'RoundWin',
    },
    Scissors: {
        Rock: 'RoundLoss',
        Paper: 'RoundWin',
        Scissors: 'RoundDraw',
    },
    Paper: {
        Rock: 'RoundWin',
        Paper: 'RoundDraw',
        Scissors: 'RoundLoss',
    },
};

const pointsMap = {
    Rock: 1,
    Paper: 2,
    Scissors: 3,
    RoundLoss: 0,
    RoundDraw: 3,
    RoundWin: 6,
};

let score = 0;
rl.on('line', function (line) {
    const moves = line.split(' ');
    const oppenent = moveMap[moves[0]];
    const me = moveMap[moves[1]];
    const outcome = rules[me][oppenent];
    score += pointsMap[outcome] + pointsMap[me];
});

rl.on('close', function () {
    console.log(score);
});
