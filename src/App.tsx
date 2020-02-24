import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import Layout from './components/Layout';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Layout />
  </Provider>
);

export default App;
