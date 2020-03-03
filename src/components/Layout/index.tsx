import React from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  ControlsColumn,
  DisplayColumn,
  ToggleButton
} from './styles';
import ControlsContainer from '../Controls/ControlsContainer';
import Display from '../Display';

interface PropTypes {
  isControlsOpen: boolean;
  onSetControls: () => void;
}

const Layout = ({ isControlsOpen, onSetControls }: PropTypes) => (
  <Grid>
    <ControlsColumn showMobile={isControlsOpen}>
      <ControlsContainer />
    </ControlsColumn>
    <DisplayColumn>
      <Display />
    </DisplayColumn>
    <ToggleButton onClick={onSetControls} open={isControlsOpen}>Toggle</ToggleButton>
  </Grid>
);

export default Layout;
