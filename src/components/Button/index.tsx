import React, { MouseEvent } from 'react';
import { StyledButton } from './styles';

interface PropTypes {
  text: string;
  onClick: (MouseEvent) => any;
}

const Button = ({ text, onClick }: PropTypes) => (
  <StyledButton onClick={onClick}>{text}</StyledButton>
);

export default Button;
