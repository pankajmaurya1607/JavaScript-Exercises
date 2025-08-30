// Exporting a class

export class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        return `Hello, my name is ${this.name} and I am ${this.age} year old.`
    }

    haveBirthday() {
        this.age++;
        return `Happy Birthday ${this.name}! You are now ${this.age}.`
    }
}