import React, { Fragment, ChangeEvent } from 'react';

interface PropTypes {
  query: string;
  onChangeQuery: (ChangeEvent) => any;
}

const Controls = ({ onChangeQuery }: PropTypes) => (
  <Fragment>
    <div>
      <input type="text" onChange={onChangeQuery} />
    </div>
  </Fragment>
);

export default Controls;
