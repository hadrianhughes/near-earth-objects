import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducer';
import sagas from './sagas';

import Layout from './components/Layout';
import GlobalStyles from './styles/global';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);

sagas.forEach(sagaMiddleware.run);

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Layout />
  </Provider>
);

export default App;
