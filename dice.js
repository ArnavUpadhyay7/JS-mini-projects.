var btn = document.querySelector("button")
btn.addEventListener("click",function(){
    btn.innerHTML="TRY AGAIN!"
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    var randomDiceImage1 = "dice-" + randomNumber1 + ".png"; 
    var randomDiceImage2 = "dice-" + randomNumber2 + ".png";
    
    var image1 = document.querySelectorAll("img")[0];
    var image2 = document.querySelectorAll("img")[1];
    
    image1.setAttribute("src",randomDiceImage1);
    image2.setAttribute("src",randomDiceImage2);
    
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerHTML="YOU WIN!!!!!"
    }
    else if(randomNumber1==randomNumber2){
        document.querySelector("h1").innerHTML="DRAW!!!!!"
    }
    else{
        document.querySelector("h1").innerHTML="COMPUTER WON!!!!!"
    }
})


