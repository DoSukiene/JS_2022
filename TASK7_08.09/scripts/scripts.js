function welcomeUser() {
    const firstname = document.getElementById("name").value;
    const lastname = document.getElementById("lastname").value;
    const welcomeElement =
        document.getElementById("welcome");
    welcomeElement.innerText =
        "Welcome " + firstname + " " + lastname;
    welcomeElement.style.border = "1px solid red";
    const inputs = document.getElementsByTagName("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}

function hideDisplayInputSection(hidden) {
    const inputSec = document.getElementById("inputsection");
    inputSec.hidden = hidden;
}

//function hideInputSection() {
//    const inputSec = document.getElementById("inputsection");
//    inputSec.hidden = true;
//}

//function displayInputSection() {
//    const inputSec = document.getElementById("inputsection");
//    inputSec.hidden = false;
//}

function changeColor() {
    document.body.style.color = "red";
}

//function timer() {
//    for (let x = 10; x > -1; x--)
//        document.getElementById("count").innerText = x;
//}

//function timer() {
//    for (let x = 10; x > -1; x--) {
//        setTimeout(setElement, 1000);
//    }
//}
//function setElement(x) {
//    document.getElementById("count").innerText = x;
//}

// timer using recursion

function timer() {
    //to stop counter
    document.getElementById("stopCounter").value = "false";
    setCounterElement(10);
}

//to stop counter
function stopCounter() {
    document.getElementById("stopCounter").value = "true";
}

function setCounterElement(x) {
    if (x < 0 || document.getElementById("stopCounter").value == "true")
        return;
    else {

        document.getElementById("count").innerText = x;
        setTimeout(setCounterElement, 1000, x - 1)
    }
}

//5! = 5 * 4 * 3 * 2 * 1
function calculateFactorial(n) {
    if (n === 1)
        return 1;
    else
        return n * calculateFactorial(n - 1);
}

function setFactorial() {
    const value = Number(document.getElementById("factorialN").value);
    const factResult = calculateFactorial(value);
    document.getElementById("factorialValue").innerText = factResult;
}