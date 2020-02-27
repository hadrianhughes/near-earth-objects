import React, { Fragment, ChangeEvent, MouseEvent } from 'react';
import {
  Wrapper,
  Input
} from './styles';
import { txtSearch, txtIDPlaceholder } from '../../strings';
import Button from '../Button';

interface PropTypes {
  query: string;
  onChangeQuery: (ChangeEvent) => any;
  onSearch: (MouseEvent) => any;
  results: Array<object>;
}

const Controls = ({
  query,
  onChangeQuery,
  onSearch,
  results
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
    {console.log(results)}
  </Fragment>
);

export default Controls;
