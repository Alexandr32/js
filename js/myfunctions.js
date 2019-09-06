
function display0(){
    console.log("Функция вызвана");
}

display0();

var display00 = ()=> {
    console.log("Функция вызвана");
}

display00();

//========================================
// Анонимная функция
var display2 = function(){
    console.log("Анонимная функция вызвана");
}

display2();

//========================================
function event(){
    console.log("Функция вызвана из переменной");
}

// По сути это как делегат в c#
var variablForFunction = event;
variablForFunction();

//========================================
// Функция с необязательными параметрами
function display3(x, y){
 
    // Проверка имеет ли значение
    if(y === undefined) y = 5;
    if(x === undefined) x = 8;
    let z = x * y;
    console.log(z);
}
display3();  // 40
display3(6); // 30
display3(6, 4) // 24

//========================================
// Значение по умолчанию
function display4(x = 5, y = 10){
    let z = x * y;
    console.log(z);
}
display4();      // 50
display4(6);     // 60
display4(6, 4)   // 24

//========================================
// Значение параметра по умолчанию может быть производным, представлять выражение
function display5(x = 5, y = 10 + x){
    let z = x * y;
    console.log(z);
}
display5();      // 75
display5(6);     // 96
display5(6, 4)   // 24

//========================================
// Неограниченное кол-во параметров
function display6(season, ...temps){
    console.log(season);
    for(index in temps){
        console.log(temps[index]);
    }
}
display6("Весна", -2, -3, 4, 2, 5);
display6("Лето", 20, 23, 31);
// Вывод в консоль
// Весна
// -2
// -3
// 4
// 2
// 5
// Лето
// 20
// 23
// 31

//========================================
// функция с возвращаемыми значениями
var y = 5;
var z = square(y);
document.write(y + " в квадрате равно " + z);
function square(x) {
  return x * x;
}

//========================================
// Функции в качестве параметров
function sum1(x, y){
    return x + y;
}
 
function subtract(x, y){
    return x - y;
}
 
function operation(x, y, func){
  
    var result = func(x, y);
    console.log(result);
}
 
console.log("Sum");
operation(10, 6, sum1);  // 16
 
console.log("Subtract");
operation(10, 6, subtract); // 4

//========================================
// Возвращение функции из функции
// Схожий миханизм с делегатами c#
function menu(n){
  
    if(n==1) return function(x, y){ return x+y;}
    else if(n==2) return function(x, y){ return x - y;}
    else if(n==3) return function(x, y){ return x * y;}
    return undefined;
}
 
for(var i=1; i < 5; i++){
    var action = menu(i);
    if(action!==undefined){
        var result = action(5, 4);
        console.log(result);
    }
}


//========================================
// Самовызывающиеся функции
(function(){
    console.log("Привет мир");
}());
 
(function (n){
     
    var result = 1;
    for(var i=1; i<=n; i++)
        result *=i;
    console.log("Факториал числа " + n + " равен " + result);
}(4));

//========================================
// Паттерн Модуль
let foo = (function(){
    let obj = {greeting: "hello"};
     
    return {
        display: function(){
            console.log(obj.greeting);
        }
    }
})();

foo.display();  // hello

// Данный модуль представляет примитивный калькулятор, который выполняет три операции: сложение, вычитание и вывод результата.

// Все данные инкапсулированы в объекте data, который хранит результат операции. Все операции представлены тремя возвращаемыми функциями: sum, subtract и display. Через эти функции мы можем управлять результатом калькулятора извне.

let calculator = (function(){
    let data = { number: 0 };
     
    return {
        sum: function(n){
            data.number += n;
        },
        subtract: function(n){
            data.number -= n;
        },
        display: function(){
            console.log("Result: ", data.number);
        }
    }
})();
calculator.sum(10);
calculator.sum(3);
calculator.display();   // Result: 13
calculator.subtract(4);
calculator.display();   // Result: 9

//========================================
// Переопределение функций
function display7(){
    console.log("Доброе утро");
    display7 = function(){
        console.log("Добрый день");
    }
}
 
display7(); // Доброе утро
display7(); // Добрый день

// присвоение ссылки на функцию до переопределения
var displayMessage = display7;
display7(); // Доброе утро
display7(); // Добрый день
displayMessage(); // Доброе утро
displayMessage(); // Доброе утро

// Но допустим, мы определили переменную displayMessage уже после вызова функции display:
display7(); // Доброе утро
display7(); // Добрый день
var displayMessage = display7;
displayMessage(); // Добрый день
displayMessage(); // Добрый день

//========================================
// Стрелочные функции
// Стрелочные функции (arrow functions) представляют сокращенную версию обычных функций. Стрелочные функции образуются с помощью знака стрелки (=>), перед которым в скобках идут параметры функции, а после - собственно тело функции. Например:
let sum2 = (x, y) => x + y;
let a = sum(4, 5);      // 9
let b = sum(10, 5);     // 15

// void
let sum3 = (x, y) => console.log(x + y);
sum(4, 5);      // 9
sum(10, 5);     // 15

// Один параметр
var square1 = n => n * n;
console.log(square(5));     // 25
console.log(square(6));     // 36
console.log(square(-7));    // 49

// Набор выражений
var square2 = n => {
    let result = n * n;
    return result;
}
 
console.log(square(5));     // 25

// Стрелочная функция возвращает объект:
let user = (userName, userAge) => ({name: userName, age: userAge});
 
let tom = user("Tom", 34);
let bob = user("Bob", 25);

console.log(tom.name, tom.age);     // "Tom", 34
console.log(bob.name, bob.age);     // "Bob", 25

// Стрелочная функция не принимает никаких параметров
var hello = ()=> console.log("Hello World");
hello();    // Hello World
hello();    // Hello World






