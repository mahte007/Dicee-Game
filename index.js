var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var correctImg1 = "images/dice" + randomNumber1 + ".png"
var correctImg2 = "images/dice" + randomNumber2 + ".png"

var h1Text = document.querySelector("h1");

Roll();

function Roll(){
    document.querySelector("img.img1").setAttribute("src", correctImg1);
    document.querySelector("img.img2").setAttribute("src", correctImg2);


    if(randomNumber1 === randomNumber2){
        h1Text.textContent = "Draw";
    }else if(randomNumber1 > randomNumber2){
        h1Text.textContent = "Player1 Wins";
    }else{
        h1Text.textContent = "Player2 Wins";
    }
}