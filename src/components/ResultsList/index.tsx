import React from 'react';

export interface Result {
  id: string;
  name: string;
}

interface PropTypes {
  items: Array<Result>;
}

const ResultsList = ({ items = [] }: PropTypes) => (
  <ul>
    {
      items.map(item => <li key={item.id}>{item.name}</li>)
    }
  </ul>
);

export default ResultsList;
