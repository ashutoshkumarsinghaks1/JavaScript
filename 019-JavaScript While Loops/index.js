//while loop = repeat some code while some condition is true

/*
let username = "";

if (username === "") {
  console.log("You did't enter your name");
} else {
  console.log(first);
}

//You did't enter your name

*/

/*

let username = "";

while (username === "") {
  console.log("You did't enter your name");
}
console.log(`Hello ${username}`);

// ifinite loop

*/

/*
let username = "Brocode";

while (username === "") {
  console.log("You did't enter your name");
}
console.log(`Hello ${username}`);

//Hello Brocode
*/

/*
let username = "";
while (username === "" || username === null) {
  username = window.prompt(`Enter your name`);
}
console.log(`Hello ${username}`);

*/

//********************** */

// do while loop

/*
let username;
do {
  username = window.prompt(`Enter your name`);
} while (username === "" || username === null);

console.log(`Hello ${username}`); 

*/

/*
let username;
while (username === "" || username === null);
{
  username = window.prompt(`Enter your name`);
}
console.log(`Hello ${username}`);

*/

/*
let loggedIn = false;
let username;
let password;

while (!loggedIn) {
  username = window.prompt(`Enter your username`);
  password = window.prompt(`Enter your password`);

  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("You are logged in!");
  } else {
    console.log("Invalid credential! Please try again");
  }
}

*/

//****************************** */

/*
let loggedIn = true;
let username;
let password;

do {
  username = window.prompt(`Enter your username`);
  password = window.prompt(`Enter your password`);

  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("You are logged in!");
  } else {
    console.log("Invalid credential! Please try again");
  }
} while (!loggedIn);

*/

//**************************** */

let loggedIn = true;
let username;
let password;

while (!loggedIn) {
  username = window.prompt(`Enter your username`);
  password = window.prompt(`Enter your password`);

  if (username === "myUsername" && password === "myPassword") {
    loggedIn = true;
    console.log("You are logged in!");
  } else {
    console.log("Invalid credential! Please try again");
  }
}

// since we are loggedIn it will give nothing
