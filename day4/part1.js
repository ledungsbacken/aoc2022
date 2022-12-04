const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('input.txt'),
    // input: require('fs').createReadStream('exampleInput.txt'),
});

let overlappingPairs = [];
rl.on('line', function (line) {
    const [pairOne, pairTwo] = line.split(',').map(e => {
        return e.split('-').map(e => parseInt(e));
    });

    if (pairOne[0] >= pairTwo[0] && pairOne[1] <= pairTwo[1]) {
        overlappingPairs.push(line);
    } else if (pairOne[0] <= pairTwo[0] && pairOne[1] >= pairTwo[1]) {
        overlappingPairs.push(line);
    }
});

rl.on('close', function () {
    console.log(overlappingPairs.length);
});
