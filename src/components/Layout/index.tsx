import React from 'react';
import PropTypes from 'prop-types';
import { createBEM } from '../../utils';
import {
  Grid,
  ControlsColumn,
  DisplayColumn
} from './styles';

const Layout = (): HTMLElement => (
  <Grid>
    <ControlsColumn></ControlsColumn>
    <DisplayColumn></DisplayColumn>
  </Grid>
);

export default Layout;
