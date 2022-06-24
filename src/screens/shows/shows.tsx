import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listSelector } from 'store/shows/show.selector';
import showsSlice from 'store/shows/shows.slice';

export default function ShowsList() {
  const list = useSelector(listSelector);
  const dispatch = useDispatch();

  useEffect(
    () => {
      dispatch(showsSlice.actions.getList());
    },
    [],
  );

  useEffect(
    () => {
      console.log(list);
    },
    [list],
  );
  return (
    <h1>Hello World!</h1>
  );
}
