var x1 = 0, y1 = 0, x2, y2, result;

x2 = prompt("Emter your x2: ", 1);
y2 = prompt("Enter your y2: ", 1);


result = Math.sqrt(Math.pow(x1 - parseInt(x2), 2) + Math.pow(y1 - parseInt(y2), 2));

alert("Distance is: " + result);