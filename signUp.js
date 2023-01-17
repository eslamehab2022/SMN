//startlogical
let fullName = document.getElementById("FullName");
let Email = document.getElementById("Email");
let Password = document.getElementById("passwords");
let confirmPassword = document.getElementById("ConfirmPassword");
const creatAcouent = document.getElementById("creat");
const signIN = document.getElementById("signIN");
//submite forms
if (creatAcouent) {
  creatAcouent.addEventListener('click', function (e) {
    e.preventDefault();
    check();
    removeValue();
  
  });
  
}
// check Date Validators
 function check() {
  if (
    fullName.value == "" ||
    Email.value == "" ||
    Password.value == "" ||
    confirmPassword.value == "" ||
    confirmPassword.value != Password.value

  ) {
    new AWN().alert("The required field must be entered correctly ", { durations: { alert: 1000 } });

  } else {
      dateInfo();
      new AWN().success('The data has been entered successfully', {durations: {success: 1000}})


      setTimeout(() => {
        window.location = "login.html";
      },2000);
    
  }
}
let info = [];
 let flag = false;
// pushDateForm
 function dateInfo() {
  let allDate = {
    names: fullName.value,
    email: Email.value,
    pass: Password.value,
    cPass: confirmPassword.value,
  };

    info.push(allDate);
    localStorage.setItem('date', JSON.stringify(info))
    flag = true;
  console.log(info);
}
let controls = document.getElementsByClassName('form-control');
// removeValueAfter taype

 function removeValue() {
  for (const control of controls) {
    control.value = "";
  }
}
//Go to signin page
let loader = document.getElementById("loader");
if (signIN) {
  signIN.addEventListener("click", () => {
    if (localStorage.getItem('date')==null) {
      new AWN().info('Please enter the required data', {durations: {info: 1000}})
    } else {
        loader.style.display = "block";
        setTimeout(() => {
        window.location = "login.html";
      },3000);
    }
    
});
};
