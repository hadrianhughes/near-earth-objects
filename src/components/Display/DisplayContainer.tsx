import React, { useRef, useEffect } from 'react';
import Display from './index';
import { get } from '../../utils';
import { render } from './canvas';

const DisplayContainer = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const canvasParent = get(['current', 'parentElement'])(canvasRef, {});
    const width = canvasParent.offsetWidth;
    const height = canvasParent.offsetHeight;

    render(canvas, width, height);
  }, [canvasRef.current]);

  return (
    <Display canvasRef={canvasRef} />
  );
};

export default DisplayContainer;
