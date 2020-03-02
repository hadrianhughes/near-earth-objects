import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  ControlsColumn,
  DisplayColumn
} from './styles';
import ControlsContainer from '../Controls/ControlsContainer';
import Display from '../Display';

interface PropTypes {
  isControlsOpen: boolean;
  onSetControls: () => void;
}

const Layout = ({ isControlsOpen, onSetControls }: PropTypes) => (
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
