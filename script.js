let color = "black";
   // randomColor = Math.floor(Math.random()*16777215).toString(16);
function makeBoard(gridNumber){
let board = document.getElementById('container');
let squares = board.querySelectorAll('div');
squares.forEach((div) => div.remove());
board.style.gridTemplateColumns = `repeat(${gridNumber}, 1fr)`;
board.style.gridTemplateRows = `repeat(${gridNumber}, 1fr)`;
for (let i = 0; i < gridNumber; i++) {
    for (let j = 0; j < gridNumber; j++) {
        const div = document.createElement('div');
        div.addEventListener('mouseover', squareColor);
        div.style.backgroundColor = "white";
        div.classList.add("grid");
        container.appendChild(div);
    }
}
}
makeBoard(16);

function changeSize() {
    let input = prompt("Insert a number between 2 and 100");
    if (input >= 2 && input <= 100) {
        makeBoard(input);
    }
    else {
        console.log("too many squares");
    }
}

function resetBoard() {
    makeBoard(16);
}

function squareColor(){
    if (color === 'random') { 
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
}
    else {
        this.style.backgroundColor = color;
    }
}


function changeColor(choice) {
    color = choice;

}



















/*   function divCreator(div) {

    for (let i = 0; i < div; i++) {
        container.appendChild(cells);
        div.classlist.add
    }
}

divCreator(256);

 /*resetButton = document.getElementById('reset').addEventListener('click'),() => {
    document.getElementById('container').style.backgroundColor = white;
} */

