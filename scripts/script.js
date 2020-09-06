const container = document.querySelector("#container")

// Grid creation 
function grid(row,col) {
    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-cols', col);
    for (c=0; c < (row*col); c++) { 
        // Adding div logic
        let box = document.createElement('div');
        //box.innerText = (c+1);
        container.appendChild(box).className = "grid-item";
        //console.log(c)
    };
};

// Initial Grid Load 
grid(10,10);

// Creating grid based on user input upon clicking resize  
// let row = prompt("How many rows?");
// let col = prompt("How many columns?");
// grid(row,col);


// DOM for hover effect 
const box = document.querySelectorAll(".grid-item");
console.log(box.length)

box.forEach((box) => {
    box.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = "black";
    });
});
//box.addEventListener("mouseover", darken, false);
//box.addEventListener("mouseout", revert, false);

function darken() {
    box.setAttribute("style", "background-color: black;");
}

// function revert() {
//     box.setAttribute("style", "background-color: white;");
// }


// for (let i = 0; i < cell.length; i++) {
//     console.log(cell[i]);
//     cell[i].addEventListener("mouseenter", (e) => {
//       e.target.style.backgroundColor = "black";
//     });
