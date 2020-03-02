import React from 'react';
import { get, size } from '../../utils';
import { SizeUnit } from '../../reducer';
import { ItemButton, ItemHeading, DetailLabel } from './styles';

export interface Result {
  id: string;
  name: string;
  diameter: number;
}

interface PropTypes {
  items: Array<Result>;
  sizeUnit: SizeUnit;
}

const ResultsList = ({ items = [], sizeUnit }: PropTypes) => (
  <ul>
    {
      items.map(item =>
        <li key={item.id}>
          <ItemButton>
            <ItemHeading>{item.name}</ItemHeading>
            {
              item.diameter ?
                <table>
                  <tbody>
                    <tr>
                      <DetailLabel>Diameter: </DetailLabel>
                      <td>{size(sizeUnit)(item.diameter)}</td>
                    </tr>
                  </tbody>
                </table>
                :
                null
            }
          </ItemButton>
        </li>
      )
    }
  </ul>
);

export default ResultsList;
