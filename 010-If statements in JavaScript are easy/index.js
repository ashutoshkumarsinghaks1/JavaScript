// IF STATEMENTS = if a condition is true , execute some code
//                 if not , do something else

/*
let age = 25;

if (age >= 18) {
  console.log("You are old enough to enter this site.");
}
else{
    console.log("You must be 18+ to enter this site.")
}
*/

/*

let time = 14;

if (time < 12) {
  console.log("Good morning!");
} else {
  console.log("Good afternoon!");
}

*/

/*
let isStudent = true;
if (isStudent) {
  console.log("You are a student!");
} else {
  console.log("You  are Not a student!");
}
*/

/*
let age = 25;
let hasLicence = true;

if (age >= 16) {
  console.log("You are old enough to drive");

  if (hasLicence) {
    console.log("You have your licence");
  } else {
    console.log("You do not have your liscense yet!");
  }
} else {
  console.log("You must be 16+ to have a license.");
}

*/

/*
let age = 0;
if (age >= 100) {
  console.log("You are too old to enter this site");
} else if (age === 0) {
  console.log("You can't enter. You were just born.");
} else if (age >= 18) {
  console.log("You are old enough to enter this site.");
} else if (age < 0) {
  console.log("You age can't be below zero 0");
} else if (age >= 100) {
  console.log("You are too old to enter this site");
} else {
  console.log("You must be 18+ to enter this site");
}

*/

//************************************* */

const myText = document.getElementById("myText");

const mySubmit = document.getElementById("mySubmit");

const resultElement = document.getElementById("resultElement");

let age;
mySubmit.onclick = function () {
  age = myText.value;
  age = Number(age);
  if (age >= 100) {
    resultElement.textContent = `You are too old to enter this site.`;
  } else if (age === 0) {
    resultElement.textContent = `You can't enter. You were just born.`;
  } else if (age >= 18) {
    resultElement.textContent = `You are old enough to enter this site.`;
  } else if (age < 0) {
    resultElement.textContent = `Your age can't be below zero 0`;
  } else if (age >= 100) {
    resultElement.textContent = `You are too old to enter this site`;
  } else {
    resultElement.textContent = `You must be 18+ to enter this site.`;
  }
};
