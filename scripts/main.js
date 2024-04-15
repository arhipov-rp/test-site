var myImage = document.querySelector("img");

myImage.onclick = function () {
  var mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-browser-logo.svg") {
    myImage.setAttribute("src", "images/firefox-developer-edition-logo.svg")
  } else {
    myImage.setAttribute("src", "images/firefox-browser-logo.svg")
  }
};

var myButton = document.querySelector("button");
var myHeading = document.querySelector("h1");

function setUserName() {
  var myName = prompt("Введите имя:");
  localStorage.setItem("name", myName);
  myHeading.textContent = "Mozilla это круто, " + myName;
};

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  var storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozilla это круто, " + storedName;
};

myButton.onclick = function () {
  setUserName();
};