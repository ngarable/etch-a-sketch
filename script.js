const container = document.querySelector('.container');
const newGridButton = document.querySelector('#new-grid-button');

//Function to create the grid
function createGrid(gridSize){

    //clear the existing grid
    container.innerHTML = '';

    //calculate the size of each square
    const squareSize = 960/gridSize;

    //Calculate the new grid 
    for (let i =  0; i < gridSize * gridSize; i++){
        const div = document.createElement('div');
        div.classList.add('grid-square');
        div.style.width = `${squareSize}px`;
        div.style.height = `${squareSize}px`;
    

    //Add the hover effect
    div.addEventListener('mouseenter' , () =>{
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

    });
    container.appendChild(div);

}
}

function handleButtonClick(){
    let gridSize = prompt("Enter the number of squares per side (1-100): ");

    //validating the input
    gridSize = parseInt(gridSize);
    if(isNaN(gridSize) || gridSize < 1 || gridSize > 100){
        alert(`Please enter a valid number between 1 and 100`);
        return;
    }

    //create the new grid
    createGrid(gridSize);
}
//Attach the named function to the button's click event 
newGridButton.addEventListener(`click`, handleButtonClick);

//initial grid
 createGrid(10);
