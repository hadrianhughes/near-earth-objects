import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import Layout from './components/Layout';
import GlobalStyles from './styles/global';

const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <GlobalStyles />
    <Layout />
  </Provider>
);

export default App;
