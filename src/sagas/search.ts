import { takeEvery, select, put } from 'redux-saga/effects';
import { apiSearchByID } from '../api';

const getQuery = state => state.query;

function* performSearch () {
  const query = yield select(getQuery);
  const result = yield apiSearchByID(query);

  yield put({ type: 'SET_RESULTS', payload: result });
}

export default function* searchSaga () {
  yield takeEvery('PERFORM_SEARCH', performSearch);
}
