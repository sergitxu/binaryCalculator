let operator = "";

function printSymbol(symbolKey) {
    document.getElementById('res').innerHTML += symbolKey;
    if (isNaN(symbolKey)) {
        operator = symbolKey;
    }
}
document.getElementById('btnClr').onclick = function () {
    document.getElementById('res').innerHTML = "";
}

document.getElementById('btnEql').onclick = function () {

    let operation = document.getElementById('res').innerHTML;
    let operand1 = operation.substring(0, operation.indexOf(operator));
    let operand2 = operation.substring(operand1.length + 1);

    operand1 = parseInt(operand1, 2);
    operand2 = parseInt(operand2, 2);

    let result = eval(operand1 + operator + operand2);

    // remove rest in division
    if (operator === '/') {
        result = Math.floor(result);
    }

    // convert to binary
    result = result.toString(2);

    document.getElementById('res').innerHTML = result;
}

// document.getElementById('btn0').addEventListener('click', printSymbol(0));