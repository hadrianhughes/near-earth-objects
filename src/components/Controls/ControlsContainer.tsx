import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import Controls from './index';
import { setQuery, performSearch } from '../../actions';
import { State } from '../../reducer';

interface PropTypes {
  query: string;
  setQuery: Function;
  performSearch: Function;
  results: object;
}

export const ControlsContainer = ({
  query,
  setQuery,
  performSearch,
  results
}: PropTypes) => {
  // TODO: REMOVE
  console.log(results);

  const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  return (
    <Controls
      query={query}
      onChangeQuery={onChangeQuery}
      onSearch={() => performSearch()} />
  );
};

const mapStateToProps = (state: State) => ({
  query: state.query,
  results: state.results
});

const mapDispatchToProps = { setQuery, performSearch };

export default connect(mapStateToProps, mapDispatchToProps)(ControlsContainer);
