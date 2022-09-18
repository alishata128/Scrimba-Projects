const colorModes = document.getElementById("color-modes");
let chars = [];
let colors = ["#b58900", "#cb4b16", "#dc322f", "#d33682", "#268bd2"];

for (let i = 0; i <= colorModes.textContent.length; i++) {
  chars.push(colorModes.textContent.charAt(i));
}
console.log("here ", chars[1]);
