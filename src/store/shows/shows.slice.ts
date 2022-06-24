import { createSlice } from '@reduxjs/toolkit';
import { Shows } from './shows.type';
import reducers from './shows.reducers';

const initialState: Shows = {
  data: { },
  settings: {
    loading: false,
  },
  error: '',
};

const showsSlice = createSlice({
  name: 'shows',
  reducers,
  initialState,
});

const { actions: showsActions, reducer: showsReducer } = showsSlice;

export {
  showsActions,
  showsReducer,
};

export default showsSlice;
