var min = 0;
var max = 100;
var number;

function getRandomNumber(min, max) {
    number = Math.floor(Math.random() * (max - min) + min);
    alert("Number genereted: " + number);
}
 
function guessNmaber (number) {
    var inputedNumber = prompt("Enter your number: ", 0);
        if (inputedNumber === null) {
            alert("Get over here!");
            return;
        }
    while (number != inputedNumber) {
        if (inputedNumber === null) {
            alert("Live us dude!");
            break;
        }
        number >  inputedNumber ? alert("Our number is higher, try again") : alert("Our number is lower, try again"); 
        inputedNumber = prompt("Try again!", 0);
    }

    if (number == inputedNumber) {
        alert("Finally! Our number is " + number + "."
        ); 
    }
    return;
}

getRandomNumber(min, max);
guessNmaber(number);