const readline = require('readline');
const rl = readline.createInterface({
    input: require('fs').createReadStream('input.txt'),
    // input: require('fs').createReadStream('exampleInput.txt'),
});

rl.on('line', function (line) {
    const chars = line.split('');
    let result = null;
    for (let i = 3; i < chars.length; i++) {
        const char = chars[i];
        const recent = [chars[i - 3], chars[i - 2], chars[i - 1], char];
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
