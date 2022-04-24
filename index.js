const btn = document.querySelector(".btn");
const email = document.querySelector("#email");
var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

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
  const parent = element.parentElement;
  const p = parent.querySelector("p");
  const error = parent.querySelector(".error-icon");
  error.style.display = "block";
  p.innerHTML = msg;
  p.style.color = "hsl(0, 93%, 68%)";
}

function success(element) {
  element.style.border = "2px solid transparent)";
}
