const getCache = require('./4')

const cache = getCache(1); // Размер кэша равен трем элементам

cache.setCacheChunk({id: 1}); // Добавляем 1 объект в кэш
cache.setCacheChunk([{id: 2}, {id: 3}]); // Добавляем несколько объектов в кэш
cache.getData() // [{id: 1}, {id: 2}, {id: 3}]

cache.setCacheChunk({id: 4}); // Добавляем 1 объект в заполненный кэш
cache.getData() // [{id: 2}, {id: 3}, {id: 4}]

cache.changeItem({id: 3, log: 'some data'}); // Изменяем объект в кэше
cache.getData() // [{id: 2}, {id: 3, log: 'some data'}, {id: 4}]

cache.setCacheChunk([{id: 5}, {id: 6}]); // Добавляем несколько объектов в заполненный кэш
cache.getData() // [{id: 3, log: 'some data'}, {id: 5}, {id: 6}]

cache.setCacheChunk({id: 3, field: 'some value'}); // Измененный объект перестает быть последним
// Из-за того что объект был установлен снова, его приоритет повышен
cache.getData() // [{id: 4}, {id: 5}, {id: 3, field: 'some value'}]

cache.setCacheChunk([{id: 7}, {id: 8}, {id: 9}]); // Добавляем объекты в кэш
cache.getCacheItemById(7); // Читаем объекты из кэша
cache.getCacheItemById(8);
cache.getData() // [{id: 9}, {id: 7}, {id: 8}]
