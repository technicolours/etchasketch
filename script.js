let size = 8;

const canvas = document.getElementById('canvas');

for (let i=size; i>0; i--) {
    const tile = document.createElement('div');
    tile.setAttribute('id', 'tile');
    canvas.appendChild(tile);
}