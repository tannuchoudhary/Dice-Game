var randomNumber1 = Math.random();
randomNumber1 = Math.floor(randomNumber1*6) + 1;

var randomDice1 = ("images/dice"+randomNumber1+".png");

document.querySelector(".img1").setAttribute("src", randomDice1);
//we can also selelct by Attribute like this
//  document.querySelectorAll("img")[0].setAttribute("src", randomDice1);
//this is selcting the 0th index of attribute img i.e img1, as there are two lines of
//attribute img i.e first for img1 and second for img2


var randomNumber2 = Math.random();
randomNumber2 = Math.floor(randomNumber2*6) + 1;

var randomDice2 = ("images/dice"+randomNumber2+".png");

document.querySelector(".img2").setAttribute("src", randomDice2);

if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "🚩 Player 1 Wins";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins 🚩";
}

else{
    document.querySelector("h1").innerHTML = "🚩 It's a tie 🚩";
}
