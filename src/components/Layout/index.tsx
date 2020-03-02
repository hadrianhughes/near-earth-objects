import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  ControlsColumn,
  DisplayColumn
} from './styles';
import ControlsContainer from '../Controls/ControlsContainer';
import Display from '../Display';

const Layout = () => (
  <Grid>
    <ControlsColumn>
      <ControlsContainer />
    </ControlsColumn>
    <DisplayColumn>
      <Display />
    </DisplayColumn>
  </Grid>
);

export default Layout;
