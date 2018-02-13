function log(a) {
    console.log(a);
}

var defaultButton = document.getElementById("noClass");

var Form = document.getElementById("formId");
defaultButton.addEventListener("click", change);
//efaultButton.addEventListener("click", changeBack);




function change() {
    // FormId.classList.toggle("defaultYellow");
    Form.classList.toggle("defaultGreen")
    //defaultButton.innerHTML = "Add Class"
    if (defaultButton.innerHTML === "Remove class") {
        defaultButton.innerHTML ="Add class"
    } else defaultButton.innerHTML = "Remove class"
}
//

    //if (defaultButton.innerHTML === "Remove class") {
      //  defaultButton.innerHTML ="Add class"
    //} else defaultButton.innerHTML = "Remove class"
//}




