
var small_drum_length = document.querySelectorAll(".small-drums").length;
for(var i=0;i<small_drum_length;i++){
    var keys = document.querySelectorAll(".small-drums")[i]
    keys.addEventListener("click",function(){
        var buttomInnerHTML = this.innerHTML;
        makeSound(buttomInnerHTML);
})
}
// FOR KEYBOARD PRESS
document.addEventListener("keydown",function(event){
    makeSound(event.key);
})
function makeSound(key){

    switch (key) {
        case "w":
            var crash = new Audio("audio/crash.mp3")
            crash.play();
            break;
        case "a":
            var kick_bass = new Audio("audio/kick-bass.mp3")
            kick_bass.play();
            break;
        case "s":
            var snare = new Audio("audio/snare.mp3")
            snare.play();
            break;
        case "d":
            var tom_1 = new Audio("audio/tom-1.mp3")
            tom_1.play();
            break;
        case "j":
            var tom_2 = new Audio("audio/tom-2.mp3")
            tom_2.play();
            break;
        case "k":
            var tom_3 = new Audio("audio/tom-3.mp3")
            tom_3.play();
            break;
        case "l":
            var tom_4 = new Audio("audio/tom-4.mp3")
            tom_4.play();
            break;
        default: console.log(buttomInnerHTML)
    }
}
