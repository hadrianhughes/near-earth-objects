import React from 'react';
import Controls from './index';

interface PropTypes {
  query: string;
  onChangeQuery: Function;
}

const ControlsContainer = ({ query, onChangeQuery }: PropTypes) => {
  return (
    <Controls
      query={query}
      onChangeQuery={onChangeQuery} />
  );
};

export default ControlsContainer;
