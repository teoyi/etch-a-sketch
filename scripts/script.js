const container = document.querySelector("#container")

function grid(row,col) {
    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-cols', col);
    for (c=0; c < (row*col); c++) { 
        // Adding div logic
        let box = document.createElement('div');
        box.style.color = 'black';
        box.innerText = (c+1);
        box.setAttribute("id", "cell")
        container.appendChild(box).className = "grid-item";
        console.log(c)
    };
};

// Creating grid based on user input 
let row = prompt("How many rows?");
let col = prompt("How many columns?");
grid(row,col);


// DOM for hover effect 
const box = document.getElementById("cell");
box.addEventListener("mouseover", darken, false);
//box.addEventListener("mouseout", revert, false);

function darken() {
    box.setAttribute("style", "background-color: black;");
}

// function revert() {
//     box.setAttribute("style", "background-color: white;");
// }
