
let random1 = Math.floor((Math.random() * 5) + 1);
let random2 = Math.floor((Math.random() * 5) + 1);
var randomDiceImage = "images/dice" + random1 + ".png";
var randomDiceImage1 = "images/dice" + random2 + ".png";
document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage);
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage1);

if (random1 > random2) {
    document.querySelector("h1").innerHTML = "🚩Player1 won";
}
else if (random1 === random2) {
    document.querySelector("h1").innerHTML = "Draw!";
}
else {
    document.querySelector("h1").innerHTML = "Player2 won🚩";
}