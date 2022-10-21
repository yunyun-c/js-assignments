'use strict';

// let country = "Taiwan";
// let continent = "East and Southeast Asia";
// let population = "23";

// // console.log(country);
// // console.log(continent);
// // console.log(population);

// let isIsland = true;
// let language;

// console.log( typeof isIsland, typeof population, typeof country, typeof language);

// language = "Mandarin";

// console.log(population/2);
// population++;

// let populationFinland = "6";
// let averagePopulation = "33";
// console.log(population >= populationFinland);
// console.log(population <= averagePopulation);

// const description = `${country} is in ${continent}, and its ${population} million
// people speak ${language}.`

// console.log(description);


// Coding Challenge #1

// const markWeights = 78;
// const markHeight = 1.69;
// const johnWeights = 92;
// const johnHeight = 1.95;

// const markWeights = 95;
// const markHeight = 1.88;
// const johnWeights = 85;
// const johnHeight = 1.76;

// const markBMI = markWeights / markHeight ** 2;
// const johnBMI = johnWeights / johnHeight ** 2;
// const markHigherBMI = markBMI > johnBMI;


// console.log(markBMI, johnBMI, markHigherBMI);

// if(markBMI >= johnBMI) {
//     console.log(`Mark,s BMI is higher than John's BMI!`)
// } else {
//     console.log(`John's BMI is higher than Mark's BMI!`)
// }

// if(markBMI >= johnBMI) {
//     console.log(`Mark,s BMI (${markBMI}) is higher than John's BMI (${johnBMI})!`)
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's BMI (${markBMI})!`)
// }

// Challenge #3

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

// const day = "monday";

// if(day === "wednesday" || day === "thursday") {
//     console.log("Write code examples.");
// } else if(day === "firday") {
//     console.log("Record video.")
// }

const bill = 430;
const tip = bill >= 50 && bill <= 300? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value 
${bill + tip}`)