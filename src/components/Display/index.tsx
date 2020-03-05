import React from 'react';
import { Canvas } from './styles';

interface PropTypes {
  canvasRef: object;
}

const Display = ({ canvasRef }: PropTypes) => (
  <Canvas ref={canvasRef}>
  </Canvas>
);

export default Display;
