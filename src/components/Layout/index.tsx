import React from 'react';
import PropTypes from 'prop-types';
import { createBEM } from '../../utils';

const BEM = createBEM('Layout');

const Layout = (): HTMLElement => (
  <main className={BEM()}>
    <section className={BEM('panel')}></section>
    <section className={BEM('display')}></section>
  </main>
);

export default Layout;
