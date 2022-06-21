import React from 'react';
import { InputStyled } from './input.styled';
import { Props } from './input.type';

export default function Input({
  type,
  name,
  placeholder,
  onChange,
} : Props) {
  return (
    <InputStyled
      type={type}
      name={name}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}
