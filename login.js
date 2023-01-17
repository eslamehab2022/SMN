let Username = document.getElementById("Username");
let passwordLog = document.getElementById("passwordss");
let signUps = document.getElementById("signUp");
let logIn = document.getElementById("login");
let controlLog = document.getElementsByClassName("form-control");
//check Date In localStorage
let date = (info = JSON.parse(localStorage.getItem("date")));
logIn.addEventListener("click", function (e) {
  // let loader = document.getElementById("loader");
  e.preventDefault();
  validaitors();
  removeValue();
});

let submiter = document.getElementById("submiter");
let Forgot = document.getElementById("Forgot");
let forgetPassword = document.getElementById("forget-password");

// display forget password
Forgot.addEventListener("click", function () {
  submiter.style.display = "none";
  forgetPassword.style.display = "block";
});

function validaitors() {
  for (const one of date) {
    let dName = one.names;
    let dPassword = one.pass;
    if (
      dName != Username.value ||
      dPassword != passwordLog.value ||
      Username.value == "" ||
      passwordLog.value == ""
    ) {
      new AWN().alert("Custom alert message", { durations: { alert: 800 } });
    } else {
      loader.style.display = "block";
      setTimeout(() => {
        window.location = "index.html";
      }, 2000);
    }
  }
};
function removeValue() {
  for (const controls of controlLog) {
    controls.value = "";
  }
};

signUps.addEventListener('click', function (e) {
  
  e.preventDefault();
  loader.style.display = "block";
  setTimeout(() => {
    window.location = 'signup.html';
  }, 2000);

})