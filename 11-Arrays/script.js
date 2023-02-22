'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
      <div class="movements__value">${mov} EUR</div>
    </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = `${acc.balance} EUR`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes} EUR`;

  const outcomes =
    acc.movements.filter(mov => mov < 0).reduce((acc, mov) => acc + mov, 0) *
    -1;
  labelSumOut.textContent = `${outcomes} EUR`;

  // 1.2% interest only if interest >= 1 EUR
  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => deposit * acc.interestRate)
    .filter(intr => intr >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest} EUR`;
};

const createUsernames = function (accounts) {
  accounts.forEach(function (account) {
    account.username = account.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);

  // display balance
  calcDisplayBalance(acc);

  // display salary
  calcDisplaySummary(acc);
};

// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // display ui and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);

    console.log('LOGIN');
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const recieverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    recieverAcc &&
    currentAccount.balance >= amount &&
    recieverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    recieverAcc.movements.push(amount);

    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Number(inputLoanAmount.value);

  // есть депозит, который составляет хотя бы 10% от запрашиваемого кредита
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    currentAccount.movements.push(amount);

    // updateui
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('Delete');

  if (
    currentAccount.username == inputCloseUsername.value &&
    currentAccount.pin == inputClosePin.value
  ) {
    accounts.splice(
      accounts.findIndex(acc => acc.username === currentAccount.username),
      1
    );

    // hide ui
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  sorted = !sorted;
  displayMovements(currentAccount.movements, sorted);
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// /////////////////////////////////////////////////

// let arr = ['a', 'b', 'c', 'd', 'e'];

// // Slice Получить новый массив, состроящий из выделенной части исходного
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1, -2));
// console.log(arr.slice());
// console.log([...arr]);

// // Splice то же самое, но изменяет исходный массив вместо создания нового
// // первый параметр - начальный индекс, второй параметр - количество элементов для удаления
// // console.log(arr.splice(2));
// arr.splice(-1);
// arr.splice(1, 2);
// console.log(arr);

// // Reverse
// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // Concat - объединение двух массивов
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // Join - преобразовать массив в строку
// console.log(letters.join(' - '));

// // 004 at method
// const arr = [23, 11, 64];
// console.log(arr[0]);
// console.log(arr.at(0));

// // с помощью этого метода можно писать отрицательные индексы
// console.log(arr[arr.length - 1]);
// console.log(arr.slice(-1)[0]);
// console.log(arr.at(-10));

// console.log('jonas'.at(-1));

// // 005 forEach
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// for (const [i, movement] of movements.entries()) {
//   if (movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`);
//   }
// }

// // 1 - элемент, 2 - индекс элемента, 3 - весь массив
// // forEach нельзя прервать с помощью break
// console.log('---- FOREACH ----');
// movements.forEach(function (mov, i, arr) {
//   if (mov > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${mov}`);
//   } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`);
//   }
// });

// // 009 CHALLENGE 1

// const checkDogs = function (dogsJulia, dogsKate) {
//   const dogsJuliaWithoutCats = dogsJulia.slice(1, -2);
//   console.log(dogsJuliaWithoutCats);

//   const allDogs = dogsJuliaWithoutCats.concat(dogsKate);

//   allDogs.forEach(function (dog, i) {
//     console.log(
//       `Dog number ${i + 1} is ${
//         dog >= 3 ? `is an adult and ${dog} years old` : 'is still a puppy'
//       }`
//     );
//   });
// };

// checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// console.log();
// checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// 010 Data transformations: map, filter, reduce
// map - создание нового массива на основе исходного с применением операции
// filter - создание нового массива, состоящего из элементов, удовлетворяющих условию
// reduce - преобразует массив к одному значению

// // 011 the map method
// const eurToUsd = 1.1;

// // const movementsUSD = movements.map(mov => mov * eurToUsd);

// const movementsUSD = movements.map(mov => mov * eurToUsd);

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for (const mov of movements) movementsUSDfor.push(mov * eurToUsd);
// console.log(movementsUSDfor);

// const movementsDescription = movements.map((mov, i) => {
//   if (mov > 0) {
//     return `Movement ${i + 1}: You deposited ${mov}`;
//   } else {
//     return `Movement ${i + 1}: You withdrew ${Math.abs(mov)}`;
//   }
// });

// console.log(movementsDescription);

// // 013 filter

// const deposits = movements.filter(function(mov) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositsFor = [];
// for (const mov of movements) if (mov > 0) depositsFor.push(mov);
// console.log(depositsFor);

// const withdrawals = movements.filter(function(mov) {
//   return mov < 0;
// }).map(mov => mov * -1);
// console.log(withdrawals);

// console.log(movements);

// // accumulator -> snowball
// const balance = movements.reduce((acc, cur) =>
//   acc + cur, 0);

// console.log(balance);

// let balance2 = 0;
// for (const mov of movements) balance2 += mov;
// console.log(balance2);

// // max value
// const max = movements.reduce((acc, mov) => mov > acc ? mov : acc, movements[0]);
// console.log(max);

// Challenge 2

// function calcAverageHumanAge(ages) {
//   const humanAges = ages.map(dogAge =>
//     dogAge <= 2 ? 2 * dogAge : dogAge * 4 + 16
//   );
//   console.log(humanAges);

//   const filteredDogs = humanAges.filter(age => age >= 18);
//   console.log(filteredDogs);

//   const average =
//     filteredDogs.reduce((acc, age) => acc + age, 0) / filteredDogs.length;

//   console.log(average);
// }

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// // 016
// const eurToUsd = 1.1;

// // pipeline
// const totalDepositsUSD = movements
//   .filter(mov => mov > 0)
//   .map((mov, i, arr) => {
//     // console.log(arr);
//     return mov * eurToUsd;
//   })
//   // .map(mov => mov * eurToUsd)
//   .reduce((acc, mov) => acc + mov, 0);

// console.log(totalDepositsUSD);

// // challenge 3
// function calcAverageHumanAge(ages) {
//   const average =
//     ages
//       .map(dogAge => (dogAge <= 2 ? 2 * dogAge : dogAge * 4 + 16))
//       .filter(age => age >= 18)
//       .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
//   console.log(average);
// }

// calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

// // 18 find - первое значение под условие

// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(firstWithdrawal);

// console.log(accounts);
// const account = accounts.find(acc => acc.owner === 'Jessica Davis');
// console.log(account);

// 19 implementing login

// // 22 some and every
// console.log(movements);

// // equality
// console.log(movements.includes(-130));

// // some: condition
// const anyDeposits = movements.some(mov => mov > 3000);
// console.log(anyDeposits);

// // every: condition
// const everyDeposits = account4.movements.every(mov => mov > 0);
// console.log(everyDeposits);

// // 23 flat and flatmap (es2019)

// // поднимает самые вложенные значения на уровень/n уровней вверх вверх
// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// const overalBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

// const overalBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance2);

// // 024 sorting

// // strings
// const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
// console.log(owners.sort());
// console.log(owners);

// // numbers
// console.log(movements);

// // return < 0, a, b (keep order)
// // return > 0, b, a (switch order)

// // ascending
// console.log(
//   movements.sort((a, b) => {
//     // if (a > b) return 1;
//     // if (b > a) return -1;
//     a - b;
//   })
// );

// // descending
// console.log(
//   movements.sort((a, b) => {
//     // if (a > b) return -1;
//     // if (b > a) return 1;
//     b - a;
//   })
// );

// // 025 creating and filling arrays

// // creating empty array
// const x = new Array(7);
// console.log(x);

// // x.fill(1);

// x.fill(1, 3, 5);
// console.log(x);

// const arr = [1, 2, 3, 4, 5, 6, 7];
// arr.fill(23, 4, 6);
// console.log(arr);

// // Array.from
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// // 1 - cur element, 2 - index, 3 - array copy
// const z = Array.from({ length: 7 }, (_, i) => i + 1);
// console.log(z);

// const randomDice = Array.from(
//   { length: 100 },
//   () => Math.floor(Math.random() * 6) + 1
// );
// console.log(randomDice);

// labelBalance.addEventListener('click', function () {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements__value'),
//     el => Number(el.textContent.replace(' EUR', ''))
//   );
//   console.log(movementsUI);

//   const movementsUI2 = [...document.querySelectorAll('.movements__value')];
// });

// // 027 array methods practice

// const bankDepositSum = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((sum, cur) => sum + cur, 0);
// console.log(bankDepositSum);

// const numDeposits1000 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((count, cur) => (cur >= 1000 ? ++count : count + 0), 0);

// console.log(numDeposits1000);

// let a = 10;
// // return new value
// console.log(++a);
// // return old value
// console.log(a++);

// const { deposits, withdrawals } = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sums, cur) => {
//       // cur > 0 ? (sums.deposits += cur) : (sums.withdrawals -= cur);
//       sums[cur > 0 ? 'deposits' : 'withdrawals'] += cur;
//       return sums;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );

// console.log(deposits, withdrawals);

// const convertTitleCase = function (title) {
//   const capitalize = str => str[0].toUpperCase() + str.slice(1);

//   const exceptions = ['a', 'an', 'and', 'the', 'but', 'or', 'on', 'in', 'with'];

//   const titleCase = title
//     .toLowerCase()
//     .split(' ')
//     .map(word => (exceptions.includes(word) ? word : capitalize(word)))
//     .join(' ');

//   return capitalize(titleCase);
// };
// console.log(convertTitleCase('this is a nice title'));
// console.log(convertTitleCase('this is a LONG title but not too long'));
// console.log(convertTitleCase('and here is another title with an EXAMPLE'));

// 028 challenge
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

// 1
dogs.map(dog => (dog.recPortion = dog.weight ** 0.75 * 28));
console.log(dogs);

// 2
const isMuch = function (dog) {
  if (dog.curFood > dog.recPortion) {
    dog.regulation = 'toomuch';
  }
  if (dog.curFood < dog.recPortion) {
    dog.regulation = 'toolittle';
  }
  if (dog.recPortion == dog.curFood) {
    dog.regulation = 'okay';
  }
  return;
};

const sarahDog = dogs.find(dog => dog.owners.includes('Sarah'));
isMuch(sarahDog);

dogs.map(dog => isMuch(dog));
console.log(dogs);

const ownersEatTooMuch = dogs
  .filter(dog => dog.regulation === 'toomuch')
  .flatMap(dog => dog.owners);
const ownersEatTooLittle = dogs
  .filter(dog => dog.regulation === 'toolittle')
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);
console.log(ownersEatTooMuch);

console.log(dogs.some(dog => dog.regulation === 'okay'));

const checkEatingOkay = dog =>
  dog.recPortion * 0.9 < dog.curFood && dog.curFood < dog.recPortion * 1.1;

console.log(dogs.some(checkEatingOkay));

console.log(dogs.filter(checkEatingOkay));

const dogsCopy = dogs.slice().sort((a, b) => a.recPortion - b.recPortion);
console.log(dogsCopy);
