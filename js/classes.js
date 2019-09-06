// Классы
// Для определения класса используется ключевое слово class:
class Person{
}

let Person = class{}

//========================================
class Person{}
 
let tom = new Person();
let bob = new Person();

//========================================
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(this.name, this.age);
    }
}
 
let tom = new Person("Tom", 34);
tom.display();          // Tom 34
console.log(tom.name);  // Tom

//========================================
// Наследование
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    display(){
        console.log(this.name, this.age);
    }
}
class Employee extends Person{
    constructor(name, age, company){
        super(name, age);
        this.company = company;
    }
    display(){
        super.display();
        console.log("Employee in", this.company);
    }
    work(){
        console.log(this.name, "is hard working");
    }
}
 
let tom = new Person("Tom", 34);
let bob = new Employee("Bob", 36, "Google");
tom.display();
bob.display();
bob.work();


//========================================
// Статические методы
// Статические методы вызываются для всего класса вцелом, а не для отедельного объекта. Для их определения применяется оператор static. Например
class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    static nameToUpper(person){
        return person.name.toUpperCase();
    }
    display(){
        console.log(this.name, this.age);
    }
}
let tom = new Person("Tom Soyer", 34);
let personName = Person.nameToUpper(tom);
console.log(personName);        // TOM SOYER
//========================================