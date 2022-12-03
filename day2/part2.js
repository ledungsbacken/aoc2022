const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('input.txt'),
    // input: require('fs').createReadStream('exampleInput.txt'),
});

const moveMap = {
    A: 'Rock',
    B: 'Paper',
    C: 'Scissors',
    X: 'RoundLoss',
    Y: 'RoundDraw',
    Z: 'RoundWin',
};

const strategy = {
    Rock: {
        RoundLoss: 'Scissors',
        RoundDraw: 'Rock',
        RoundWin: 'Paper',
    },
    Scissors: {
        RoundLoss: 'Paper',
        RoundDraw: 'Scissors',
        RoundWin: 'Rock',
    },
    Paper: {
        RoundLoss: 'Rock',
        RoundDraw: 'Paper',
        RoundWin: 'Scissors',
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
    const play = moveMap[moves[1]];
    const me = strategy[oppenent][play];
    score += pointsMap[play] + pointsMap[me];
});

rl.on('close', function () {
    console.log(score);
});
