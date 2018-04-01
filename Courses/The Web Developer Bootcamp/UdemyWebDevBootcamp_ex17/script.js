var age = prompt("How old are you?");
if (age < 0) {
    console.log("Sorry, but you do not exist.");
    alert("Sorry, but you do not exist.");
}

if (age == 21) {
    console.log("Happy 21st birthday!!");
    alert("Happy 21st birthday!!");
}

if (age % 2 !== 0) {
    console.log("Your age is odd!");
    alert("Your age is odd!");
}

if (age % Math.sqrt(age) === 0) {
    console.log("Your age is a perfect number!");
    alert("Your age is a perfect number!");
}