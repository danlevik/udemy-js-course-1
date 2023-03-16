'use strict';

// // 005
// const Person = function (firstName, birthYear) {
//   // Instance properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   // //   Bad practice
//   // this.calcAge = function () {
//   //   console.log(2023 - this.birthYear);
//   // };
// };

// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// // 1. New {} is created
// // 2. function is called, this = {}
// // 3. {} linked to prototype
// // 4. function automatically return {}

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 2000);
// console.log(matilda, jack);

// const jay = 'Jay';

// console.log(jonas instanceof Person);
// console.log(jay instanceof Person);

// console.log(Person.prototype);

// // 006 Prototypes
// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// console.log(jonas.__proto__ === Person.prototype);
// console.log(Person.prototype.isPrototypeOf(jonas));
// // false
// console.log(Person.prototype.isPrototypeOf(Person));

// // Не содержится внутри самого Person
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas.species, matilda.species);

// console.log(jonas.hasOwnProperty('firstName'));
// console.log(jonas.hasOwnProperty('species'));

// // 008 prototype inheritance
// console.log(jonas.__proto__);
// // Object.prototype (top of prototype chain)
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__);

// console.log(Person.prototype.constructor);

// const arr = [3, 6, 5, 3, 4, 5, 8, 9, 1]; // new Array === []
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype);

// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };

// console.log(arr.unique());

// const h1 = document.querySelector('h1');

// // 009 Coding challenge 1

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`Скорость ${this.make} увеличена до ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`Скорость ${this.make} уменьшена до ${this.speed}`);
// };

// const car1 = new Car('BMW', 120);
// const car2 = new Car('Mercedez', 95);

// car1.accelerate();
// car1.accelerate();
// car1.brake();
// car1.accelerate();

// car2.accelerate();
// car2.accelerate();
// car2.brake();
// car2.accelerate();

// *************************
// *************************
// *************************

// // 010 ES6 Classes

// // class expression
// // const PersonCl = class {};

// // class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

//   // Методы добавляются в прототип
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hello ${this.fullName}`);
//   }

//   get age() {
//     return 2022 - this.birthYear;
//   }

//   // Задать свойство, которое уже существует
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hello there');
//     console.log(this);
//   }
// }

// const jessica = new PersonCl('Jessica Davis', 1996);
// console.log(jessica.fullName);

// jessica.calcAge();
// console.log(jessica.age);
// console.log(jessica.__proto__ === PersonCl.prototype);
// jessica.greet();

// // 1. Классы можно использовать только после объявления в коде
// // 2. Классы можно передавать в функции и возвращать
// // 3. Классы обрабатываются в strict mode

// // 011 Getters Setters
// const account = {
//   owner: 'jonas',
//   movement: [200, 530, 120, 300],

//   get latest() {
//     return this.movement.slice(-1).pop();
//   },

//   // Только 1 параметр
//   set latest(mov) {
//     this.movement.push(mov);
//   },
// };

// // Считывается как свойство
// console.log(account.latest); // get
// account.latest = 50; // set

// // 012 static methods ???
// PersonCl.hey();

// // 013 Object.create
// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2002;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Sarah', 1979);
// sarah.calcAge();

// // 014 Coding challenge 2

// // const Car = function (make, speed) {
// //   this.make = make;
// //   this.speed = speed;
// // };

// // Car.prototype.accelerate = function () {
// //   this.speed += 10;
// //   console.log(`Скорость ${this.make} увеличена до ${this.speed}`);
// // };

// // Car.prototype.brake = function () {
// //   this.speed -= 5;
// //   console.log(`Скорость ${this.make} уменьшена до ${this.speed}`);
// // };

// class Car2 {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`Скорость ${this.make} увеличена до ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`Скорость ${this.make} уменьшена до ${this.speed} km/h`);
//   }

//   get speedUS() {
//     return this.speed / 1.6;
//   }

//   set speedUS(value) {
//     this.speed = value * 1.6;
//   }
// }

// const mercedez = new Car2('car', '30');
// mercedez.brake();
// console.log(mercedez.speedUS);
// mercedez.brake();
// console.log(mercedez.speedUS);
// mercedez.accelerate();
// console.log(mercedez.speedUS);
// mercedez.speedUS = 100;
// console.log(mercedez.speed);
// console.log(mercedez.speedUS);

// *************************
// *************************
// *************************

// // 015 inheritance between classes (constructor function)
// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;
// };

// Person.prototype.calcAge = function () {
//   console.log(2023 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
// };

// // Linking prototypes
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// // Иначе constructor будет Person
// Student.prototype.constructor = Student;
// console.dir(Student.prototype.constructor);

// // 016 Challenge 3

// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`Скорость ${this.make} увеличена до ${this.speed}`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`Скорость ${this.make} уменьшена до ${this.speed}`);
// };

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge -= 1;
//   console.log(
//     `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
//   );
// };

// const car1 = new EV('tesla', 100, 30);
// car1.accelerate();
// car1.brake();
// car1.chargeBattery(90);
// car1.accelerate();

// *************************
// *************************
// *************************

// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }

// Методы добавляются в прототип
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hello ${this.fullName}`);
//   }

//   get age() {
//     return 2022 - this.birthYear;
//   }

//   // Задать свойство, которое уже существует
//   set fullName(name) {
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} is not a full name`);
//   }

//   get fullName() {
//     return this._fullName;
//   }

//   // Static method
//   static hey() {
//     console.log('Hello there');
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     super(fullName, birthYear);
//     this.course = course;
//   }

//   introduce() {
//     console.log(`My name is ${this.fullName} an I study ${this.course}`);
//   }

//   calcAge() {
//     console.log(
//       `I'm ${2022 - this.birthYear} years old, but I feel ${
//         2022 - this.birthYear + 10
//       }`
//     );
//   }
// }

// const martha = new StudentCl('Martha Jones', 2012, 'Computer Science');
// martha.introduce();
// martha.calcAge();

// const PersonProto = {
//   calcAge() {
//     console.log(2022 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const StudentProto = Object.create(PersonProto);
// StudentProto.init = function (firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.course = course;
// };

// StudentProto.introduce = function () {
//   console.log(`My name is ${this.firstName} an I study ${this.course}`);
// };

// const jay = Object.create(StudentProto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// 019-021
// public fields
// private fields
// public methods
// private methods
// +static versions

class Account {
  // public fields (instances)
  locale = navigator.language;

  // private fields (instances)
  #movements = [];
  #pin;

  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    // protected property
    // this._movements = [];
    // this.locale = navigator.language;

    console.log(`Thanks for opening an account, ${owner}`);
  }

  // public methods
  getMovements() {
    return this.#movements;
  }

  deposit(val) {
    this.#movements.push(val);
    return this;
  }

  withdraw(val) {
    this.deposit(-val);
    return this;
  }

  requestLoan(val) {
    if (this._approveLoan(val)) {
      this.deposit(val);
      console.log(`Loan approwed`);
    }
    return this;
  }

  // private methods
  // #approveLoan(val) {
  _approveLoan(val) {
    return true;
  }
}

const acc1 = new Account('Jonas', 'EUR', 1111, []);

acc1.deposit(250);
acc1.withdraw(140);
acc1.requestLoan(1000);
console.log(acc1.getMovements());

console.log(acc1);

// console.log(acc1.#movements);

// 022 Chaining methods
// 'return this' to make methods chainable
acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
console.log(acc1.getMovements);

// 024 Coding challenge 4
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    console.log(`Скорость ${this.make} увеличена до ${this.speed} km/h`);
  }

  brake() {
    this.speed -= 5;
    console.log(`Скорость ${this.make} уменьшена до ${this.speed} km/h`);
    return this;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(value) {
    this.speed = value * 1.6;
  }
}

class EVCl extends CarCl {
  #charge;

  constructor(make, speed, charge) {
    super(make, speed);
    this.#charge = charge;
  }

  chargeBattery(chargeTo) {
    this.#charge = chargeTo;
    return this;
  }

  accelerate() {
    this.speed += 20;
    this.#charge -= 1;
    console.log(
      `${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`
    );
    return this;
  }
}

const cr1 = new EVCl('abba', 120, 23);
cr1.accelerate().chargeBattery(50).brake().accelerate();
