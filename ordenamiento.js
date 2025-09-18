let arrayNumbers = [];
let mayor;
let ascendentNumbers = [];
let descendentNumbers = [];

function validateInput(input) {
    input = input.trim();

    while(input === "" || isNaN(Number(input))){
        alert("Error, you must enter a number");
        input = prompt("Give me a numer: ");
        input = input.trim();
    }
    return Number(input);
}

function inputNumbers() {
    let numbers = [];
    for (let i = 0; i < 3; i++) {
        let input = prompt("Give me a number: ");
        let isValid = validateInput(input);
        numbers.push(isValid);
    }
    return numbers;
}

function orderArray() {
    for (let j = 0; j < 2; j++) {
        for (let i = 0; i < 2; i++) {
            if (arrayNumbers[i] > arrayNumbers[i + 1]) {
                mayor = arrayNumbers[i];
                arrayNumbers[i] = arrayNumbers[i+1];
                arrayNumbers[i+1] = mayor;
            }
        }
    }
    return arrayNumbers;
}

function identifyNumbers(ascendentNumbers) {
    if (ascendentNumbers[0] === ascendentNumbers[1] || ascendentNumbers[0] === ascendentNumbers[2] || ascendentNumbers[1] === ascendentNumbers[2]) {
        printMessage("equals-numbers", "At least two numbers are equal." , "");
    }
}

function printMessage(id, message, value) {
    const result = document.getElementById(id);
    result.innerHTML = (`${message} <br>${value.join(" ,   ")}`);
}

function startProgram() {
    arrayNumbers = inputNumbers();
    printMessage("input-array", "Your numbers are: ", arrayNumbers);
    let ascendentNumbers = orderArray();
    identifyNumbers(ascendentNumbers);
    printMessage("ascendent", "Your numbers in ascending order are: ", ascendentNumbers);
    let descendentNumbers = ascendentNumbers.reverse();
    printMessage("descendent", "Your numbers in descending order are: ", descendentNumbers);
}

