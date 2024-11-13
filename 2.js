const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let lines = [];
let n, m;

rl.on('line', (input) => {
    lines.push(input.trim());
    if (lines.length === 1) {
        [n, m] = lines[0].split(' ').map(Number);
    }
    if (lines.length === m + 1) {
        rl.close();
    }
});

rl.on('close', () => {
    const data = lines[0].split(' ').concat(lines.slice(1));
    solution(data);
});

function solution(data) {
    const n = parseInt(data[0]);
    const m = parseInt(data[1]);
    const data_new = data.slice(2);
    let max = n < 1 ? 0 : 1;
    
    for (let i = 0; i < m; i++) {  
        if (Number(data_new[i].split(' ')[1]) < Number(data_new[i].split(' ')[0])) {
            const s = data_new[i].split(' ')[1] + ' ' + data_new[i].split(' ')[0];
            data_new[i] = s;
        }
    }

    data_sorted = data_new.sort();

    for (let i = 0; i < m; i++) {
        if(Number(data_new[i].split(' ')[0]) <= max && max <= Number(data_new[i].split(' ')[1])) {
            max = Number(data_new[i].split(' ')[1]);
        }
    }
    
    console.log(max);
}
