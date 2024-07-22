const canvas = document.getElementById("draw");
const ctx = canvas.getContext("2d");

const canvasWidth = window.innerWidth;
const canvasHeight = window.innerHeight;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

let positiveDirection = true;

ctx.lineCap = "round";
ctx.lineJoin = "round";

let isDrawing = false;

let hue = 0;
let strokeWidth = 10;

function drawHandler(e) {
  if (!isDrawing) return;

  ctx.strokeStyle = `hsl(${hue}, 100%, 70%)`;
  ctx.lineWidth = strokeWidth;

  ctx.beginPath();

  let currentX = e.offsetX;
  let currentY = e.offsetY;
  ctx.lineTo(currentX, currentY);
  hue++;
  if (hue > 360) {
    hue = 0;
  }

  if (strokeWidth > 150 || strokeWidth < 10) {
    positiveDirection = !positiveDirection;
  }
  if (positiveDirection) {
    strokeWidth++;
  } else strokeWidth--;

  console.log(strokeWidth);
  console.log(`hsl(${hue}, 100%, 70%)`);
  ctx.stroke();
}

function clearCanvas(e) {
  if ((e.key = "c")) {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    //strokeWidth = 10;
    //ctx.beginPath();
  }
}

canvas.addEventListener("mousemove", drawHandler);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  ctx.moveTo(e.offsetX, e.offsetY);
});
canvas.addEventListener("mouseup", (e) => (isDrawing = false));
canvas.addEventListener("mouseout", (e) => (isDrawing = false));
document.addEventListener("keypress", clearCanvas);
