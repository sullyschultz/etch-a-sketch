const container = document.getElementById('container');
let grindNumber = 16;
   // randomColor = Math.floor(Math.random()*16777215).toString(16);
    
for (let i = 0; i < grindNumber; i++) {
    for (let j = 0; j < grindNumber; j++) {
        const div = document.createElement('div');
        div.style.backgroundColor = "blue";
        div.classList.add("grid");
        container.appendChild(div);
    }
}

function changeSize(input) {
    if (input < 2 || input > 100) {
        grindNumber == input;
    }
    else {
        console.log("too many squares");
    }


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

