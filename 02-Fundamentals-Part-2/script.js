"use strict";

// 002
let hasDriversLicense = false;
const passTest = true;

// if (passTest) hasDriversLicense = true;

// if (hasDriversLicense) console.log("I can drive");

// const interface = "audio";
// const private = 534;

// 003 FUNCTIONS

// function logger() {
//   console.log("My name is Daniel");
// }

// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   console.log(apples, oranges);
//   const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//   return juice;
// }

// console.log(fruitProcessor(5, 6));

// 003-004

// Function declaration (can be called before declaration)
// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

// const age1 = calcAge1(1991);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2022 - birthYear;
// };

// const age2 = calcAge2(1991);

// // Arrow function
// const calcAge3 = (birthYear) => 2022 - birthYear;
// const age3 = calcAge3(1991);

// console.log(age1, age2, age3);

// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2022 - birthYear;
//   const retirement = 65 - age;
//   return `${firstName} retires in ${retirement} years`;
// };

// console.log(yearsUntilRetirement(2002, "Daniel"));

// 008 CODING CHALLENGE 1

// const calcAverage = (score1, score2, score3) => {
//   return (score1 + score2 + score3) / 3;
// };

// const avgDolphins = calcAverage(85, 54, 41);
// const avgKoalas = calcAverage(23, 34, 27);

// function checkwinner(avgDolphins, avgKoalas) {
//   if (avgDolphins >= avgKoalas * 2)
//     return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
//   else if (avgKoalas >= avgDolphins * 2)
//     return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
//   else return "No winner";
// }

// console.log(checkwinner(avgDolphins, avgKoalas));

// 009 ARRAYS

// const friends = ["Michael", "Steven", "Peter"];
// console.log(friends);

// const years = new Array(1991, 1984, 2008, 2022);

// console.log(friends[0]);

// console.log(friends.length);

// function calcAge1(birthYear) {
//   return 2022 - birthYear;
// }

// 010 ARRAY OPERATIONS

// const friends = ["Michael", "Steven", "Peter"];

// // add elements
// const newLength = friends.push("Jay"); // return length
// console.log(friends);
// console.log(newLength);

// friends.unshift("John");
// console.log(friends);

// // remove elements
// friends.pop();
// console.log(friends);

// friends.shift();
// console.log(friends);

// console.log(friends.indexOf("Steven"));

// console.log(friends.includes("Steven"));

// // 011 CODING CHALLENGE

// function calcTip(bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// // 012-014 OBJECTS

// const daniil = {
//   firstName: "Daniil",
//   lastName: "Levitsky",
//   birthYear: 2002,
//   job: "teacher",
//   friends: ["Michael", "Peter", "Steven"],
//   hasDriversLicense: true,

//   // calcAge: function () {
//   //   return 2022 - this.birthYear;
//   // },

//   calcAge: function () {
//     this.age = 2022 - this.birthYear;
//     return this.age;
//   },
// };

// console.log(daniil);

// console.log(daniil.lastName);
// console.log(daniil["lastName"]);

// const nameKey = "Name";
// console.log(daniil["first" + nameKey]);
// console.log(daniil["last" + nameKey]);

// console.log(daniil.age);

// // 015 CHALLENGE #3

// const mark = {
//   name: "Mark Miller",
//   mass: 78,
//   height: 1.69,
//   calcBMI: function () {
//     this.bmi = mass / height ** 2;
//   },
// };

// const john = {
//   name: "John Smith",
//   mass: 92,
//   height: 1.95,
//   calcBMI: function () {
//     this.bmi = mass / height ** 2;
//   },
// };

// console.log(
//   `${mark.bmi > john.bmi ? "Mark" : "John"}'s BMI is higher than ${
//     mark.bmi > john.bmi ? "John" : "Mark"
//   }'s`
// );

// //  016-017 for loop

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

// const daniil = [
//   "Daniil",
//   "Levitsky",
//   2002,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// console.log(daniil);
// for (let i = 0; i < daniil.length; i++) {
//   console.log(daniil[i], typeof daniil[i]);
// }

// daniil.forEach((element) => {
//   console.log(element);
// });

// console.log("---- ONLY STRINGS ----");
// for (let i = 0; i < daniil.length; i++) {
//   if (typeof daniil[i] !== "string") continue;

//   console.log(daniil[i], typeof daniil[i]);
// }

// // 018 looping backward

// const daniil = [
//   "Daniil",
//   "Levitsky",
//   2002,
//   "teacher",
//   ["Michael", "Peter", "Steven"],
// ];

// for (let i = daniil.length - 1; i >= 0; i--) {
//   console.log(i, daniil[i]);
// }

// 019 while loop

for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`);
}

let rep = 1;
while (rep <= 10) {
  console.log(`Lifting weights repetition ${rep}`);
  rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

do {
  dice = Math.trunc(Math.random() * 6) + 1;
  console.log(`You rolled a ${dice}`);
  if (dice === 6) console.log(`Loop is about to end`);
} while (dice !== 6);
