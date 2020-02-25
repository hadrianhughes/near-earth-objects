import React from 'react';
import PropTypes from 'prop-types';
import { createBEM } from '../../utils';
import { Grid, Controls, Display } from './styles';

const BEM = createBEM('Layout');

const Layout = (): HTMLElement => (
  <Grid className={BEM()}>
    <Controls className={BEM('panel')}></Controls>
    <Display className={BEM('display')}></Display>
  </Grid>
);

export default Layout;
