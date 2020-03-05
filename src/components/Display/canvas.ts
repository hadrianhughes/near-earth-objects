export const render = (
  canvas: HTMLCanvasElement,
  width: number,
  height: number
): void => {
  canvas.width = width;
  canvas.height = height;

  const ctx = canvas.getContext('2d');

  ctx.fillStyle = 'yellow';
  ctx.arc(canvas.width / 2, canvas.height / 2, 10, 0, 2 * Math.PI);
  ctx.fill();
};
