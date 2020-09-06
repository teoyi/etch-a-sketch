const container = document.querySelector("#container");
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
const resize = document.querySelector(".resize")

function reSize() { 
    let row = prompt("How many rows?");
    let col = prompt("How many columns?");
    // Clears out the original dimensions 
    document.getElementById("container").innerHTML = "";
    // Append new dimensions to div 
    grid(row,col);
}
resize.addEventListener("click", function() {
    reSize();
});



// DOM for hover effect 
const cells = document.querySelectorAll(".grid-item");
console.log(cells.length)

cells.forEach((cell) => {
    cell.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "black";
    });
});
