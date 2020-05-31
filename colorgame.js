var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    // Mode button event listener
    setupModeButtons();
    // Square event listeners
    setupSquares()
    // Reset the screen
    reset();
}

function setupModeButtons() {
    for(var i = 0; i < modeButtons.length; i++){
        modeButtons[i].addEventListener("click", function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
            reset();
        })
    }
}

function setupSquares() {
    for (var i = 0; i < squares.length; i++) {
        // Add click listeners to squares
        squares[i].addEventListener("click", function() {
            // Grab the color of the clicked square
            var clickedColor = this.style.backgroundColor;
            // Compare to the picked color
            if(clickedColor === pickedColor){
                messageDisplay.textContent = "Correct!";
                changeColors(clickedColor);
                h1.style.backgroundColor = clickedColor;
                resetButton.textContent = "Play Again";
            } else {
                // Fade the color to the background
                this.style.backgroundColor = "#232323";
                messageDisplay.textContent = "Try Again";
            }
        })
    }
}

function reset() {
    // generate all new colors
    colors = generateRandomColors(numSquares);
    // pick a new random color from the array
    pickedColor = pickColor();
    // Reset message string.
    messageDisplay.textContent = "";
    // Reset button text to new colors
    resetButton.textContent = "New Colors";
    // change color display to match picked color
    colorDisplay.textContent = pickedColor;
    // changes colors of squares
    for(var i = 0; i < squares.length; i++){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    // Change h1 background to standard
    h1.style.backgroundColor = "#ff7733";
}


resetButton.addEventListener("click", function(){
    reset();
});

function changeColors(color) {
    // Loop through squares changing them given color
    for(var i = 0; i < squares.length; i++){
        // change each color to math the given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    var random = Math.floor(Math.random() * colors.length);
    return colors[random];
}

function generateRandomColors(num) {
    // make an array
    var arr = [];
    // add num random colors to the array
    for(var i = 0; i < num; i++){
        // get a random color and add to array
        arr.push(randomColor());
    }
    // return the array
    return arr;
}

function randomColor() {
    //pick a "red" from 0-255
    var red = Math.floor(Math.random() * 256);
    //pick a green
    var green = Math.floor(Math.random() * 256);
    //pick a blue
    var blue = Math.floor(Math.random() * 256);
    // create rgb
    return "rgb(" + red + ", " + green + ", " + blue + ")";
}
