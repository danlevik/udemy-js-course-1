'use strict';

// let arr = [7, 5, 4, 6, 3, 2, 1];
// let i = 5;
// let c = 0;
// let j;
// for (let k = 0; k < 100; k++) {
//   j = arr[i];
//   arr[i] = i;
//   i = j;
//   c = c + i;
// }
// console.log(c);

// let x = [2, 7, 6, 1, 9, 5, 8, 3, 4, 0];
// let k = 0;
// for (let i = 1; i <= 10; i++) {
//   if (x[i] % 2 == 1) {
//     k += 1;
//   }
// }
// console.log(k);

// let x = [131, 42, 99, 54987529, 13131, 111111, 54, 76, 454, 333];

// let k = x[1];

// for (let i = 2; i < 10; i++) {
//   if (x[i] < k) {
//     k = x[i];
//   }
// }

// console.log(k);

// 5 4 6

// let k = 12;
// let m = 16;
// let p = 4;
// let z;

// if (k < m && p < k) {
//   z = k / p;
// } else {
//   z = m / p;
// }
// console.log(z);

// let a1 = 2;
// let b1 = 7;
// let a2 = 6;
// let b2 = 8;
// let b3;
// let a3;
// if (b1 + b2 >= 10) {
//   b3 = b1 + b2 - 10;
//   a3 = a1 + a2 + 1;
// } else {
//   b3 = b1 + b2;
//   a3 = a1 + a2;
// }
// console.log(a3, b3);

// let a = 1819;
// let b = 18 * 10 + 9;
// a = (10 * b - a) % 100;
// console.log(a, b);

// let n = 31;
// let xs = 31;
// let x = 0;
// let y;
// while (Math.abs(x - xs) > 0.00000001) {
//   xs = x;
//   y = 0.57 / n;
//   x = (5.4 * Math.sin(y)) / (9 * (1 + y) * (4 - (1 + y) * (1 + y)) - 27);
//   n = n + 0.7;
// }
// console.log(x);

let a = [3, 3, 1, 1, 1];
let b = [3, 4, 3, 2, 1];
let k = 2333;

let j = 1;
let i = 0;
for (let zz = 0; zz < k; zz++) {
  j = 1;
  i = 0;
  while (j == 1 && i < 6) {
    i = i + 1;
    a[i] = a[i] + 1;
    if (a[i] <= b[i]) {
      j = 0;
    } else {
      a[i] = 0;
    }
  }
}

console.log(a);

// 014 Challenge 2

// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';
//   document.body.addEventListener('click', function () {
//     header.style.color = 'blue';
//   });
// })();

// // 013 More closures examples

// // Example 1
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   };
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   };
// };

// g();
// f(); // 46

// // Re-assigning f function
// h();
// f(); // 1554

// // Example 2
// const boardPassengers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout(function () {
//     console.log(`We are now boarding all ${n} passengers`);
//     console.log(`There are 3 groups, each with ${perGroup} passengers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
// };

// boardPassengers(180, 3);

// // 012 Closures - Замыкания

// const secureBooking = function () {
//   let passengerCount = 0;

//   return function () {
//     passengerCount++;
//     console.log(`${passengerCount} passengers`);
//   };
// };

// // функция смогла обновить переменную в функции secureBooking не смотря на то, что она завершила выполнение
// // Любая функция имеет доступ к контексту выполнения, в котором она была создана, даже если этого контекста больше не существует. Окружение переменных продолжает храниться вместе с созданной функцией
// // Замыкание имеет больший приоритет перед цепочкой ссылок
// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);

// // 011 immediately invoked function expressions

// // const runOnce = function() {
// //   console.log('This will never run again');
// // }
// // runOnce();

// // функция вызывается только один раз
// (function () {
//   console.log('This will never run again');
// })();

// (() => console.log('This will ALSO never run again'))();

// // Это нужно чтобы инкапсулировать данные, но сейчас это реже используется, так как появились const и let для ограничения области видимости

// {
//   const isPrivate = 23;
//   var notPrivate = 46;
// }
// console.log(notPrivate);

/*
// 010 Coding Challenge #1

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const option = Number(
      prompt(`${this.question}\n${this.options.join('\n')}`)
    );
    if (typeof option === 'number' && option >= 0 && option <= 3) {
      this.answers[option] += 1;
    }

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));

// bonus
poll.displayResults.call({ answers: [5, 2, 3] });
poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
*/

/*
// 008-009 the call and apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// функция book теперь не будет работать, так как она не является частью объекта lufthansa. Нужно сказать js'у, к какому объекту обратиться
// book(23, 'Sarah Williams');

// с помощью call мы можем вручную установить значение ключевого слова this
// При этом в объекте должны быть те же свойства чтобы функция работала
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

// Apply method
// Похоже на call, но требует массив, в котором находятся аргументы.
// Метод устаревший
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);

book.call(swiss, ...flightData);

// 009 The bind method
// Создает новую функцию, в которой this является указанным аргументом
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(48, 'Steven Williams');

// В bind также можно создать функции с заранее установленными значениями (и не обязательно всеми)
// partial application - часть значений функции заранее задана
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// With event listeners
lufthansa.planes = 300;

lufthansa.buyPlane = function () {
  console.log(this);
  this.planes++;
  console.log(this.planes);
};

// lufthansa.buyPlane();

// this указывает на кнопку buy так как функция вызывается EventListener'ом
// в такой ситуации надо вручную указать что this это lufthansa
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

// this не используется, поэтому указываем null
const addVAT = addTax.bind(null, 0.23);
// addTax = (rate, value) => value + value * 0.23;
console.log(addVAT(100));
console.log(addVAT(23));

// То же самое с помощью функции возвращающей функцию CHALLENGE
const addTaxF = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVATF = addTaxF(0.23);
console.log(addVATF(100));
console.log(addVATF(23));
*/

/*
// 007 Functions returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('Jonas');

const h = 'Hey';
const j = 'Jonas';

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greetArr('Hello')('Jonas');
*/

/*
// 006 function accepting callback functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
console.log();
transformer('JavaScript is the best!', oneWord);

// JS uses callbacks all the time
const high5 = function () {
  console.log('hi');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);
*/

/*
// 004 values and references
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 243252525,
};

// flightNum не влияет на исходную переменную, является просто его копией;
// passenger это ссылка на объект, поэтому при изменении внутри функции меняется сам объект
const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 243252525) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000000);
};

newPassport(jonas);
checkIn(flight, jonas);
// в javascript есть только передача параметра по значению (объекты сами по себе являются ссылками, поэтому при их передаче мы передаем значение)
*/

/*
// 003 Default parameters

const bookings = [];

// Можно определять значение параметров на основе предыдущих параметров
const createBooking = function (
  flightNum = 'default',
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // before ES6
  // numPassengers = numPassengers || 1;
  // price = price || 1;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 888);
createBooking('LH123', 5);

// Нельзя пропускать параметры, для этого надо ставить undefined
createBooking('LH123', undefined, 1000);
*/
