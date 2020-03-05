import React from 'react';
import { get, size } from '../../utils';
import { SizeUnit } from '../../types';
import {
  List,
  Item,
  ItemButton,
  ItemHeading,
  Details,
  DetailLabel
} from './styles';

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
  <List>
    {
      items.map(item =>
        <Item key={item.id}>
          <ItemButton>
            <ItemHeading>{item.name}</ItemHeading>
            {
              item.diameter ?
                <Details>
                  <tbody>
                    <tr>
                      <DetailLabel>Diameter: </DetailLabel>
                      <td>{size(sizeUnit)(item.diameter)}</td>
                    </tr>
                  </tbody>
                </Details>
                :
                null
            }
          </ItemButton>
        </Item>
      )
    }
  </List>
);

export default ResultsList;
