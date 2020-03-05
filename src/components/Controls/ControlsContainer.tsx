import React, { ChangeEvent } from 'react';
import { connect } from 'react-redux';
import Controls from './index';
import {
  setQuery,
  performSearch,
  setSizeUnit,
  setDate,
} from '../../actions';
import { State } from '../../reducer';
import { SizeUnit, RawResult } from '../../types';
import {
  get,
  calculateAverageDiameter,
  toFixed,
  changeDateBy,
  compose,
  formatDate,
  makeSort
} from '../../utils';

interface PropTypes {
  query: string;
  setQuery: Function;
  performSearch: () => any;
  results: Array<RawResult>;
  sizeUnit: SizeUnit;
  setSizeUnit: (SizeUnit) => void;
  date: string;
  setDate: (string) => void;
}

export const ControlsContainer = ({
  query,
  setQuery,
  performSearch,
  results,
  sizeUnit,
  setSizeUnit,
  date,
  setDate
}: PropTypes) => {
  const onChangeQuery = (e: ChangeEvent<HTMLInputElement>): void =>
    setQuery(e.target.value);

  const formattedResults =
    results
      .map(r => ({
        name: r.name,
        id: r.id,
        diameter: (() => {
          const sizes = get(['estimated_diameter', sizeUnit])(r);
          const average = calculateAverageDiameter(sizes.estimated_diameter_min, sizes.estimated_diameter_max);
          return toFixed(2)(average);
        })()
      }))
      .sort(makeSort(get('diameter')));

  const maxDate: string = compose(formatDate, changeDateBy(-7))(new Date());

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
  const handleChangeDate = (e: ChangeEvent) => setDate((e.target as HTMLInputElement).value);

  return (
    <Controls
      query={query}
      onChangeQuery={onChangeQuery}
      onSearch={() => performSearch()}
      results={formattedResults}
      sizeUnit={sizeUnit}
      sizeUnitOptions={sizeUnitOptions}
      setSizeUnit={handleSizeUnit}
      maxDate={maxDate}
      date={date}
      setDate={handleChangeDate} />
  );
};

const mapStateToProps = (state: State) => ({
  query: state.query,
  results: state.results,
  sizeUnit: state.sizeUnit,
  date: state.date
});

const mapDispatchToProps = {
  setQuery,
  performSearch,
  setSizeUnit,
  setDate
};

export default connect(mapStateToProps, mapDispatchToProps)(ControlsContainer);
