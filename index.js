// start project navbar toggel
let toggel = document.getElementById("toggels");
let show = document.getElementById("Header");
let link = document.getElementsByTagName("li");
let icon = document.getElementById("icon-msg");
let chat = document.getElementById("chat");
let closer = document.getElementById("close");
let conaction = document.getElementById("sub-conction");
let profilName = document.getElementById("profile");
let logOut = document.getElementById("logOut");
const joinIn = document.getElementById("joinIn");
//toggel navbar
toggel.addEventListener("click", () => {
  show.classList.toggle("toggeler");
});
//check Date In localStorage
var profile = (info = JSON.parse(localStorage.getItem("date")));

if (profile) {
  displayProfile();
  removeConaction();
  shows();
}

//screen matchMedia navbar
for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function () {
    if (window.matchMedia("(max-width: 991px)").matches) {
      //scroll ovarlay navbar click link
      show.classList.toggle("toggeler");
    }
  });
}

//display chatbot

icon.addEventListener("click", function () {
  icon.style.display = "none";
  chat.style.display = "block";

  setTimeout(() => {
    sms.style.display = "block";
  }, 800);
});
//close chatbot

closer.addEventListener("click", function () {
  chat.style.display = "none";
  icon.style.display = "block";
});

//send requset chat
let textChat = document.getElementById("textChat");
let sendChat = document.getElementById("sendChat");
let textArea = document.getElementById("textAreas");
let sms = document.getElementById("sms");
async function getResponse() {
  const responseText = await fetch("Boot.json");
  const dateRes = await responseText.json();
  console.log(dateRes);

  sendChat.addEventListener("click", () => {
    let textMasseg = textChat.value.trim();

    if (textMasseg === "") {
      alert("not match chat ");
    } else {
      dateRes.forEach((ansr) => {
        if (textMasseg === ansr.massegs) {
          textArea.innerHTML += `<p class="masseg" id="massegs">${ansr.massegs}</p>`;
          textChat.value = "";

          setTimeout(() => {
            textArea.innerHTML += `<p class="Answer" id="massegs">${ansr.answer}</p>`;
          }, Math.floor(Math.random() * 3000));
        }
      });
    }
  });
}
getResponse();

//Go to location signUp

let go = document.getElementById("signup");
let loader = document.getElementById("loader");
if (go) {
  go.addEventListener("click", () => {
    loader.style.display = "block";
    setTimeout(() => {
      window.location = "signup.html";
    }, 2000);
  });
}

//Go to location signin
if (joinIn) {
  joinIn.addEventListener("click", function () {
    loader.style.display = "block";
    setTimeout(() => {
      window.location = "login.html";
    }, 2000);
  });
}

function displayProfile() {
  for (const persons of profile) {
    var person = persons.names;
  }
  profilName.innerHTML = ` <a href=""> <i class="fa-regular fa-circle-user fa-1x pe-2"></i> ${person}</a>  `;
}
//remove  conaction
function removeConaction() {
  conaction.remove();
}

function shows() {
  profilName.style.display = "block";
  logOut.style.display = "block";
}
//logOutAcouunt
logOut.addEventListener("click", function () {
  logouts();
});
function logouts() {
  localStorage.clear();
  logOut.remove();
}
//start pluign//
new WOW().init();
//End pluign//
