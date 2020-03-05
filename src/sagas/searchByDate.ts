import { debounce, select, put } from 'redux-saga/effects';
import { apiSearchByDate } from '../api';
import {
  get,
  changeDateBy,
  compose,
  stringToDate,
  formatDate,
  responseToResults
} from '../utils';

function* performSearch () {
  const startString = yield select(get('date'));

  const startDate = stringToDate(startString);
  const endDate = changeDateBy(7)(startDate);
  const endString = formatDate(endDate);

  const response = yield apiSearchByDate(startString, endString);
  const results = responseToResults(response);

  yield put({ type: 'SET_RESULTS', payload: results });
}

export default function* searchByDate () {
  yield debounce(1000, 'SET_DATE', performSearch);
}
