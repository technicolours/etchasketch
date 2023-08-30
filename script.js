let size = 8;
let amount = size*size;
let brushColor = '252525';

const canvas = document.getElementById('canvas');

for (let i=amount; i>0; i--) {
    const tile = document.createElement('div');
    tile.setAttribute('id', 'tile');
    tile.setAttribute('class', 'grid');
    tile.setAttribute('draggable', 'false');
    canvas.appendChild(tile);
}

const tiles = document.querySelectorAll('#tile');

function paint(evt) {
    console.log('on tile');
    evt.target.style.backgroundColor = (`#${brushColor}`);
}

function mouseDown (event) {
    paint(event);
    tiles.forEach(el => el.addEventListener('mouseover', paint));
    console.log('mouse down');
}

// const mouseDown2 = (event) => {
    
// }

tiles.forEach(el => el.addEventListener('mousedown', mouseDown));


document.addEventListener('mouseup', () => {
    tiles.forEach(el => el.removeEventListener('mouseover', paint));
    console.log("mouseup");
    })

canvas.style.gridTemplateColumns = (`repeat(${size}, 1fr)`);
canvas.style.gridTemplateRows = (`repeat(${size}, 1fr)`);