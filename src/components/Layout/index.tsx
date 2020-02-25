import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  ControlsColumn,
  DisplayColumn
} from './styles';
import ControlsContainer from '../Controls/ControlsContainer';

const Layout = () => (
  <Grid>
    <ControlsColumn>
      <ControlsContainer />
    </ControlsColumn>
    <DisplayColumn></DisplayColumn>
  </Grid>
);

export default Layout;
