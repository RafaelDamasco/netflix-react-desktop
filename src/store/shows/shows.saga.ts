import { AxiosResponse } from 'axios';
import { call, put, takeLatest } from 'redux-saga/effects';
import showsService from 'services/shows/shows';
import showsSlice, { showsActions } from './shows.slice';
import { List } from './shows.type';

function* getList() {
  try {
    yield put(showsActions.setSettings({ loading: true }));
    const response: AxiosResponse<List> = yield call(showsService().getList);

    const showsList = response.data.reduce((accumulator, show) => {
      // @ts-ignore
      const categoryKey = accumulator[show.category] || [];
      return {
        ...accumulator,
        [show.category]: categoryKey.concat(show),
      };
    }, {});

    yield put(showsActions.setData({ ...showsList }));
    yield put(showsActions.setError(''));
  } catch (e) {
    yield put(showsActions.setError('Error'));
  } finally {
    yield put(showsActions.setSettings({ loading: false }));
  }
}

const showsSaga = [
  takeLatest('shows/getList', getList()),
];

export default showsSaga;
