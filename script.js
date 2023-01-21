let container = document.querySelector('.container');
let resetButton = document.querySelector('.reset');
let gridSelect = document.querySelector('.grid-select');

let gridSize = 16;
let grid = [];

function clearCanvas(){
    grid.forEach(box => {
        box.style.backgroundColor = 'white';
    })
}

function makeGrid(){
    clearCanvas()
    
    for(i=0; i<(gridSize*gridSize); i++){
        let box = document.createElement('div');
        grid.push(box);
    }
    
    console.log(grid)
    
    grid.forEach(box => {
        box.style.minWidth = (700/gridSize).toString()+'px';
        box.style.minHeight = (700/gridSize).toString()+'px';
        container.appendChild(box);

        box.addEventListener("mouseenter", function(){
            box.style.backgroundColor = 'black';
        })
    });
}

resetButton.addEventListener('click', clearCanvas)

gridSelect.addEventListener('click', function(){
    select = Number(prompt("Enter a Grid size (1-100): ", '16'));
    if(select<1 || select>100 || select == '' || select == null) alert('Invalid input');
    else gridSize = select;
    makeGrid();
})

makeGrid(); //Default grid (16X16)



//For reference, the following will return a random colour:
// var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);