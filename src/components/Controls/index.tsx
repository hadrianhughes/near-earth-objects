import React, { Fragment, ChangeEvent, MouseEvent } from 'react';
import {
  Wrapper,
  DateInput,
  StyledInput as Input
} from './styles';
import { txtSearch, txtIDPlaceholder } from '../../strings';
import { SizeUnit } from '../../types';
import Button from '../Button';
import Radio, { RadioItem } from '../Radio';
import ResultsList, { Result } from '../ResultsList';

interface PropTypes {
  query: string;
  onChangeQuery: (ChangeEvent) => any;
  onSearch: (MouseEvent) => any;
  results: Array<Result>;
  sizeUnit: SizeUnit;
  sizeUnitOptions: Array<RadioItem>;
  setSizeUnit: (string) => any;
  date: string;
  setDate: (ChangeEvent) => void;
}

const Controls = ({
  query,
  onChangeQuery,
  onSearch,
  results = [],
  sizeUnit,
  sizeUnitOptions,
  setSizeUnit,
  date,
  setDate
}: PropTypes) => (
  <Fragment>
    <Wrapper wrap>
      <Input
        value={query}
        placeholder={txtIDPlaceholder}
        onChange={onChangeQuery} />
      <Button text={txtSearch} onClick={onSearch} />
      <DateInput
        type="date"
        label="Week of:"
        value={date}
        onChange={setDate} />
      <hr />
      <Radio label="Size in:" items={sizeUnitOptions} setActive={setSizeUnit} />
    </Wrapper>
    {
      results.length > 0 ?
        <Wrapper stretch>
          <ResultsList items={results} sizeUnit={sizeUnit} />
        </Wrapper>
        :
        null
    }
  </Fragment>
);

export default Controls;
