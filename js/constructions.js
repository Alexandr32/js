// Цикл for..in предназначен для перебора массивов и объектов. Его формальное определение:
//for (индекс in массив) {
    // действия
//}

// Переберем элементы массива:
var people = ["Tom", "Alice", "Bob", "Sam"];
for(var index in people){
    console.log(people[index]);
}

// Цикл for...of
// Цикл for...of похож на цикл for...in и предназначен для перебора коллекций, например, массивов:
let users = ["Tom", "Bob", "Sam"];
for(let val of users){
    console.log(val);
}
    