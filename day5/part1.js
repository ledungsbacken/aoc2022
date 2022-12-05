const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('input.txt'),
    // input: require('fs').createReadStream('exampleInput.txt'),
});

let stacksInput = [];
let movesInput = [];
let foundEmptyLine = false;
rl.on('line', function (line) {
    if (line === '') {
        foundEmptyLine = true;
        return;
    }
    if (foundEmptyLine) {
        movesInput.push(line);
        return;
    }
    stacksInput.push(line);
});

rl.on('close', function () {
    const stackKeys = stacksInput[stacksInput.length - 1].trim().replaceAll('   ', ' ').split(' ');

    const stacks = {};
    {
        const tempStacks = stacksInput.map(e => {
            return e.replaceAll('    ', '[]').replaceAll(' ', '').replaceAll('][', '],[').split(',').map(d => d.replaceAll('[', '').replaceAll(']', ''));
        });
        for (const key of stackKeys) {
            const index = parseInt(key) - 1;
            stacks[key] = [];
            for (let i = tempStacks.length - 2; i >= 0; i--) {
                const crate = tempStacks[i][index];
                if (crate === '') {
                    continue;
                }
                stacks[key].push(crate);
            }
        }
    }

    const moves = movesInput.map(e => {
        const fragments = e.split(' ');
        return {
            numToMove: parseInt(fragments[1]),
            from: fragments[3],
            to: fragments[5],
        };
    });

    for (const move of moves) {
        const numToMove = move.numToMove;
        const from = stacks[move.from];
        const to = stacks[move.to];

        for (let i = 0; i < numToMove; i++) {
            const crate = from[from.length - 1];
            from.pop();
            to.push(crate);
        }
    }

    let result = '';
    for (const key of stackKeys) {
        result += stacks[key][stacks[key].length - 1];
    }
    console.log(result);
});
