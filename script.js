let container = document.querySelector('.container');
let resetButton = document.querySelector('.reset')

let gridSize = 16;
let grid = [];
for(i=0; i<(gridSize*gridSize); i++){
    let box = document.createElement('div');
    grid.push(box);
}

console.log(grid)

grid.forEach(box => {
    // var randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
    box.style.minWidth = (700/16).toString()+'px';
    // box.style.backgroundColor = randomColor;
    container.appendChild(box);
});

grid.forEach(box => {
    box.addEventListener("mouseenter", function(){
        box.style.backgroundColor = 'black';
    })
})

resetButton.addEventListener('click', () => location.reload())