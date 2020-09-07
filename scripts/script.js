const container = document.querySelector("#container");

// Declaring initial parameter 
let row = 10; 
let col = 10;

// Grid creation 
function grid(row,col) {
    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-cols', col);
    for (c=0; c<(row*col); c++) { 
        // Adding div logic
        let box = document.createElement('div');
        box.innerText = (c+1);
        container.appendChild(box).className = "grid-item";
        //console.log(c)
    };
};

// Initial Grid Load 
grid(row,col);

// Creating grid based on user input upon clicking resize
const resize = document.querySelector(".resizeBtn");

function reSize() { 
    let row = prompt("How many rows?");
    let col = prompt("How many columns?");
    // Clears out the original dimensions 
    document.getElementById("container").innerHTML = "";
    // Append new dimensions to div 
    grid(row,col);
}
resize.addEventListener("click", function() {
    // draw.classList.remove("active");
    // color.classList.remove("active");
    reSize();
});

// Clicking on draw button to enable hover effect 
const draw = document.querySelector(".drawBtn");

// DOM for hover effect 
function drawBlack() {
    cells = document.querySelectorAll(".grid-item");
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "black";
        });
    });
};

function drawWhite() {
    cells = document.querySelectorAll(".grid-item");
    cells.forEach((cell) => {
        cell.addEventListener("mouseenter", (e) => {
            e.target.style.backgroundColor = "white";
        });
    });
};

draw.addEventListener("click", function() {
    if (draw.classList.contains("active")) {
        draw.classList.remove("active");
    } else { 
        draw.classList.add("active");
        drawBlack();
    };
});

// button to clear all marks to white 
const clearBtn = document.querySelector(".clearBtn");

function clearGrid() {
    cells = document.querySelectorAll(".grid-item");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "white";
    })
};

clearBtn.addEventListener("click", clearGrid);


