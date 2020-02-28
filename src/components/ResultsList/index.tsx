import React from 'react';
import { get } from '../../utils';
import { ItemButton } from './styles';

export interface Result {
  id: string;
  name: string;
  diameter: number;
}

interface PropTypes {
  items: Array<Result>;
}

const ResultsList = ({ items = [] }: PropTypes) => (
  <ul>
    {
      items.map(item =>
        <li key={item.id}>
          <ItemButton>
            <h3>{item.name}</h3>
            <div>
              <span>Diameter: {item.diameter}</span>
            </div>
          </ItemButton>
        </li>
      )
    }
  </ul>
);

export default ResultsList;
