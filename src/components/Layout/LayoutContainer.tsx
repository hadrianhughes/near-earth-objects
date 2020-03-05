import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { initialize, setControlsOpen } from '../../actions';
import Layout from './index';

interface PropTypes {
  initialize: () => void;
  isControlsOpen: boolean;
  setControlsOpen: (boolean) => void;
}

export const LayoutContainer = ({
  initialize,
  isControlsOpen,
  setControlsOpen
}: PropTypes) => {
  useEffect(() => {
    initialize();
  }, []);

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

const mapDispatchToProps = { setControlsOpen, initialize };

export default connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
