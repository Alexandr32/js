// Объектно-ориентированное программирование
//========================================
// Создание нового объекта
var user0 = new Object();
var user1 = {}; // предпочтительный вариант

//========================================
// Свойства объекта
var user2 = {};
user2.name = "Tom";
user2.age = 26;

console.log(user2.name);
console.log(user2.age);

var user3 = {
    name: "Tom",
    age: 26
};

// сокращенный способ определения свойств:
var name1 = "Tom";
var age1 = 34;
var user4 = {name1, age1};
console.log(user4.name1);     // Tom
console.log(user4.age1);      // 34

var name2 = "Tom";
var age2 = 34;
var user5 = {name2, age2};
 
var teacher = {user5, course: "JavaScript"};
console.log(teacher.user);      // {name: "Tom", age: 34}
console.log(teacher.course);    // JavaScript
//========================================
// Методы объекта
var user6 = {};
user6.name = "Tom";
user6.age = 26;
user6.display = function(){
     
    console.log(this.name);
    console.log(this.age);
};

var user7 = {};
user7.name = "Alex";
user7.age = 29;
user7.display = ()=> {
     
    console.log(this.name);
    console.log(this.age);
};
 
// вызов метода
user7.display();

var user8 = {
  
    name: "AlexM",
    age: 28,
    display(){
      
        console.log(this.name, this.age);
    },
    move(place){
        console.log(this.name, "goes to", place);
    }
};
user8.display(); // Tom 26
user8.move("the shop");  // Tom goes to the shop

//========================================
// Синтаксис массивов 
// Альтернативный способ для объктов
var user9 = {};
user9["name"] = "Tom";
user9["age"] = 26;
user9["display"] = function(){
     
    console.log(user.name);
    console.log(user.age);
};
 
// вызов метода
user9["display"]();

//========================================
// Строки в качестве свойств и методов
var user10 = {
    "name": "Tom",
    "age": 26,
    "display": function(){
     
        console.log(this.name);
        console.log(this.age);
    }
};
// вызов метода
user10.display();

var user11 = {
    name: "Tom",
    age: 26,
    "full name": "Tom Johns",
    "display info": function(){
     
        console.log(this.name);
        console.log(this.age);
    }
};
console.log(user11["full name"]);
user11["display info"]();

//========================================
// Удаление свойств
var user12 = {};
user.name = "Tom";
user.age = 26;
user.display = function(){
     
    console.log(this.name);
    console.log(this.age);
};
 
console.log(user12.name); // Tom
delete user12.name; // удаляем свойство
// альтернативный вариант
// delete user["name"];
console.log(user12.name); // undefined

//========================================
// Вложенные объекты и массивы в объектах
var country = {
 
    name: "Германия",
    language: "немецкий",
    capital:{
     
        name: "Берлин",
        population: 3375000,
        year: 1237
    }
};
console.log("Столица: " + country.capital.name); // Берлин
console.log("Население: " + country["capital"]["population"]); // 3375000
console.log("Год основания: " + country.capital["year"]); // 1237

//========================================
// Проверка наличия и перебор методов и свойств
var user13 = {};
user13.name = "Tom";
user13.age = 26;
user13.display = function(){
     
    console.log(this.name);
    console.log(this.age);
};
var hasNameProp = "name" in user13;
console.log(hasNameProp); // true - свойство name есть в user
var hasWeightProp = "weight" in user13;
console.log(hasWeightProp); // false - в user нет свойства или метода под названием weight

//========================================
// Перебор свойств и методов
var user14 = {};
user14.name = "Tom";
user14.age = 26;
user14.display = function(){
     
    console.log(this.name);
    console.log(this.age);
};

for(var key in user14) {
    console.log(key + " : " + user[key]);
}

//========================================
// Объекты в функциях
// Функции могут возвращать значения. Но эти значения не обязательно должны представлять примитивные данные - числа, строки, но также могут быть сложными объектами.
// Например, вынесем создание объекта user в отдельную функцию:
function createUser(pName, pAge) {
    return {
        name: pName,
        age: pAge,
        displayInfo: function() {
            document.write("Имя: " + this.name + " возраст: " + this.age + "<br/>");
        }
    };
};
var tom = createUser("Tom", 26);
tom.displayInfo();
var alice = createUser("Alice", 24);
alice.displayInfo();


//========================================
// Конструкторы объектов
	
var tom2 = new Object();

function User15(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
    };
}

// Конструктор - это обычная функция за тем исключением, что в ней мы можем установить свойства и методы. Для установки свойств и методов используется ключевое слово this:
// this.name = pName;
// После этого в программе мы можем определить объект типа User и использовать его свойства и методы:
var tom3 = new User15("Том", 26);
console.log(tom.name); // Том
tom.displayInfo();

// конструктор типа Car
function Car(mName, mYear){
    this.name = mName;
    this.year = mYear;
    this.getCarInfo = function(){
        document.write("Модель: " + this.name + "  Год выпуска: " + this.year + "<br/>");
    };
};
// конструктор типа User
function User16(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.driveCar = function(car){
        document.write(this.name + " ведет машину " + car.name + "<br/>");
    };
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
    };
};
 
var tom = new User16("Том", 26);
tom.displayInfo();
var bently = new Car("Бентли", 2004);
tom.driveCar(bently);

//========================================
// Оператор instanceof
// Оператор instanceof позволяет проверить, с помощью какого конструктора создан объект. Если объект создан с помощью определенного конструктора, то оператор возвращает true:
var tom = new User16("Том", 26);
 
var isUser = tom instanceof User16;
var isCar = tom instanceof Car;
console.log(isUser);    // true
console.log(isCar);     // false
//========================================
// Расширение объектов. Prototype
// Кроме непосредственного определения свойств и методов в конструкторе мы также можем использовать свойство prototype. Каждая функция имеет свойство prototype, представляющее прототип функции. То есть свойство User.prototype представляет прототип объектов User. И любые свойства и методы, которые будут определены в User.prototype, будут общими для всех объектов User.
function User17(pName, pAge) {
    this.name = pName;
    this.age = pAge;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
    };
};
 
User17.prototype.hello = function(){
    document.write(this.name + " говорит: 'Привет!'<br/>");
};
User17.prototype.maxAge = 110;
 
var tom = new User17("Том", 26);
tom.hello();
var john = new User17("Джон", 28);
john.hello();
console.log(tom.maxAge); // 110
console.log(john.maxAge); // 110

// Здесь добавлены метод hello и свойство maxAge, и каждый объект User сможет их использовать. Но важно заметить, что значение свойства maxAge будет одно и то же для всех объектов, это разделяемое статическое свойство. В отличие, скажем, от свойства this.name, которое хранит значение для определенного объекта.
// В то же время мы можем определить в объекте свойство, которое будет назваться также, как и свойство прототипа. В этом случае собственное свойство объекта будет иметь приоритет перед свойством прототипа:
User17.prototype.maxAge = 110;
var tom = new User17("Том", 26);
var john = new User17("Джон", 28);
tom.maxAge = 99;
console.log(tom.maxAge); // 99
console.log(john.maxAge); // 110

//========================================
// Инкапсуляция
// getter setter var _age приватная
function User18(name, age) {
    this.name = name;
    var _age = age;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + _age + "<br>");
    };
    this.getAge = function() {
        return _age;
    }
    this.setAge = function(age) {
        if(typeof age === "number" && age >0 && age<110){
            _age = age;
        } else {
            console.log("Недопустимое значение");
        }
    }
}
 
var tom = new User18("Том", 26);
console.log(tom._age); // undefined - _age - локальная переменная
console.log(tom.getAge()); // 26
tom.setAge(32);
console.log(tom.getAge()); // 32
tom.setAge("54"); // Недопустимое значение
//========================================
// Функция как объект. Методы call и apply
// В JavaScript функция тоже является объектом - объектом Function и тоже имеет прототип, свойства, методы. Все функции, которые используются в программе, являются объектами Function и имеют все его свойства и методы.
// Среди свойств объекта Function можно выделить следующие:
//    arguments: массив аргументов, передаваемых в функци
//    length: определяет количество аргументов, которые ожидает функция
//    caller: определяет функцию, вызвавшую текущую выполняющуюся функцию
//    name: имя функции
//    prototype: прототип функции
function display(){
     
    console.log("привет мир");
}
Function.prototype.program ="Hello";
 
console.log(display.program); // Hello

// Метод call() вызывает функцию с указанным значением this и аргументами:
function add(x, y){
     
    return x + y;
}
var result = add.call(this, 3, 8);
 
console.log(result); // 11
//========================================
// this указывает на объект, для которого вызывается функция - в данном случае это глобальный объект window. После this передаются значения для параметров.
// При передаче объекта через первый параметр, мы можем ссылаться на него через ключевое слово this:

function User19(name, age) {
    this.name = name;
    this.age = age;
}
var tom = new User19("Том", 26);

function display(){
    console.log("Ваше имя: " + this.name);
}
display.call(tom); // Ваше имя: Том

// В данном случае передается только одно значение, поскольку функция display не принимает параметров. То есть функция будет вызываться для объекта tom.
// Если нам не важен объект, для которого вызывается функция, то можно передать значение null:
function add(x, y){
     
    return x + y;
}
var result = add.call(null, 3, 8);
 
console.log(result); // 11
// На метод call() похож метод apply(), который также вызывает функцию и в качестве первого параметра также получает объект, для которого функция вызывается. Только теперь в качестве второго параметра передается массив аргументов:
function add(x, y){
     
    return x + y;
}
var result = add.apply(null, [3, 8]);
 
console.log(result); // 11


// Явная привязка
// С помощью методов call() и apply() можно задать явную привязку функции к определенному контексту:
function foo(){
    console.log(this.bar);
}
 
var o3 = {bar: "bar3"}
var bar = "bar1";
foo();  // bar1
foo.apply(o3);  // bar3
// или
// foo.call(o3);
// Во втором случае функция foo привязывается к объекту o3, который и определяет ее контекст. Поэтому во втором случае консоль выведет "bar3".

// Метод bind
// Метод f.bind(o) позволяет создать новую функцию с тем же телом и областью видимости, что и функция f, но с привязкой к объекту o:
function foo(){
    console.log(this.bar);
}
 
var o3 = {bar: "bar3"}
var bar = "bar1";
foo();  // bar1
var func = foo.bind(o3);
func(); // bar3


//========================================
// Наследование
// JavaScript поддерживает наследование, то позволяет нам при создании новых типов объектов при необходимости унаследовать их функционал от уже существующих. Например, у нас может быть объект User, представляющий отдельного пользователя. И также может быть объект Employee, который представляет работника. Но работник также может являться пользователем и поэтому должен иметь все его свойства и методы. Например

// конструктор пользователя
function User20 (name, age) {
    this.name = name;
    this.age = age;
    this.go = function(){document.write(this.name + " идет <br/>");}
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age + "<br/>");
    };
}
User20.prototype.maxage = 110;
 
// конструктор работника
function Employee(name, age, comp){
    // В конструкторе Employee происходит обращение к конструктору User с помощью вызова:
    User20.call(this, name, age); // Передача первого параметра позволяет вызвать функцию конструктора User для объекта, создаваемого конструктором Employee. Благодаря этому все свойства и методы, определенные в конструкторе User, также переходят на объект Employee.
    this.company = comp;
    this.displayInfo = function(){
        document.write("Имя: " + this.name + "; возраст: " + this.age + "; компания: " + this.company + "<br/>");
    };
}

// Кроме того, необходимо унаследовать также и прототип User. Для этого служит вызов:
Employee.prototype = Object.create(User20.prototype);
 
var tom = new User20("Том", 26);
var bill = new Employee("Билл", 32, "Google");
tom.go();
bill.go();
tom.displayInfo(); 
bill.displayInfo(); 
console.log(bill.maxage);
//========================================
// this и стрелочные функции
// При работе с несколькими контекстами мы вынуждены учитывать, в каком контексте определяется переменная. Например, возьмем следующий код:
var school ={
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses: function(){
        this.courses.forEach(function(course){
            console.log(this.title, course);
        })
    }
}
school.printCourses();
// Мы видим, что значение this.title не определено, так как this как контекст объекта замещается глобальным контекстом. В этом случае нам надо передать подобное значение this.title или весь контекст объекта.
var school ={
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses: function(){
        var that = this;
        this.courses.forEach(function(course){
            console.log(that.title, course);
        })
    }
}
school.printCourses();
// Стрелочные функции также позволяют решить данную проблему:
var school ={
    title: "Oxford",
    courses: ["JavaScript", "TypeScript", "Java", "Go"],
    printCourses: function(){
        this.courses.forEach((course)=>console.log(this.title, course))
    }
}
school.printCourses();

//========================================
// Декомпозиция
let user = {
    name: "Tom",
    age: 24,
    phone: "+367438787",
    email: "tom@gmail.com"
};
let {name: userName, email: mailAddress} = user;
console.log(userName);      // Tom
console.log(mailAddress);       // tom@gmail.com
//========================================


//========================================
//========================================
//========================================
//========================================
//========================================
//========================================
//========================================
//========================================
//========================================
//========================================
//========================================
//========================================
//========================================