var randomNumber1 = Math.ceil(Math.random() * 6);
var img1 = document.querySelector(".img1");
// const [randomNumber1, randomNumber2] = [Math.ceil(Math.random() * 6), Math.ceil(Math.random() * 6)];

if (randomNumber1 === 1) {
    img1.setAttribute("src", "./images/dice1.png");
}
if (randomNumber1 === 2) {
    img1.setAttribute("src", "./images/dice2.png");
}
if (randomNumber1 === 3) {
    img1.setAttribute("src", "./images/dice3.png");
}
if (randomNumber1 === 4) {
    img1.setAttribute("src", "./images/dice4.png");
}
if (randomNumber1 === 5) {
    img1.setAttribute("src", "./images/dice5.png");
}
if (randomNumber1 === 6) {
    img1.setAttribute("src", "./images/dice6.png");
}

var randomNumber2 = Math.ceil(Math.random() * 6);
var img2 = document.querySelector(".img2");

if (randomNumber2 === 1) {
    img2.setAttribute("src", "./images/dice1.png");
}
if (randomNumber2 === 2) {
    img2.setAttribute("src", "./images/dice2.png");
}
if (randomNumber2 === 3) {
    img2.setAttribute("src", "./images/dice3.png");
}
if (randomNumber2 === 4) {
    img2.setAttribute("src", "./images/dice4.png");
}
if (randomNumber2 === 5) {
    img2.setAttribute("src", "./images/dice5.png");
}
if (randomNumber2 === 6) {
    img2.setAttribute("src", "./images/dice6.png");
}

if (randomNumber1 > randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
    document.querySelector(".container h1").innerHTML = "Player 2 Wins!";
}
else {
    document.querySelector(".container h1").innerHTML = "It's a Tie!";
}

// a less lengthy solution would be to set variables that directly change the number in "diceX.png" and the value that would chage would be directly tied to "randomNumber"