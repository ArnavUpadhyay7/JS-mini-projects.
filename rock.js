var rock = document.querySelector(".rock");
var paper = document.querySelector(".paper");
var scissors = document.querySelector(".scissors");



                // 1 = rock
                // 2 = paper
                // 3 = scissors
                
rock.addEventListener("click",function(){
    var number1 = "image" + 1 + ".png";
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var randomImage1 = "image" + randomNumber + ".png";
    
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", number1)

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImage1)

    if(randomNumber==1){
        //draw
        document.querySelector("h1").innerHTML="DRAW!!!!!";
    }
    else if(randomNumber==2){
        //you lose
        document.querySelector("h1").innerHTML="COMPUTER WINS!!!!!";
    }
    else{
        //you win
        document.querySelector("h1").innerHTML="YOU WIN!!!!!";
    }
})

paper.addEventListener("click",function(){
    var number2 = "image" + 2 + ".png";
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var randomImage2 = "image" + randomNumber + ".png";

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", number2)

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImage2)

    if(randomNumber==1){
        // you lose
        document.querySelector("h1").innerHTML="YOU WIN!!!!!";
    }
    else if(randomNumber==2){
        //draw
        document.querySelector("h1").innerHTML="DRAW!!!!!";
    }
    else{
        //you win
        document.querySelector("h1").innerHTML="COMPUTER WINS!!!!!";
    }
})

scissors.addEventListener("click",function(){
    var number3 = "image" + 3 + ".png";
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    var randomImage3 = "image" + randomNumber + ".png";

    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", number3)

    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImage3)

    if(randomNumber==1){
        //you lose
        document.querySelector("h1").innerHTML="COMPUTER WINS!!!!!";
    }
    else if(randomNumber==2){
        //you win
        document.querySelector("h1").innerHTML="YOU WIN!!!!!";
    }
    else{
        //draw
        document.querySelector("h1").innerHTML="DRAW!!!!!";
    }
})