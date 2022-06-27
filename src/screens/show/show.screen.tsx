import Header from 'components/header/header';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Show() {
  const param = useParams();

  useEffect(
    () => {
      console.log(param, 'param');
    },
    [param],
  );

  return (
    <Header />
  );
}
