const readline = require('readline'); 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', line => {
    const [a, b] = line.split(' ').map(Number);
    rl.close();
    console.log(solution(a, b));
});

function solution(n, m) {
    let grid = Array.from({ length: n }, () => Array.from({ length: m }, () => Array(3).fill(-1)));
    return findPaths(0, 0, n - 1, m - 1, 1, grid) % 1000;
}

function findPaths(x, y, x1, y1, oneColor, grid) {
    if (x < 0 || y < 0 || x > x1 || y > y1 || oneColor >= 3) return 0;
    if (x === x1 && y === y1) return 1;
    if (grid[x][y][oneColor] !== -1) return grid[x][y][oneColor];

    let paths = 0;
    paths += findPaths(x + 1, y, x1, y1, 1, grid);
    paths += findPaths(x, y + 1, x1, y1, 1, grid);
    paths += findPaths(x + 1, y + 1, x1, y1, oneColor + 1, grid);

    grid[x][y][oneColor] = paths % 1000;
    return grid[x][y][oneColor];
}

// Мемоизация: Для ускорения выполнения используется 3D массив grid, который хранит уже 
// вычисленные результаты для каждой ячейки и значения oneColor, чтобы избежать повторных вычислений.
// Рекурсивный алгоритм: Функция findPaths рекурсивно исследует все возможные пути от точки (0, 0) 
// до точки (n-1, m-1), проверяя все направления (вправо, вниз, диагонально).
// Оптимизация: Результаты вычислений сохраняются, и если путь из той же ячейки уже был вычислен, 
// он просто возвращается без дополнительных расчетов.




