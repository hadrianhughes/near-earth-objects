import { takeEvery, select, put } from 'redux-saga/effects';
import { apiSearchByID } from '../api';
import { get } from '../utils';

function* performSearch () {
  const query = yield select(get('query'));
  const result = yield apiSearchByID(query);

  yield put({ type: 'SET_RESULTS', payload: [result] });
}

export default function* searchByID () {
  yield takeEvery('SEARCH_BY_ID', performSearch);
}
