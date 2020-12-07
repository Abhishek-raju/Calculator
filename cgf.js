//Number Buttons
let zeroBtn = document.getElementById("calc-zero");
let oneBtn = document.getElementById("calc-one");
let twoBtn = document.getElementById("calc-two");
let threeBtn = document.getElementById("calc-three");
let fourBtn = document.getElementById("calc-four");
let fiveBtn = document.getElementById("calc-five");
let sixBtn = document.getElementById("calc-six");
let sevenBtn = document.getElementById("calc-seven");
let eightBtn = document.getElementById("calc-eight");
let nineBtn = document.getElementById("calc-nine");

//clear,backspace,decimal buttons & display
let clearBtn = document.getElementById("calc-clear");
let backspaceBtn = document.getElementById("calc-backspace");
let displayValElement = document.getElementById("calc-display-val");
let decimalBtn = document.getElementById("calc-decimal");

/*
let oneBtn = document.getElementById("calc-multiply");
let oneBtn = document.getElementById("calc-minus");
let oneBtn = document.getElementById("calc-plus");
let oneBtn = document.getElementById("calc-equals");
*/

let displayVal = "0";
let pendingVal;
let EalStringArray = [];

let calNumBtns = document.getElementsByClassName("calc-btn-num");
let calcOperatorsBtns = document.getElementsByClassName("calc-btn-operator");

//Function to display the typed  numbers
var updateDisplayVal = (clickObj) => {
  let btntxt = clickObj.target.innerText;

  if (displayVal === "0") displayVal = " ";
  displayVal += btntxt;
  displayValElement.innerText = displayVal;
};

for (let i = 0; i < calNumBtns.length; i++) {
  calNumBtns[i].addEventListener("click", updateDisplayVal, false);
}

//
/*
for (let i = 0; i < calcOperatorsBtns; i++) {
  calcOperatorsBtns[i].addEventListener("click", performOperation, false);
}
*/
