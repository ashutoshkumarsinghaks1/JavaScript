//  String methods = allow you to manipulate and work with text (strings)

// let userName = "Brocode";

// userName.charAt(0)
// console.log(userName.charAt(0))

// userName.indexOf("o")
// console.log(userName.indexOf("o"))    //2
// console.log(userName.lastIndexOf("o")) //4

// console.log(userName.length); // 7

//trim

// let userName = "Brocode  "
// userName = userName.trim()
// console.log(userName)  //Brocode

// let userName = "Brocode"
// userName = userName.toLocaleUpperCase()
// console.log(userName) //BROCODE

// let userName = "Brocode";
// userName = userName.toLowerCase();
// console.log(userName); // brocode

//let userName = "Brocode";
//userName = userName.repeat(3);
//console.log(userName); //BrocodeBrocodeBrocode

// let userName = " Brocode";
// let result = userName.startsWith(" ");
// console.log(result); //true

// let userName = "Brocode";

// let result = userName.startsWith(" ");

// if (result) {
//   console.log("Your username can't begin with ' '");
// }
// else{
//     console.log(userName)
// }

// let userName = "BroCode ";

// let result = userName.endsWith(" ");

// if (result) {
//   console.log("You username can't ends with ' '");
// } else {
//   console.log(userName);
// }

// let userName = "Bro Code";

// let result = userName.includes(" ");

// if (result) {
//   console.log("Your username  can't include ' ' ");
// }
// else{
//     console.log(userName)
// }

// let phoneNumber = "123-456-789";

// phoneNumber = phoneNumber.replaceAll("-", "")
// console.log(phoneNumber) //123456789

// let phoneNumber = "123-456-789";

// phoneNumber = phoneNumber.replaceAll("-", "/");
// console.log(phoneNumber); //123/456/789

// let phoneNumber = "123-456-789"
// phoneNumber = phoneNumber.padStart(15,"0")

// console.log(phoneNumber) //0000123-456-789

// let phoneNumber = "123-456-789";
// phoneNumber = phoneNumber.padStart(25, "0");

// console.log(phoneNumber);  //00000000000000123-456-789

// let phoneNumber = "123-456-789";
// phoneNumber = phoneNumber.padEnd(15, "0");

// console.log(phoneNumber);  //123-456-7890000
