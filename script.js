let size = 8;
let brushColor = '#252525';
let tileStyle;

const stylesheet = document.styleSheets[0].cssRules;
const slider = document.querySelector("input[type='range']");
const canvas = document.getElementById('canvas');
let tiles = document.querySelectorAll('.tile');
const clearButton = document.getElementById('clear');
const eraseButton = document.getElementById('erase');
const brushColorPicker = document.getElementById('brush-color');
const canvasColorPicker = document.getElementById('canvas-color');
const sizeDisplay = document.getElementById('size');
const clickToggle = document.querySelector("label[for='click-mode'] input");

console.log(stylesheet);

const newCanvas = () => {

    size = slider.value;

    sizeDisplay.innerHTML = `${size}x${size}`

    removeChildren();

    canvas.style.gridTemplateColumns = (`repeat(${size}, 1fr)`)
    canvas.style.gridTemplateRows = (`repeat(${size}, 1fr)`)

    let amount = size*size; 

    for (let i=amount; i>0; i--) {
        const tile = document.createElement('div');
        tile.setAttribute('class', 'tile');
        tile.setAttribute('draggable', 'false');
        canvas.appendChild(tile);
    }

    tiles = document.querySelectorAll('.tile');
    tiles.forEach(el => el.addEventListener('mousedown', mouseDown));
}

const removeChildren = () => {

    while (canvas.firstChild) {
        canvas.removeChild(canvas.firstChild);
    }
}

newCanvas(size);

const setCanvasColor = (color, element) => {

    console.log('set color')

    for (const el of stylesheet) {
        if (el.selectorText === element) {
            tileStyle = el;
            console.log(el);
        }
    }
    
    console.log(tileStyle.style);
    
    tileStyle.style.backgroundColor = color;
   // tileStyle.style.setProperty = ('background-color', `#${color}`);
    
    console.log(tileStyle.style.backgroundColor);
}

setCanvasColor(canvasColorPicker.value, '.tile');


function paint(evt) {

    if (!eraseButton.checked) {
        evt.target.style.backgroundColor = (brushColor);
    } else {
        evt.target.style.removeProperty('background-color');
    }
    
}

function mouseDown (event) {
    paint(event);
    tiles.forEach(el => el.addEventListener('mouseover', paint));
    console.log('mouse down');
}


document.addEventListener('mouseup', () => {
    tiles.forEach(el => el.removeEventListener('mouseover', paint));
    console.log("mouseup");
    })

clearButton.addEventListener('click', newCanvas);
slider.addEventListener('change', newCanvas);

brushColorPicker.addEventListener('change', () => brushColor = brushColorPicker.value)

canvasColorPicker.addEventListener('change', () => {
    setCanvasColor(canvasColorPicker.value, '.tile')
})

eraseButton.addEventListener('change', () => {
    console.log(eraseButton.checked); 
})

clickToggle.addEventListener('change', () => {

    if (clickToggle.checked) {
        tiles.forEach(el => el.removeEventListener('mousedown', mouseDown));
        tiles.forEach(el => el.addEventListener('click', paint));
    } else {
        tiles.forEach(el => el.removeEventListener('click', paint));
        tiles.forEach(el => el.addEventListener('mousedown', mouseDown));
    }
})