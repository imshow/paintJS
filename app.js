const canvas = document.getElementById("jsCanvas");
const ctx = document.getContext("2d");

ctx.strokeStyle = "2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;

function stopPainting() {
    painting = false;
}

function onMouseMove(event) {
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting) {
        ctx.beginPath();
        ctx.moveTo(x, y);
    } else {
        ctx.lineTo(x, y);
    }
}

function onMouseDown(event) {
    painting = true;
}

function onMouseUp(event) {
    painting = false;
}

if(canvas) {
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseup", stopPainting);
    canvas.addEventListener("mouseleave", stopPainting);
}
