import React, { Fragment, ChangeEvent, MouseEvent } from 'react';
import {
  Wrapper,
  Input
} from './styles';
import { txtSearch, txtIDPlaceholder } from '../../strings';
import { SizeUnit } from '../../reducer';
import Button from '../Button';
import ResultsList, { Result } from '../ResultsList';

interface PropTypes {
  query: string;
  onChangeQuery: (ChangeEvent) => any;
  onSearch: (MouseEvent) => any;
  results: Array<Result>;
  sizeUnit: SizeUnit;
}

const Controls = ({
  query,
  onChangeQuery,
  onSearch,
  results = [],
  sizeUnit
}: PropTypes) => (
  <Fragment>
    <Wrapper flex>
      <Input
        type="text"
        value={query}
        placeholder={txtIDPlaceholder}
        onChange={onChangeQuery} />
      <Button text={txtSearch} onClick={onSearch} />
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
