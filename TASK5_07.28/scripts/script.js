let nu1 = prompt("Please enter first number");
let nu2 = prompt("Please enter second number");
let action = prompt("Please enter action: +, -, *, /");
const notNumbers = isNaN(nu1) || isNaN(nu2);


if (action == "+") {
    if (notNumbers) {
        result = nu1 + nu2;
        alert("Result is " + result);
    } else {
        result = Number(nu1) + Number(nu2);
        alert("Result is " + result);
    }

}
else if (action == "-") {
    if (notNumbers) {
        alert("Subtraction is possible only for numbers");
    } else {
        result = Number(nu1) - Number(nu2);
        alert("Result is " + result);
    }
}
else if (action == "*") {
    if (notNumbers) {
        alert("Multiplication is possible only for numbers");
    } else {
        result = Number(nu1) * Number(nu2);
        alert("Result is " + result);
    }
}
else if (action == "/") {
    if (notNumbers) {
        alert("Divission is possible only for numbers");
    } else {
        result = Number(nu1) / Number(nu2);
        alert("Result is " + result);
    }
}
else {
    alert("Inserted action is not correct");
}
