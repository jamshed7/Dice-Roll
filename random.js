
// Chnage Dice 1
var randomNumber1 = Math.floor(Math.random()*6 + 1);
document.querySelector("img.img1").setAttribute("src", "images/dice"+randomNumber1+".png");

// Change Dice 2
var randomNumber2 = Math.floor(Math.random()*6 + 1);
document.querySelector("img.img2").setAttribute("src", "images/dice"+randomNumber2+".png");


//Decide winner
var heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2) {
  heading.textContent = "🚩 Player 1 wins";
}
else if (randomNumber2 > randomNumber1) {
  heading.textContent = "Player 2 wins 🚩";
}
else {
  heading.textContent = "DRAW!";
}
