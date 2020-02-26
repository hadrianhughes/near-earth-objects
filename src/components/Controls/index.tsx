import React, { Fragment, ChangeEvent } from 'react';
import {
  Wrapper,
  Input
} from './styles';
import { txtSearch } from '../../strings';
import Button from '../Button';

interface PropTypes {
  query: string;
  onChangeQuery: (ChangeEvent) => any;
}

const Controls = ({ query, onChangeQuery }: PropTypes) => (
  <Fragment>
    <Wrapper flex>
      <Input
        type="text"
        value={query}
        onChange={onChangeQuery} />
      <Button text={txtSearch} onClick={() => console.log('clicked')} />
    </Wrapper>
  </Fragment>
);

export default Controls;
