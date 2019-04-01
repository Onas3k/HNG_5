//initialize all the necessary variables
var numOcol = 6;
var colors = selCol(numOcol);
var boxes = document.querySelectorAll(".box");
var display = document.querySelector(".display");
var reset = document.querySelector(".reset");
var display2 = document.querySelector("#display2");
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
var h1 = document.querySelector("h1");
var random = colors[rand()];
display.textContent = random;

// run ready function
ready();

// attach event listeners to set difficulty and reset function of the game
hard.addEventListener("click", function () {
    harrd();

});
easy.addEventListener("click", function () {
eazi();  

});

reset.addEventListener("click", function(){
rezet();
});


// raw logic of the functions that make the game work
function rand() {
    var x = Math.floor(Math.random() * colors.length);
    return x;
}

function correct(color) {
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = color;
    }
}

function crCol() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var total = "rgb(" + r + ", " + g + ", " + b + ")";
    return total;
}

function selCol(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(crCol());

    }
    return arr;
}


function eazi(){
    hard.classList.remove("selected");
    easy.classList.add("selected");
    numOcol = 3;
    colors = selCol(numOcol);
    random = colors[rand()];
    h1.style.background = "none";
    display.textContent = random;
    display2.textContent = "";
    for (var i = 0; i < boxes.length; i++) {
        if (colors[i]) {
            boxes[i].style.background = colors[i];
        } else {
            boxes[i].style.display = "none";
        }
        boxes[i].addEventListener("click", function () {
            var clicked = this.style.background;
            if (clicked === random) {
                correct(random);
                display2.textContent = "Correct!!";
                h1.style.background = random;
            } else {
                this.style.background = "#fff";
                display2.textContent = "try again!!";

            }
        });
    }
}
function harrd() {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    numOcol = 6;
    colors = selCol(numOcol);
    random = colors[rand()];
    display.textContent = random;
    display2.textContent = "";
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.display = "block";
        boxes[i].style.background = colors[i];
        boxes[i].addEventListener("click", function () {
            var clicked = this.style.background;
            if (clicked === random) {
                correct(random);
                display2.textContent = "Correct!!";
                h1.style.background = random;
            } else {
                this.style.background = "#fff";
                display2.textContent = "try again!!";
    
            }
        });
    }}

function ready(){
    for (var i = 0; i < boxes.length; i++) {
        boxes[i].style.background = colors[i];
        boxes[i].addEventListener("click", function () {
            var clicked = this.style.background;
            if (clicked === random) {
                correct(random);
                display2.textContent = "Correct!!";
                h1.style.background = random;
            } else {
                this.style.background = "#fff";
                display2.textContent = "try again!!";
    
            }
        });
    }
    
}

function rezet(){
    colors = selCol(numOcol);
    random = colors[rand()];
    display.textContent = random;
    h1.style.background = "none";
    display2.textContent = "";

    ready();

}
