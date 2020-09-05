const container = document.querySelector("#container")

function grid(row,col) {
    container.style.setProperty('--grid-rows', row);
    container.style.setProperty('--grid-cols', col);
    for (c=0; c < (row*col); c++) { 
        // Adding div logic
        let box = document.createElement('div');
        box.style.color = 'black';
        box.innerText = (c+1);
        container.appendChild(box).className = "grid-item";
        console.log(c)
    };
};

let row = prompt("How many rows?");
let col = prompt("How many columns?");
grid(row,col);