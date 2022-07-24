/**
 * Output by Creating Object
 */
// class Person {
//   name = "Miraz";
//   age = 29;
//   showBio() {
//     return this.name + "-" + this.age;
//   }
// }
// const person = new Person();
// console.log(person);
// console.log(person.name);
// console.log(person.showBio());

/**
 * Output by Creating Dynamic Object
 */
// class Student {
//   constructor(mName, mAge) {
//     this.name = mName;
//     this.age = mAge;
//   }
//   showBio() {
//     return this.name + "-" + this.age;
//   }
// }
// const person = new Student("Vai", 25);
// console.log(person);
// console.log(person.age);

/**
 * Inheritance
 * super helps to call parents methods
 */
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  showInfo() {
    return this.name + "-" + this.type;
  }
}
class Cat extends Animal {
  constructor(name, type, color) {
    super(name, type);
    this.color = color;
  }
  show() {
    return super.showInfo() + "-" + this.color;
  }
}
const animal = new Cat("Meow", "carnivorous", "White");
console.log(animal.show());
console.log(animal.showInfo());
