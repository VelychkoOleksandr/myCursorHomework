var min = 0;
var max = 5;
var attempts = 3, score = 0;
var number = -1;

function wannaPlayLetsPlay() {
    if (confirm("Do you want to play the game?") == false) {
        alert("Today you will not win the jackpot, but you could!");
        return false;
    };
}

function oneMoreGame() {
    if (confirm("Do you want to play the game? Your current score: " + score + "$") == false) {
        alert("Today you will not win the jackpot, but you could. Take your money and get outta here!");
        return false;
    };
}
function getRandomNumber(min, max) {
    number = Math.floor(Math.random() * (max - min) + min);
    //alert("Number genereted: " + number);
}

function guessTheNumber (number, attempts) {
    alert("Guess a number between " + min + " and " + max + ". You have " + attempts + " attempts to try.");
    
    var index = 0;
    do {
        index++;
        var inputedValue = prompt("Put the number: ");
        console.log(index + "\t" + inputedValue + "\t" + number);
       
        if (inputedValue == number && index == 1) {
            score += 10;
            alert("You won 10$");
            return;
        } else if (inputedValue == number && index == 2) {
            score += 5;
            alert("You won 5$");
            return;
        } else if (inputedValue == number && index == 3){
            score += 2;
            alert("You won 2$");
            return;
        }

    } while (index < attempts);

    alert("No more attempts!");
}

function game() {
    if (wannaPlayLetsPlay() === false) {
        return;
    }
    
    var index = 0;
    while (index == 0) {
        getRandomNumber(min, max);
        guessTheNumber(number, attempts);
        
        if (oneMoreGame() === false) {
            return;
        }
    }
}

game();

