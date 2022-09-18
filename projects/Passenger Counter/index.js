let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let countStr = "";

function increment() {
  count++;
  countEl.textContent = count;
  localStorage.setItem("counted", count);
  console.log("added");
}

function save() {
  countStr += " " + localStorage.counted + " - ";
  saveEl.textContent = "Previous entries: " + countStr;
  localStorage.setItem("countedStr", countStr);
  console.log("saved");
}

function clearAll() {
  countStr = "";
  countEl.textContent = 0;
  count = 0;
  saveEl.textContent = "Previous entries: ";
  localStorage.counted = 0;
  localStorage.countedStr = "";
  console.log("cleared!");
}

window.onload = function () {
  saveEl.textContent = "Previous entries: " + localStorage.countedStr;
};
