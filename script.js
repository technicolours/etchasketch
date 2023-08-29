let size = 8;
let amount = size*size;
let brushColor = '252525';

const canvas = document.getElementById('canvas');

//const colorInput = document.querySelector('')

for (let i=amount; i>0; i--) {
    const tile = document.createElement('div');
    tile.setAttribute('id', 'tile');
    tile.setAttribute('class', 'grid');
    tile.setAttribute('draggable', 'false');
    canvas.appendChild(tile);
}

const tiles = document.querySelectorAll('#tile');

function paint(target) {
    console.log('on tile');
    console.log(target);
    this.style.backgroundColor = (`#${brushColor}`);
}

//tiles.forEach(el => el.addEventListener('click', paint));

function mouseDown (event) {
    const tar = event.target;
    console.log(tar);
    paint(tar);
    tiles.forEach(el => el.addEventListener('mouseover', paint));
    console.log('mouse down');
}

tiles.forEach(el => el.addEventListener('mousedown', mouseDown));

//tiles.forEach(el => el.addEventListener('click', paint));

// OLD VERSION
// tiles.forEach(el => el.addEventListener('mousedown', () => {
//     paint();
//     tiles.forEach(el => el.addEventListener('mouseover', paint));
//     console.log('mouse down');
//     })
// )


document.addEventListener('mouseup', () => {
    tiles.forEach(el => el.removeEventListener('mouseover', paint));
    console.log("mouseup");
    })

canvas.style.gridTemplateColumns = (`repeat(${size}, 1fr)`);
canvas.style.gridTemplateRows = (`repeat(${size}, 1fr)`);