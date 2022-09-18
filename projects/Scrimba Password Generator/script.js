const slider = document.getElementById("myRange");
const passLen = document.getElementById("passLen");
const genBtn = document.getElementById("genBtn");
const gen1 = document.getElementById("gen1");
const gen2 = document.getElementById("gen2");
const notify = document.getElementById("notify");
const moon = document.getElementById("moon");
const body = document.body;
const more = document.getElementById("more");
const arrow = document.getElementById("arrow");
const checkBNum = document.getElementById("checkBNum");
const back = document.getElementById("back");
const circle = document.getElementById("circle");
const circleCheck = document.getElementById("circle-check");
const numberEl = document.getElementById("number-el");
const symbolsEl = document.getElementById("symbols-el");
const clear = document.querySelector(".clear");
const github = document.querySelector(".github");

let numsChecked = false;
let symbolsChecked = false;

let result = "";
let result2 = "";
let symbols = "";
let symbols2 = "";
let cleanChars1 = "";
let cleanChars2 = "";
let bolbol = "";

const obj = {
  newRes: "",
  newRes2: "",
  newSymb: "",
  newSymb2: "",
  gend: false,
  numsChecked: false,
  symbolsChecked: false,
  cleanChars1: "",
  cleanChars2: "",
};

var chars =
  "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";

var symbolFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

var passwordLength = 0;
var password = "";
var password2 = "";

slider.oninput = function () {
  localStorage.setItem("spasslen", this.value);
  passLen.textContent = this.value;
  //console.log(slider.value);
  passwordLength = this.value;
};

window.onload = function () {
  passLen.textContent = localStorage.spasslen;
  slider.value = localStorage.spasslen;
  passwordLength = localStorage.spasslen;
  gen1.textContent = localStorage.thepass;
  gen2.textContent = localStorage.thepass2;

  if (localStorage.getItem("dark-mode") == "enabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
};

genBtn.addEventListener("click", function () {
  for (let i = 0; i <= passwordLength; i++) {
    var randNum = Math.floor(Math.random() * chars.length);
    var randNum2 = Math.floor(Math.random() * chars.length);
    password += chars.substring(randNum, randNum + 1);
    password2 += chars.substring(randNum2, randNum2 + 1);
  }
  localStorage.setItem("thepass", password);
  localStorage.setItem("thepass2", password2);
  localStorage.setItem("generated", true);

  gen1.textContent = localStorage.thepass;
  gen2.textContent = localStorage.thepass2;

  console.log("pass length is ", passwordLength);
  console.log("pass1 is ", password);
  console.log("pass2 is ", password2);
  if (password != "" && password2 != "") {
    window.location.reload();
  }
});

function copyTextGen1() {
  navigator.clipboard.writeText(gen1.textContent);
  if (navigator.clipboard.writeText) {
    notify.classList.toggle("display-b");
  }
}

gen1.addEventListener("click", copyTextGen1);
//gen1.addEventListener("pointerdown", copyTextGen1);
gen1.addEventListener("dblclick", copyTextGen1);

function copyTextGen2() {
  navigator.clipboard.writeText(gen2.textContent);
  if (navigator.clipboard.writeText) {
    notify.classList.toggle("display-b");
  }
}

gen2.addEventListener("click", copyTextGen2);
//gen2.addEventListener("pointerdown", copyTextGen2);
gen2.addEventListener("dblclick", copyTextGen2);

function enableDarkMode() {
  moon.classList.replace("fa-sun", "fa-moon");
  body.classList.add("dark");
  localStorage.setItem("dark-mode", "enabled");
}

function disableDarkMode() {
  moon.classList.replace("fa-moon", "fa-sun");
  body.classList.remove("dark");
  localStorage.setItem("dark-mode", "disabled");
}

moon.addEventListener("click", function () {
  darkMode = localStorage.getItem("dark-mode");
  if (darkMode === "disabled") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
});

checkBNum.style.display = "none";
numberEl.style.display = "none";
symbolsEl.style.display = "none";

arrow.addEventListener("click", function () {
  more.classList.toggle("clicked");
  arrow.style.display = "none";
  back.style.display = "block";
  checkBNum.style.display = "flex";
  numberEl.style.display = "flex";
  symbolsEl.style.display = "flex";
});

back.addEventListener("click", function () {
  more.classList.toggle("clicked");
  if (!more.classList.contains("clicked")) {
    back.style.display = "none";
    arrow.style.display = "block";
    checkBNum.style.display = "none";
  }
});

back.addEventListener("click", function () {
  obj.numsChecked = false;
  obj.symbolsChecked = false;
  numberEl.classList.remove("lineThrough");
  symbolsEl.classList.remove("lineThrough");
  gen1.textContent = obj.Opassword;
  gen2.textContent = obj.Opassword2;
});

function numCheck() {
  let passwdArray = Object.values(localStorage.thepass);
  let passwdArray2 = Object.values(localStorage.thepass2);
  result = "";
  result2 = "";

  passwdArray.forEach((item) => {
    if (isNaN(item)) {
      result += item;

      //console.log(item + " :is not a number");
    }
  });

  passwdArray2.forEach((item) => {
    if (isNaN(item)) {
      result2 += item;

      //console.log(item + " is not a number");
    }
  });

  console.log("pass1 ", result);
  console.log("pass2 ", result2);
  obj.newRes = result;
  obj.newRes2 = result2;
}

function symbolCheck() {
  var symbolFormat = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
  let passwdArray = Object.values(localStorage.thepass);
  let passwdArray2 = Object.values(localStorage.thepass2);
  symbols = "";
  symbols2 = "";

  passwdArray.forEach((item) => {
    if (!symbolFormat.test(item)) {
      symbols += item;
      //console.log(item + ": is not a symbol");
    }
  });

  passwdArray2.forEach((item) => {
    if (!symbolFormat.test(item)) {
      symbols2 += item;
    }
  });

  console.log("pass1 is: " + symbols);
  console.log("pass2 is: " + symbols2);
  obj.newSymb = symbols;
  obj.newSymb2 = symbols2;
}

function numSymbolCheck() {
  let passwdArray = Object.values(localStorage.thepass);
  let passwdArray2 = Object.values(localStorage.thepass2);

  passwdArray.forEach((item) => {
    if (isNaN(item) && !symbolFormat.test(item)) {
      cleanChars1 += item;
      //console.log(item + " :is not a number");
    }
  });

  passwdArray2.forEach((item) => {
    if (isNaN(item) && !symbolFormat.test(item)) {
      cleanChars2 += item;
      //console.log(item + " :is not a number");
    }
  });

  console.log("clean pass1 is : ", cleanChars1);
  console.log("clean pass2 is : ", cleanChars2);
  obj.cleanChars1 = cleanChars1;
  obj.cleanChars2 = cleanChars2;

  gen1.textContent = cleanChars1;
  gen2.textContent = cleanChars2;
}

numberEl.addEventListener("click", function () {
  numCheck();
  numberEl.classList.toggle("lineThrough");
  if (numberEl.classList.contains("lineThrough")) {
    gen1.textContent = result;
    gen2.textContent = result2;
    obj.numsChecked = true;
  } else {
    gen1.textContent = localStorage.thepass;
    gen2.textContent = localStorage.thepass2;
    obj.numsChecked = false;
  }
  result = "";
  result2 = "";
});

symbolsEl.addEventListener("click", function () {
  symbolCheck();
  symbolsEl.classList.toggle("lineThrough");
  if (symbolsEl.classList.contains("lineThrough")) {
    gen1.textContent = symbols;
    gen2.textContent = symbols2;
    obj.symbolsChecked = true;
  } else {
    gen1.textContent = localStorage.thepass;
    gen2.textContent = localStorage.thepass2;
    obj.symbolsChecked = false;
  }

  symbols = "";
  symbols2 = "";
});

if (localStorage.generated) {
  clear.classList.toggle("slider-moved");
}

clear.addEventListener("click", function () {
  localStorage.clear();
  if (localStorage.clear) {
    window.location.reload();
  }
});

github.addEventListener("click", function () {
  window.open("https://github.com/alishata128", "_blank");
});
