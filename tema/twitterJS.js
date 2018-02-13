function log(a) {
    console.log(a);
}
//Bottom form
var Phone = document.getElementById("phone");
debugger
var Pass = document.getElementById("pass");
var getStarted = document.getElementById("signUpButton");

//upper form
var PhoneTop = document.getElementById("phoneTop");
var PassTop = document.getElementById("passTop");
var loginButton = document.getElementById("logInTop");

///toogle button
var toogleB = document.getElementById("tButton")
var upperForm = document.getElementById("logIn")
var bottomForm = document.getElementById("signUp")
toogleB.addEventListener("click", firstClick);

function firstClick() {
    upperForm.classList.toggle("error")
    bottomForm.classList.toggle("error")
    toogleB.innerHTML = "add Class"
    if (toogleB.className == "error"){
       return toogleB.innerHTML = "Remove Class"
    }
    }
//tentativa
// if(document.getElementById("tButton").value =='Reveal'){
//    upperForm.classList.toggle("error");
//    bottomForm.classList.toggle("error");
//    toogleB.innerHTML = "Add Class"

// else{document.getElementById("tButton").class =="Remove";
//    upperForm.classList.remove("error");
//    bottomForm.classList.remove("error");
//    toogleB.innerHTML = "Remove Class"
    

loginButton.addEventListener("click", onClick);
getStarted.addEventListener("click", onReset);

function onReset() {
    debugger
    Phone.value = null;
    Pass.value = null;
}
function onClick() {
    PhoneTop.value = null;
    PassTop.value = null;
}
