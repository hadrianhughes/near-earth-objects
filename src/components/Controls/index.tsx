import React, { Fragment, ChangeEvent } from 'react';
import {
  Wrapper,
  Input
} from './styles';

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
    </Wrapper>
  </Fragment>
);

export default Controls;
