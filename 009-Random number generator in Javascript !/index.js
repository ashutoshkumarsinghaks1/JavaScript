// RANDOM NUMBER GENERATOR
// generates a random number between  0 and 1
/*
let randomNum = Math.random();

console.log(randomNum);
*/

// let us we need random number between 1 and 6

//let randomNum = Math.random() * 6

// console.log(randomNum)

// if we don't want decimal value we will enclose in within Math.floor()

// 1 and 6
// let randomNum = Math.floor(Math.random()*6) + 1;
// console.log(randomNum)

// 1 and 100
//let randomNum = Math.floor(Math.random() * 100) + 1;
//console.log(randomNum);

// random number between two specefic range
// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min;

// console.log(randomNum)

//*************************************************** */
// Random number generator ( dice roller)
const myButton = document.getElementById("myButton");

const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");

const min = 1;
const max = 6;

let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function () {
  randomNum1 = Math.floor(Math.random() * max) + min;
  randomNum2 = Math.floor(Math.random() * max) + min;
  randomNum3 = Math.floor(Math.random() * max) + min;
  label1.textContent = randomNum1;
  label2.textContent = randomNum2;
  label3.textContent = randomNum3;
};
