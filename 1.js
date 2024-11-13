module.exports = function solution({ graph, startVertex, endVertex }) {
    console.log(bfs(graph, startVertex, endVertex));
}

function bfs(graph, start, end) {
    let queue = [[start, [start]]];
    let visited = new Set();
    visited.add(start)

	if (start === end) {
    	return [];
    }
    
    while (queue.length > 0) {
        let [node, path] = queue.shift();
        
        if (node === end) {
            return path;
        }

        if(Object.keys(graph).length > 0) {
            for (let neighbor of graph[node]) {
                if (!visited.has(neighbor)) {
                    visited.add(neighbor);
                    queue.push([neighbor, [...path, neighbor]]);
                }
            }
        }
    }

    return [];
}


// Инициализация: очередь содержит пару - вершину start и путь, начинающийся с неё. 
// Множество visited отслеживает посещённые вершины, чтобы избежать зацикливания. 
// Добавляем начальную вершину в visited. 

// Поиск пути: если start равно end, сразу возвращаем пустой массив. 
// В цикле while продолжаем обрабатывать очередь, извлекая первую вершину и путь. 
// Если текущая вершина равна end, возвращаем путь. 
// Для каждой вершины проверяем её соседей: если не были посещены, добавляем в очередь с новым путём. 

// Завершение: если конечная вершина не найдена, возвращаем пустой массив, что означает отсутствие пути.
