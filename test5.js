const isValidYandexLink = require('./5')

console.log(isValidYandexLink("http://edu.ef.ef.ya.ru")); // true
console.log(isValidYandexLink("https://education.yandex.ru")); // true
console.log(isValidYandexLink("http://yandex.ru/cup")); // true
console.log(isValidYandexLink("https://dataschool.yandex.com")); // true
console.log(isValidYandexLink("https://education.yandex.ru/uchebnik")); // true
console.log(isValidYandexLink("https://google.com")); // false
console.log(isValidYandexLink("http://example.com")); // false
console.log(isValidYandexLink("hts://y*ndex.ru/somepath")); // false
console.log(isValidYandexLink("ya.ru")); // true, так как добавляется https://
console.log(isValidYandexLink("yandex.ru")); // true, так как добавляется https://
console.log(isValidYandexLink("ftp://yandex.ru")); // false, так как это не http/https