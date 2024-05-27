// string slicing = creating a substring
//                  from a  portion  of another string

//                  string.slice(start , end)

// const fullName = "Bro Code";

// let fisrtName = fullName.slice(0, 2);
// console.log(fisrtName); // Br

// let lastname = fullName.slice(4, 8);
// console.log(lastname); //Code

// let firstChar = fullName.slice(0, 1);

// console.log(firstChar); // B

// let lastChar = fullName.slice(-1);
// console.log(lastChar); //e

// const fullName = "Broshep Code";
// let fisrtName = fullName.slice(0, fullName.indexOf(" "));
// console.log(fisrtName); //Broshep

// let lastname = fullName.slice(fullName.indexOf(" ") + 1);
// console.log(lastname); //Code

//****************  EXERCISE*********************************** */

const email = "Bro1@gmail.com";

let username = email.slice(0, email.indexOf("@"));
console.log(username); // Bro1

let extension = email.slice(email.indexOf("@") + 1);
console.log(extension); //gmail.com
