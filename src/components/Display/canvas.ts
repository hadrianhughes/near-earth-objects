const AU = 400;
const SUN_SIZE = AU * 0.0093;

export const render = (
  canvas: HTMLCanvasElement,
  width: number,
  height: number
): void => {
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');

  // Draw sun
  ctx.fillStyle = 'yellow';
  ctx.arc(canvas.width / 2, canvas.height / 2, SUN_SIZE, 0, 2 * Math.PI);
  ctx.fill();

  // Draw Earth orbit
  ctx.beginPath();
  ctx.strokeStyle = 'white';
  ctx.arc(canvas.width / 2, canvas.height / 2, AU, 0, 2 * Math.PI);
  ctx.stroke();
};
