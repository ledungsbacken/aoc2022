const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('input.txt'),
    // input: require('fs').createReadStream('exampleInput.txt'),
});

rl.on('line', function (line) {
    const chars = line.split('');
    let result = null;
    for (let i = 13; i < chars.length; i++) {
        let recent = [];
        for (let j = 0; j < 14; j++) {
            recent.push(chars[i - j]);
        }
        if (new Set(recent).size !== recent.length) {
            continue;
        }
        result = i + 1;
        break;
    }
    console.log(result);
});

rl.on('close', function () {
});
