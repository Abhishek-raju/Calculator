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
let evalStringArray = [];

let calNumBtns = document.getElementsByClassName("calc-btn-num");
let calcOperatorsBtns = document.getElementsByClassName("calc-btn-operator");

//Function to display the typed  numbers

let updateDisplayVal = (clickVV) => {
  let btntxt = clickVV.target.innerText;

  if (displayVal === "0") displayVal = " ";
  displayVal += btntxt;
  displayValElement.innerText = displayVal;
};

for (let i = 0; i < calNumBtns.length; i++) {
  calNumBtns[i].addEventListener("click", updateDisplayVal, false);
}

//Clear Button

clearBtn.onclick = () => {
  displayVal = "0";
  pendingVal = undefined;
  evalStringArray = [];
  displayValElement.innerText = displayVal;
};

//BackSpace Button
backspaceBtn.onclick = () => {
  let lengthofDisplayVal = displayVal.length;
  displayVal = displayVal.slice(0, lengthofDisplayVal - 1);

  if (displayVal === " ") displayVal = "0";

  displayValElement.innerText = displayVal;
};

//Decimal Button

decimalBtn.onclick = () => {
  if (!displayVal.includes(".")) displayVal += ".";
  displayValElement.innerText = displayVal;
};

//Arethimetic Operation

function performOperation(clickobj) {
  let operator = clickobj.target.innerText;

  switch (operator) {
    case "+":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("+");
    case "-":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("-");
      break;

    case "x":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("*");
      break;

    case "÷":
      pendingVal = displayVal;
      displayVal = "0";
      displayValElement.innerText = displayVal;
      evalStringArray.push(pendingVal);
      evalStringArray.push("/");
      break;

    case "=":
      evalStringArray.push(displayVal);
      let evaluation = eval(evalStringArray.join(" "));
      displayVal = evaluation + " ";
      displayValElement.innerText = displayVal;
      evalStringArray = [];
      break;

    default:
      break;
  }
}

for (let j = 0; j < calcOperatorsBtns.length; j++) {
  calcOperatorsBtns[j].addEventListener("click", performOperation, false);
}
