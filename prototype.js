//===========Prototype========//

const Dog = function (options) {
    this.name = options.name
    this.color = options.color
}

Dog.prototype.voice = function () {
    return `My dog ${this.name} say gav-gav`
}

const dog = new Dog({ name: 'Rex', color: 'white' });
console.log(dog);
console.log(dog.voice());

const Cat = function (options) {
    Dog.apply(this, arguments)
    this.hasLeg = options.hasLeg
    this.type = 'cat'
}

Cat.prototype = Object.create(Dog.prototype)
Cat.prototype.constructor = Cat

Dog.prototype.voice = function () {
    return `My cat ${this.name} say mjau - mjau`
}

const cat = new Cat({ name: 'Miki', color: 'black', hasLeg: true })
console.log(cat);
console.log(cat.voice());

//==========Class============///

class Dog {
    constructor(name, color) {
        this.name = name
        this.color = color
    }
    voice() {
        return `My dog ${this.name} say gav-gav`
    }
}
const dog = new Dog('Max', 'white');
console.log(dog.voice());

class Cat extends Dog {
    constructor(name, color, leg) {
        super(name, color)
        this.leg = leg
        this.type = 'cat'
        this.hasTail = true
    }
    voice() {
        super.voice()
        return `My cat ${this.name} say mjau - mjau`
    }
}
const cat = new Cat('Viski', 'black', 4)
console.log(cat);
console.log(cat.voice());

//=========Examples===========//
Object.prototype.print = function () {
    return console.log(`I am object:`, this);
}
cat.print()
const horse = { leg: 4, name: 'Leny' }
horse.print();

//Array
Array.prototype.sum = function () {
    return this.reduce((acum, i) => acum + i, 0)
}
const arr = [1, 2, 3, 4, 5, 6]
console.log(arr.sum());

const arr2 = [4, 56, 7, 8, 9, 0]
console.log(arr2.sum());

//String
String.prototype.showTag = function (tagName) {
    return `<${tagName}>${this}</${tagName}>`
}
console.log('men'.showTag('b'));//<b>men</b>
console.log('people'.showTag('i'));//<i>people</i>

//Number
Number.prototype.toBigInt = function () {
    return BigInt(this)
}
const num = 42
console.log(num.toBigInt());//42n
console.log(typeof BigInt);//function