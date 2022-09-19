// // CHALLENGE 1

// // test 1
// let markWeight1 = 78;
// let markHeight1 = 1.69;

// let markBmi1 = markWeight1 / (markHeight1 * markHeight1);

// let johnWeight1 = 92;
// let johnHeight1 = 1.95;

// let johnBmi1 = johnWeight1 / (johnHeight1 * johnHeight1);

// let markHigherBMI1 = markBmi1 > johnBmi1;

// // test 2
// let markWeight2 = 95;
// let markHeight2 = 1.88;

// let markBmi2 = markWeight2 / (markHeight2 * markHeight2);

// let johnWeight2 = 85;
// let johnHeight2 = 1.76;

// let johnBmi2 = johnWeight2 / (johnHeight2 * johnHeight2);

// let markHigherBMI2 = markBmi2 > johnBmi2;

// console.log(markBmi1, johnBmi1, markHigherBMI1);
// console.log(markBmi2, johnBmi2, markHigherBMI2);

// // CHALLENGE 2

// if (markBmi1 > johnBmi1) {
//   console.log(`Mark's BMI (${markBmi1}) is higher than John's (${johnBmi1})!`);
// } else {
//   console.log(`John's BMI (${johnBmi1}) is higher than Mark's (${markBmi1})!`);
// }

// // 016
// // type conversion
// const inputYear = "1991";
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// // return NaN
// console.log(Number("Jonas"));
// console.log(typeof NaN);

// // type coercion

// // same things
// console.log("I am " + 23 + " years old");
// console.log("I am " + "23" + " years old");

// // converted to numbers
// console.log("23" - "10" - 3);
// console.log("23" * "2");

// 017
// falsy values: 0, '', undefined, null, NaN

// // 018
// // === - strict equality
// // == - loose quality (conversion of types)

// const favorite = prompt("What's your favorite number?");
// console.log(favorite); // string

// if (favorite == 23) {
//   console.log("Cool! 23 is an amazing number");
// }

// // CHALLENGE 3
// const dolphins = (97 + 112 + 101) / 3;
// const koalas = (109 + 95 + 106) / 3;

// console.log(`dolphins score: ${dolphins}`);
// console.log(`koalas score: ${koalas}`);

// if (dolphins === koalas && dolphins >= 100) {
//   console.log("DRAW");
// } else if (dolphins > koalas && dolphins >= 100) {
//   console.log("DOLPHINS WIN");
// } else if (koalas > dolphins && koalas >= 100) {
//   console.log("KOALAS WIN");
// } else {
//   console.log("No winner");
// }

// // 021 switch statement

// const day = "saturday";

// switch (day) {
//   case "monday":
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break;
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("WEEKEND");
//     break;
//   default:
//     console.log("not valid");
// }

// // 023 conditiona operator
// // question ? true : false
// const age = 17;
// const drink = age >= 18 ? "wine" : "water";
// console.log(drink);

// console.log(`I like to dring ${drink}`);

// CHALLENGE 4

const bill1 = 275;
const bill2 = 40;
const bill3 = 430;

const tip1 = bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
const tip2 = bill2 >= 50 && bill2 <= 300 ? bill2 * 0.15 : bill2 * 0.2;
const tip3 = bill3 >= 50 && bill3 <= 300 ? bill3 * 0.15 : bill3 * 0.2;

console.log(
  `“The bill was ${bill1}, the tip was ${tip1}, and the total value ${
    bill1 + tip1
  }`
);
console.log(
  `“The bill was ${bill2}, the tip was ${tip2}, and the total value ${
    bill2 + tip2
  }`
);
console.log(
  `“The bill was ${bill3}, the tip was ${tip3}, and the total value ${
    bill3 + tip3
  }`
);
