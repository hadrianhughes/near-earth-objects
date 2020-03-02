import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import Controls from './index';
import { setQuery, performSearch, setSizeUnit } from '../../actions';
import { State, SizeUnit } from '../../reducer';
import { Result } from '../ResultsList';
import { get } from '../../utils';

interface PropTypes {
  query: string;
  setQuery: Function;
  performSearch: () => any;
  results: Array<Result>;
  sizeUnit: SizeUnit;
  setSizeUnit: (SizeUnit) => any;
}

export const ControlsContainer = ({
  query,
  setQuery,
  performSearch,
  results,
  sizeUnit,
  setSizeUnit
}: PropTypes) => {
  const onChangeQuery = (e: ChangeEvent<HTMLInputElement>) =>
    setQuery(e.target.value);

  const formattedResults = results.map(r => ({
    name: r.name,
    id: r.id,
    diameter: (() => {
      const sizes = get(['estimated_diameter', sizeUnit])(r);
      const min = sizes.estimated_diameter_min;
      const max = sizes.estimated_diameter_max;

      if (min && max) return (min + max) / 2;
      if (min) return min;
      if (max) return max;
      return 0;
    })()
  }));

  const sizeUnitOptions = [
    {
      id: 'feet',
      text: 'ft',
      active: sizeUnit === SizeUnit.feet
    },
    {
      id: 'meters',
      text: 'm',
      active: sizeUnit === SizeUnit.meters
    },
    {
      id: 'miles',
      text: 'mi',
      active: sizeUnit === SizeUnit.miles
    },
    {
      id: 'kilometers',
      text: 'km',
      active: sizeUnit === SizeUnit.kilometers
    }
  ];

  const handleSizeUnit = (id: string) => () => setSizeUnit(SizeUnit[id]);

  return (
    <Controls
      query={query}
      onChangeQuery={onChangeQuery}
      onSearch={() => performSearch()}
      results={formattedResults}
      sizeUnit={sizeUnit}
      sizeUnitOptions={sizeUnitOptions}
      setSizeUnit={handleSizeUnit} />
  );
};

const mapStateToProps = (state: State) => ({
  query: state.query,
  results: state.results,
  sizeUnit: state.sizeUnit
});

const mapDispatchToProps = { setQuery, performSearch, setSizeUnit };

export default connect(mapStateToProps, mapDispatchToProps)(ControlsContainer);
