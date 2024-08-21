// Simple colour flipper

// The simple colour flipper selects one of the four defined colours at random.
const colors = ["cyan", "green", "rgba(255,65,0)", "#10006d"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// The .addEventerListener command lets the user click on the button to trigger the colour flipper.
btn.addEventListener('click', function(){
    // Get random number between 0 and 3 
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
// Whenever the button is clicked, the background colour of the webpage will change to any of the four colours defined in the colours variable. If the new colour ends up being the same as the current one, then the website will stay the same.
    document.body.style.backgroundColor = colors[randomNumber]; color.textContent = colors[randomNumber];
});

// This function is defined in a way that makes it so any number between 0 and 3 will get selected at random, whenever the button is clicked by the user.
function getRandomNumber(){
    // The Math.floor function makes it so the randomly selected number is always rounded down, so that only integers between 0 and 3 are selected.
    return Math.floor(Math.random() * colors.length);
}