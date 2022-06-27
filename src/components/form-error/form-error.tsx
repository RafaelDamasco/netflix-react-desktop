import React from 'react';
import { Error } from './form-error.styled';
import { Props } from './form-error.type';

export default function FormError({ message }: Props) {
  return (
    <Error>
      {message}
    </Error>
  );
}
