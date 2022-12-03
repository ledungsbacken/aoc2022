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

let lines = [];
rl.on('line', function (line) {
    lines.push(line);
});

rl.on('close', function () {
    let prios = [];
    for (let i = 0; i < lines.length; i = i + 3) {
        const first = lines[i];
        const second = lines[i + 1];
        const third = lines[i + 2];

        for (const char of first) {
            const regex = new RegExp(char);
            const isFoundInSecond = second.match(regex) !== null;
            if (!isFoundInSecond) {
                continue;
            }
            const isFoundInThird = third.match(regex) !== null;
            if (!isFoundInThird) {
                continue;
            }
            const prio = getCharPrio(char);
            prios.push(prio);
            break;
        }
    }
    console.log(prios.reduce((a, b) => a + b));
});
