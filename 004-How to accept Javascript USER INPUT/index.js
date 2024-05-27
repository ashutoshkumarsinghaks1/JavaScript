//How to a accept user input

//1.EASY WAY = window prompt
//2.PROFESSIONAL WAY = HTML textbox

//1. ESAY WAY
// let username;

// username = window.prompt("What's your username ?");

// console.log(username);

//2.PROFESSIONAL WAY

// let username;
let username;
document.getElementById("mySubmit").onclick = function () {
  username = document.getElementById("myText").value;
  document.getElementById("myH1").textContent = `Hello ${username}`;

  console.log(username);
};
