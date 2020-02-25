import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import Controls from './index';
import { setQuery } from '../../actions';
import { State } from '../../reducer';

interface PropTypes {
  query: string;
  setQuery: Function;
}

export const ControlsContainer = ({ query, setQuery }: PropTypes) => {
  const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  return (
    <Controls
      query={query}
      onChangeQuery={onChangeQuery} />
  );
};

const mapStateToProps = (state: State) => ({
  query: state.query
});

const mapDispatchToProps = { setQuery };

export default connect(mapStateToProps, mapDispatchToProps)(ControlsContainer);
