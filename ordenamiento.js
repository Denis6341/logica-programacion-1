let arrayNumbers = [];
let mayor;

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
    return [...arrayNumbers]; //returns a copy 
}

function identifyNumbers(arr) {
    if (arr[0] === arr[1] || arr[0] === arr[2] || arr[1] === arr[2]) {
        printMessage("equals-numbers", "AT LEATS TWO NUMBERS ARE EQUAL." , [""]);
    } else printMessage("equals-numbers", "THERE ARE NOT EQUAL NUMBERS." , [""]);
}

function printMessage(id, message, value) {
    const result = document.getElementById(id);
    result.innerHTML = `${message} <br>${Array.isArray(value) ? value.join(" , ") : value}`;
}

function startProgram() {
    arrayNumbers = inputNumbers();
    printMessage("input-array", "Your numbers are: ", arrayNumbers);

    let ascendent = orderArray();
    identifyNumbers(ascendent);
    printMessage("ascendent", "Your numbers in ascending order are: ", ascendent);

    let descendent = ascendent.reverse();
    printMessage("descendent", "Your numbers in descending order are: ", descendent);
}

