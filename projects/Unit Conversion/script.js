const unitBoxInput = document.getElementById("unit-box-input");
const convBtn = document.getElementById("conv-btn");
const lengthContent = document.getElementById("length");
const volume = document.getElementById("volume");
const mass = document.getElementById("mass");
const floorBtn = document.getElementById("floor-btn");
let clicks = [];
let count = 0;
/////////////////////////////////////////////////////////////////////////
function meter2Feet(meter) {
  return (meter *= 3.2808399);
}

function feet2Meter(feet) {
  return (feet *= 0.3048);
}

//////////////////////////////////////////////////////////////////////////

function liter2Gallon(liter) {
  return (liter *= 0.264172052);
}

function gallon2Liter(gallon) {
  return (gallon *= 3.78541178);
}
////////////////////////////////////////////////////////////////////////////////
function kilo2Pound(kilo) {
  return (kilo *= 2.20462262);
}

function pound2Kilo(pound) {
  return (pound *= 0.45359237);
}
////////////////////////////////////////////////////////////////////////////////

function numRounder(x) {
  return Math.round(x);
}

/////////////////////////////////////////////////////////////////////

const isOdd = (num) => num % 2 == 1;

convBtn.addEventListener("click", (event) => {
  unitBoxInput.style.width = unitBoxInput.value.length * 100 + "px";
  convBtn.style.width = unitBoxInput.value.length * 100 + "px";

  lengthContent.innerHTML = `${unitBoxInput.value} meters = ${meter2Feet(
    unitBoxInput.value
  )} feet | ${unitBoxInput.value} feet = ${feet2Meter(
    unitBoxInput.value
  )} meters`;

  volume.innerHTML = `${unitBoxInput.value} liters = ${liter2Gallon(
    unitBoxInput.value
  )} gallons | ${unitBoxInput.value} gallons = ${gallon2Liter(
    unitBoxInput.value
  )} liters`;

  mass.innerHTML = `${unitBoxInput.value} kilos = ${kilo2Pound(
    unitBoxInput.value
  )} pounds | ${unitBoxInput.value} pounds = ${pound2Kilo(
    unitBoxInput.value
  )} kilos`;
});

unitBoxInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    unitBoxInput.style.width = unitBoxInput.value.length * 100 + "px";
    convBtn.style.width = unitBoxInput.value.length * 100 + "px";

    lengthContent.innerHTML = `${
      unitBoxInput.value.style
    } meters = ${meter2Feet(unitBoxInput.value)} feet | ${
      unitBoxInput.value
    } feet = ${feet2Meter(unitBoxInput.value)} meters`;

    volume.innerHTML = `${unitBoxInput.value} liters = ${liter2Gallon(
      unitBoxInput.value
    )} gallons | ${unitBoxInput.value} gallons = ${gallon2Liter(
      unitBoxInput.value
    )} liters`;

    mass.innerHTML = `${unitBoxInput.value} kilos = ${kilo2Pound(
      unitBoxInput.value
    )} pounds | ${unitBoxInput.value} pounds = ${pound2Kilo(
      unitBoxInput.value
    )} kilos`;
  }
});

floorBtn.addEventListener("click", function () {
  count++;
  clicks.push(count);
  if (isOdd(count)) {
    lengthContent.innerHTML = `${unitBoxInput.value} meters = ${numRounder(
      meter2Feet(unitBoxInput.value)
    )} feet | ${unitBoxInput.value} feet = ${numRounder(
      feet2Meter(unitBoxInput.value)
    )} meters`;

    volume.innerHTML = `${unitBoxInput.value} liters = ${numRounder(
      liter2Gallon(unitBoxInput.value)
    )} gallons | ${unitBoxInput.value} gallons = ${numRounder(
      gallon2Liter(unitBoxInput.value)
    )} liters`;

    mass.innerHTML = `${unitBoxInput.value} kilos = ${numRounder(
      kilo2Pound(unitBoxInput.value)
    )} pounds | ${unitBoxInput.value} pounds = ${numRounder(
      pound2Kilo(unitBoxInput.value)
    )} kilos`;
  } else if (!isOdd(count)) {
    lengthContent.innerHTML = `${unitBoxInput.value} meters = ${meter2Feet(
      unitBoxInput.value
    )} feet | ${unitBoxInput.value} feet = ${feet2Meter(
      unitBoxInput.value
    )} meters`;

    volume.innerHTML = `${unitBoxInput.value} liters = ${liter2Gallon(
      unitBoxInput.value
    )} gallons | ${unitBoxInput.value} gallons = ${gallon2Liter(
      unitBoxInput.value
    )} liters`;

    mass.innerHTML = `${unitBoxInput.value} kilos = ${kilo2Pound(
      unitBoxInput.value
    )} pounds | ${unitBoxInput.value} pounds = ${pound2Kilo(
      unitBoxInput.value
    )} kilos`;
  }
});
