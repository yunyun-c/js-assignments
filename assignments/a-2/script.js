"use strict";

// const dolphinsAverageScore = (96+108+89)/3;
// const koalasAverageScore = (88+91+110)/3;

// const dolphinsAverageScore1 = (97+112+101)/3;
// const koalasAverageScore1 = (109+95+123)/3;

// const dolphinsAverageScore2 = (97+112+101)/3;
// const koalasAverageScore2 = (109+95+106)/3;
// console.log(dolphinsAverageScore2, koalasAverageScore2)

// if(dolphinsAverageScore > koalasAverageScore) {
//     console.log(`Dolphins is the winner! 🐬🏆`);
// } else if(dolphinsAverageScore === koalasAverageScore) {
//     console.log(`It is a tie! 🐬🐨`);
// } else {
//     console.log(`Koalas is the winner! 🐨🏆`);
// }

// if(dolphinsAverageScore1 >= 100 && dolphinsAverageScore1 > koalasAverageScore1) {
//     console.log(`Dolphins is the winner! 🐬🏆`);
// } else if(dolphinsAverageScore1 === koalasAverageScore1) {
//     console.log(`It is a tie! 🐬🐨`);
// } else if(koalasAverageScore1 >= 100 && koalasAverageScore1 > dolphinsAverageScore1) {
//     console.log(`Koalas is the winner! 🐨🏆`);
// } else {
//     console.log(`We might need more time to find out who is the winner!`)
// }

// if(dolphinsAverageScore2 >= 100 && dolphinsAverageScore2 > koalasAverageScore2) {
//     console.log(`Dolphins is the winner! 🐬🏆`);
// } else if(dolphinsAverageScore2 === koalasAverageScore2 && dolphinsAverageScore2 >= 100 && koalasAverageScore2 >= 100) {
//     console.log(`It is a tie! 🐬🐨`);
// } else if(koalasAverageScore2 >= 100 && koalasAverageScore2 > dolphinsAverageScore2) {
//     console.log(`Koalas is the winner! 🐨🏆`);
// } else {
//     console.log(`We might need more time to find out who is the winner!`)
// }

// const calcAverage = (a, b, c) => (a+b+c)/3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(65, 54, 49);

// console.log(scoreDolphins, scoreKoalas);

// const checkWinner = function(avgDolphins, avgKoalas) {
//     if(avgDolphins >= 2 *avgKoalas) {
//         console.log(`🏆 Dolphins win (${avgDolphins} v.s. ${avgKoalas})`);
//     } else if(avgKoalas >= 2 *avgDolphins) {
//         console.log(`🏆 Koalas win (${avgKoalas} v.s. ${avgDolphins}})`);
//     } else {
//         console.log(`No team wins..`)
//     }
// } ;

// checkWinner(scoreDolphins, scoreKoalas);

// scoreDolphins = calcAverage(85, 54, 41);
// scoreKoalas = calcAverage(23, 34, 27);
// console.log(scoreDolphins, scoreKoalas);

// checkWinner(scoreDolphins, scoreKoalas);

// const calcTip = function(bill) {
//     if(bill <= 300 && bill >= 50) {
//         return bill * 0.15;
//     } else {
//         return bill * 0.2;
//     }
// };

// fast way
// const calcTip = function(bill) {
//     return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// // console.log(calcTip(100));

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const total = [bills[0]+tips[0], bills[1]+tips[1], bills[2]+tips[2]];
// console.log(total);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Shcmedtman',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,
//     calcAge: function() {
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },
//     getSummary: function() {
//         return `${this.firstName} is ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a': 'no'} driver's license.`
//     }
// };

// jonas.location = 'Potrugal';
// jonas['twitter'] = '@jonasschmedtan';
// console.log(jonas);

// console.log(`${jonas.firstName} has 3 friends, and his best friend is called ${jonas.friends[0]}.`);
// // better way
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}.`);

// console.log(jonas.getSummary());

// const mark = {
//     fullName: 'Mark Miller',
//     weights: 78,
//     heights: 1.69,
//     calcBMI: function () {
//         this.bmi = this.weights / this.heights**2;
//         return this.bmi;
//     }
// };

// const john = {
//     fullName: 'John Smith',
//     weights: 92,
//     heights: 1.95,
//     calcBMI: function () {
//         this.bmi = this.weights / this.heights**2;
//         return this.bmi;
//     }
// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s BMI (${mark.calcBMI()})!`)

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
// const tips = [];
// const totals = [];

// const calcTip = function (bills) {
//   return bills <= 300 && bills >= 50 ? bills * 0.15 : bills * 0.2;
// };

// console.log(calcTip(bills[0]));

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }

// console.log(tips);
// console.log(totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum / arr.length;
// };

// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
    console.log(max, min);
    return max - min;
  }
};
// calcTempAmplitude([3, 5, 8, 0, 11]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== "number") continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
    console.log(max, min);
    return max - min;
  }
};
// calcTempAmplitude([3, 5, 8, 0, 11]);
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 8, 5]);
console.log(amplitudeNew);
