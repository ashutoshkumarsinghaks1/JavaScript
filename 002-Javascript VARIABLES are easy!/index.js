// variable = A container that stores a value. Behaves as if it were the value it conatins

//1. declaration let x;
//2. assignment  x = 100;

//let x;
// let x; syntax error
// let y;  this will work , you can't have two variable with same name using let

// let x;
// x = 123;
// console.log(x);

//let x = 123;
//console.log(x);

// let age = 25;
// let price = 10.99;
// let gpa = 2.1;

// console.log(age);
// console.log(price);
// console.log(gpa);

// console.log(typeof age)
// console.log(typeof price)
// console.log(typeof gpa)
// console.log(`You are ${age} years old`);
// console.log(`The price is ${price}`);
// console.log(`Your gpa is:${gpa}`)

//Strings
// String is a series of characters.\

// let firstName = "Bro";
// let favouriteFood = "pizza";
// let email = "Bro123@gmail.com"

// console.log(typeof firstName);
// console.log(`Your name is ${firstName}`);
// console.log(`You like ${favouriteFood}`);
// console.log(`Your email is: ${email}`)

//booleans
// booleans are either true or false

// let online = true;

// console.log(typeof online);
// console.log(`Bro is online: ${online}`);

// let forSale = true;
// console.log(`Is this car for sale: ${forSale}`);

// let isStudent = true;
// console.log(`Enrolled: ${isStudent}`)

let fullName = "Bro Code";
let age = 25;
let isStudent = true;

document.getElementById("p1").textContent = ` Your name is ${fullName}`;
document.getElementById("p2").textContent = `You are ${age} years old.`

document.getElementById("p3").textContent = `Enrolled: ${isStudent}`
