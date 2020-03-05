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
  id?: string;
  maxDate?: string;
  minDate?: string;
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
  onChange,
  maxDate,
  minDate
}: PropTypes) => {
  const hasLabel = Boolean(label);

  const inputEl =
    <StyledInput
      className={hasLabel ? '' : className}
      type={type}
      value={value}
      onChange={onChange}
      id={id}
      max={maxDate}
      min={minDate}
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
