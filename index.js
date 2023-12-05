for( let i = 0; i < document.querySelectorAll(".btn").length; i++){
    document.querySelectorAll(".btn")[i].addEventListener("click", function(){
        // alert("click");
        addSound(this.innerHTML.toLowerCase());
        animateButton(this.innerHTML);
    });
}

document.addEventListener("keydown", function(event){
    addSound(event.key);
    animateButton(event.key.toUpperCase());
})

function addSound(key){
    switch (key) {
        case 'w':
            let tom1 = new Audio("assets/sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case 'a':
            let tom2 = new Audio("assets/sounds/tom-2.mp3");
            tom2.play();
            break;

        case 's':
            let tom3 = new Audio("assets/sounds/tom-3.mp3");
            tom3.play();
            break;

        case 'd':
            let tom4 = new Audio("assets/sounds/tom-4.mp3");
            tom4.play();
            break;

        case 'j':
            let snare = new Audio("assets/sounds/snare.mp3");
            snare.play();
            break;
            
            
        case 'k':
            let kick = new Audio("assets/sounds/kick-bass.mp3");
            kick.play();
            break;

        case 'l':
            let crash = new Audio("assets/sounds/crash.mp3");
            crash.play();
            break;
            

        default:
            console.log(key);
            break;
    }
}

function animateButton(letter){
    let activeButton = document.querySelector("." + letter);
    activeButton.classList.add("pressed");

    setTimeout(() => {
        activeButton.classList.remove("pressed");
    }, 200);
}