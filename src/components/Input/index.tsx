import React from 'react';
import {
  StyledInput,
  StyledLabel
} from './styles';

interface PropTypes {
  className?: string;
  type?: string;
  placeholder?: string;
  label?: string;
  id: string;
  value: string;
  onChange: (string) => void;
}

const Input = ({
  className,
  type = 'text',
  placeholder,
  id,
  label,
  value,
  onChange
}: PropTypes) => {
  const hasLabel = Boolean(label);

  const inputEl =
    <StyledInput
      className={hasLabel ? '' : className}
      type={type}
      value={value}
      onChange={onChange}
      id={id}
      placeholder={placeholder} />;

  if (label) {
    return (
      <StyledLabel htmlFor={id} className={className}>
        <span>{label}</span>
        {inputEl}
      </StyledLabel>
    );
  }

  return inputEl;
};

export default Input;
