import React from 'react';
import { connect } from 'react-redux';
import { setControlsOpen } from '../../actions';
import Layout from './index';

interface PropTypes {
  isControlsOpen: boolean;
  setControlsOpen: (boolean) => void;
}

export const LayoutContainer = ({
  isControlsOpen,
  setControlsOpen
}: PropTypes) => {
  const handleSetControls = () => setControlsOpen(!isControlsOpen);

  return (
    <Layout
      isControlsOpen={isControlsOpen}
      onSetControls={handleSetControls} />
  );
};

const mapStateToProps = state => ({
  isControlsOpen: state.isControlsOpen
});

const mapDispatchToProps = { setControlsOpen };

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
