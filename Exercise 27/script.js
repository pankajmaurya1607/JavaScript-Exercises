// Exporting Classes:

// 12. Write a JavaScript program to create a module that exports a class. Instantiate and use the class in another file.


import { Person } from "./person.js";

const person1 = new Person("Pankaj", 22);

console.log(person1.greet());
console.log(person1.haveBirthday())
console.log(person1.name)
