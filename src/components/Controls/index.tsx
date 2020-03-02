import React, { Fragment, ChangeEvent, MouseEvent } from 'react';
import {
  Wrapper,
  Input
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
        type="text"
        value={query}
        placeholder={txtIDPlaceholder}
        onChange={onChangeQuery} />
      <Button text={txtSearch} onClick={onSearch} />
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
