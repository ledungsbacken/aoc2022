const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('input.txt'),
    // input: require('fs').createReadStream('exampleInput.txt'),
});

let pairs = [];
let nonoverlappingPairs = [];
rl.on('line', function (line) {
    pairs.push(line);
    const [pairOne, pairTwo] = line.split(',').map(e => {
        return e.split('-').map(e => parseInt(e));
    });

    if (pairOne[0] < pairTwo[0] && pairOne[1] < pairTwo[0]) {
        nonoverlappingPairs.push(line);
    } else if (pairOne[0] > pairTwo[0] && pairOne[0] > pairTwo[1]) {
        nonoverlappingPairs.push(line);
    }
});

rl.on('close', function () {
    console.log(pairs.length - nonoverlappingPairs.length);
});
