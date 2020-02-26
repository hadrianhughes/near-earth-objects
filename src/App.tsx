import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import testSaga from './sagas/temp';
import searchSaga from './sagas/search';
import Layout from './components/Layout';
import GlobalStyles from './styles/global';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(testSaga);
sagaMiddleware.run(searchSaga);

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Layout />
  </Provider>
);

export default App;
