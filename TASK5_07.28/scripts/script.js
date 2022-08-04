let nu1 = prompt("Please enter first number");
let nu2 = promt("Please enter second number");
let action = promt("Please enter action: +, -, *, /");
const notNumbers = isNan(nu1) || isNana(nu2);


if (action == "+") {
    if (notNumbers){
    result = nu1 + nu2;
    } else {
    result = Number(nu1) + Number(nu2);
    }

}
else if (action == "-") {
    alert(Subtraction is possible only for numbers);
}
else if (action == "*") {

}
else if (action == "/") {

}
else {
    alert(Inserted action is not correct")
}