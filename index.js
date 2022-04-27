const btn = document.querySelector(".btn");
const email = document.querySelector("#email");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
const errorText = document.querySelector(".error-text");
const errorIcon = document.querySelector(".error-icon");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  if (email.value.trim() == "") {
    error(email, "Please provide a vaild email");
  } else {
    success(email);
  }

  if (email.value.match(pattern)) {
    success(email);
  } else {
    error(email, "Please provide a vaild email");
  }
});

function error(element, msg) {
  element.style.border = "2px solid hsl(0, 93%, 68%)";
  errorText.textContent = msg;
  errorText.style.display = "block";
  errorText.style.color = "hsl(0, 93%, 68%)";
  errorIcon.style.display = "block";
}

function success(element) {
  element.style.border = "2px solid hsl(0, 80%, 86%)";
  errorText.style.display = "none";
  errorIcon.style.display = "none";
}
