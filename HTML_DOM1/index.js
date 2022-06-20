
function Add() {
    let number1 = +document.getElementById('num1').value; //"4"
    let number2 = +document.getElementById("num2").value; // "7"
    let sum = number1 + number2;
    let result = "Ket qua la " + number1 + "+" + number2 + "=" + sum;
    document.getElementById('result').innerHTML = result;
}
function Sub() {
    let number1 = document.getElementById("num1").value; // "4"
    let number2 = document.getElementById("num2").value; // "7"
    let sub = number1 - number2;
    let result = "Dap an la " + number1 + "-" + number2 + "=" + sub;
    document.getElementById('result').innerHTML = result;
}


