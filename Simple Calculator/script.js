let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let answer = document.getElementById("answer");

function add() {
  answer.textContent = parseInt(input1.value) + parseInt(input2.value);
}
function substract() {
  answer.textContent = parseInt(input1.value) - parseInt(input2.value);
}

function divide() {
  answer.textContent = parseInt(input1.value) / parseInt(input2.value);
}

function multiply() {
  answer.textContent = parseInt(input1.value) * parseInt(input2.value);
}
