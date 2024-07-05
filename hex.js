// Hex color flipper

// The hex color flipper selects any hex color at random.
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// The .addEventerListener command lets the user click on the button to trigger the color flipper.
btn.addEventListener('click', function(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++) {
        hexColor += hex[getRandomNumber()];
    }
    
    // When the button is clicked, the background color will automatically change to whatever hex color was picked by the flipper. The exact hex code of said color will also be displayed in text.
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});

// This function is defined in a way that makes it so any hex code will get selected at random, whenever the button is clicked by the user.
function getRandomNumber(){
    // The Math.floor function makes it so the randomly selected number is always rounded down, so that only integers are selected.
    return Math.floor(Math.random() * hex.length)
}