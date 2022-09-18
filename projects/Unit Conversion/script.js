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

  lengthContent.innerHTML = `<strong>${
    unitBoxInput.value
  }</strong> meters = <strong>${meter2Feet(
    unitBoxInput.value
  )}</strong> feet | <strong>${
    unitBoxInput.value
  }</strong> feet = <strong>${feet2Meter(unitBoxInput.value)}</strong> meters`;

  volume.innerHTML = `<strong>${
    unitBoxInput.value
  }</strong> liters = <strong>${liter2Gallon(
    unitBoxInput.value
  )}</strong> gallons | <strong>${
    unitBoxInput.value
  }</strong> gallons = <strong>${gallon2Liter(
    unitBoxInput.value
  )}</strong> liters`;

  mass.innerHTML = `<strong>${
    unitBoxInput.value
  }</strong> kilos = <strong>${kilo2Pound(
    unitBoxInput.value
  )}</strong> pounds | <strong>${
    unitBoxInput.value
  }</strong> pounds = <strong>${pound2Kilo(unitBoxInput.value)}</strong> kilos`;
});

document.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    unitBoxInput.style.width = unitBoxInput.value.length * 100 + "px";
    convBtn.style.width = unitBoxInput.value.length * 100 + "px";

    lengthContent.innerHTML = `<strong>${
      unitBoxInput.value
    }</strong> meters = <strong>${meter2Feet(
      unitBoxInput.value
    )}</strong> feet | <strong>${
      unitBoxInput.value
    }</strong> feet = <strong>${feet2Meter(
      unitBoxInput.value
    )}</strong> meters`;

    volume.innerHTML = `<strong>${
      unitBoxInput.value
    }</strong> liters = <strong>${liter2Gallon(
      unitBoxInput.value
    )}</strong> gallons | <strong>${
      unitBoxInput.value
    }</strong> gallons = <strong>${gallon2Liter(
      unitBoxInput.value
    )}</strong> liters`;

    mass.innerHTML = `<strong>${
      unitBoxInput.value
    }</strong> kilos = <strong>${kilo2Pound(
      unitBoxInput.value
    )}</strong> pounds | <strong>${
      unitBoxInput.value
    }</strong> pounds = <strong>${pound2Kilo(
      unitBoxInput.value
    )}</strong> kilos`;
  }
});

floorBtn.addEventListener("click", function () {
  count++;
  clicks.push(count);
  if (isOdd(count)) {
    lengthContent.innerHTML = `<strong>${
      unitBoxInput.value
    }</strong> meters = <strong>${numRounder(
      meter2Feet(unitBoxInput.value)
    )}</strong> feet | <strong>${
      unitBoxInput.value
    }</strong> feet = <strong>${numRounder(
      feet2Meter(unitBoxInput.value)
    )}</strong> meters`;

    volume.innerHTML = `<strong>${
      unitBoxInput.value
    }</strong> liters = <strong>${numRounder(
      liter2Gallon(unitBoxInput.value)
    )}</strong> gallons | <strong>${
      unitBoxInput.value
    }</strong> gallons = <strong>${numRounder(
      gallon2Liter(unitBoxInput.value)
    )}</strong> liters`;

    mass.innerHTML = `<strong>${
      unitBoxInput.value
    }</strong> kilos = <strong>${numRounder(
      kilo2Pound(unitBoxInput.value)
    )}</strong> pounds | <strong>${
      unitBoxInput.value
    }</strong> pounds = <strong>${numRounder(
      pound2Kilo(unitBoxInput.value)
    )}</strong> kilos`;
  } else if (!isOdd(count)) {
    lengthContent.innerHTML = `<strong>${
      unitBoxInput.value
    }</strong> meters = <strong>${meter2Feet(
      unitBoxInput.value
    )}</strong> feet | <strong>${
      unitBoxInput.value
    }</strong> feet = <strong>${feet2Meter(
      unitBoxInput.value
    )}</strong> meters`;

    volume.innerHTML = `<strong>${
      unitBoxInput.value
    }</strong> liters = <strong>${liter2Gallon(
      unitBoxInput.value
    )}</strong> gallons | <strong>${
      unitBoxInput.value
    }</strong> gallons = <strong>${gallon2Liter(
      unitBoxInput.value
    )}</strong> liters`;

    mass.innerHTML = `<strong>${
      unitBoxInput.value
    }</strong> kilos = <strong>${kilo2Pound(
      unitBoxInput.value
    )}</strong> pounds | <strong>${
      unitBoxInput.value
    }</strong> pounds = <strong>${pound2Kilo(
      unitBoxInput.value
    )}</strong> kilos`;
  }
});
