var randomNumber = [];
for (var i = 0; i < 2; i++) {
    randomNumber[i] = Math.floor(Math.random() * 6) + 1;
    var randomImageSource = "images/dice" + randomNumber[i] + ".png";
    document.querySelectorAll("img")[i].setAttribute("src", randomImageSource);
}
if (randomNumber[0] > randomNumber[1]) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
} else if (randomNumber[0] < randomNumber[1]) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} else {
    document.querySelector("h1").innerHTML = "Draw!";
}