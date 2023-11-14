var toggle = document.querySelector(".toggle")
var left = document.querySelector(".left")
var count = 0;
toggle.addEventListener("click",function(){
    
    if(count==0){
        left.style.backgroundColor = "black"
        left.style.color = "white"
        toggle.style.color = "white"
        toggle.style.borderBottom = "2px solid white"
        count = 1
    }
    else{
        left.style.backgroundColor = "white"
        left.style.color = "black"
        toggle.style.color = "black"
        toggle.style.borderBottom = "2px solid black"
        count = 0
    }
})

