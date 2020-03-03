import React, { Fragment, ChangeEvent, MouseEvent } from 'react';
import {
  Wrapper,
  DateInput,
  StyledInput as Input
} from './styles';
import { txtSearch, txtIDPlaceholder } from '../../strings';
import { SizeUnit } from '../../reducer';
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
}

const Controls = ({
  query,
  onChangeQuery,
  onSearch,
  results = [],
  sizeUnit,
  sizeUnitOptions,
  setSizeUnit
}: PropTypes) => (
  <Fragment>
    <Wrapper flex>
      <Input
        value={query}
        placeholder={txtIDPlaceholder}
        onChange={onChangeQuery} />
      <Button text={txtSearch} onClick={onSearch} />
      <DateInput type="date" label="From:" />
      <DateInput type="date" label="To:" />
      <hr />
      <Radio label="Size in:" items={sizeUnitOptions} setActive={setSizeUnit} />
    </Wrapper>
    {
      results.length > 0 ?
        <Wrapper>
          <ResultsList items={results} sizeUnit={sizeUnit} />
        </Wrapper>
        :
        null
    }
  </Fragment>
);

export default Controls;
