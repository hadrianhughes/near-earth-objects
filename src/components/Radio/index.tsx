import React from 'react';
import { Inner, Button, Label } from './styles';

export interface RadioItem {
  id: string;
  text: string;
  active: boolean;
}

interface PropTypes {
  label: string;
  items: Array<RadioItem>;
  setActive: (string) => any;
}

const Radio = ({ label, items = [], setActive }: PropTypes) => (
  <div>
    {
      label ?
        <Label>{label}</Label>
        :
        null
    }
    <Inner>
      {
        items.map(item =>
          <Button
            key={item.id}
            active={item.active}
            onClick={setActive(item.id)}>{item.text}</Button>
        )
      }
    </Inner>
  </div>
);

export default Radio;
