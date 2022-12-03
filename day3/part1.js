const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('input.txt'),
    // input: require('fs').createReadStream('exampleInput.txt'),
});

function isLowercase(char) {
    const regex = /[a-z]/;
    return char.match(regex) !== null;
}

function getCharPrio(char) {
    const code = char.charCodeAt();
    prio = 0;
    if (isLowercase(char)) {
        prio = code - 96;
    } else {
        prio = code - 38;
    }
    return prio;
}

let prios = [];
rl.on('line', function (line) {
    const items = line.split('');
    const size = items.length / 2;
    const sackOne = items.filter((_, index) => {
        return index < size;
    });
    const sackTwo = items.filter((_, index) => {
        return index >= size;
    });

    for (const char of sackOne) {
        const regex = new RegExp(char);
        const isFound = sackTwo.join('').match(regex) !== null;
        if (!isFound) {
            continue;
        }
        const prio = getCharPrio(char);
        prios.push(prio);
        break;
    }
});

rl.on('close', function () {
    console.log(prios.reduce((a, b) => a + b));
});
