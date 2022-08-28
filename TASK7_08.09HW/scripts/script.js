function actionAdd() {
    let firstnumber = Number(document.getElementById("1number").value);
    let secondnumber = Number(document.getElementById("2number").value);
    let answer = firstnumber + secondnumber;
    document.getElementById("answerValue").innerText = answer;
}

function actionSubtract() {
    let firstnumber = Number(document.getElementById("1number").value);
    let secondnumber = Number(document.getElementById("2number").value);
    let answer = firstnumber - secondnumber;
    document.getElementById("answerValue").innerText = answer;
}

function actionMultiply() {
    let firstnumber = Number(document.getElementById("1number").value);
    let secondnumber = Number(document.getElementById("2number").value);
    let answer = firstnumber * secondnumber;
    document.getElementById("answerValue").innerText = answer;
}

function actionDivide() {
    let firstnumber = Number(document.getElementById("1number").value);
    let secondnumber = Number(document.getElementById("2number").value);
    let answer = firstnumber / secondnumber;
    document.getElementById("answerValue").innerText = answer;
}
