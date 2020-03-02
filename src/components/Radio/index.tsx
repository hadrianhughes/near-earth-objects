import React from 'react';

export interface RadioItem {
  id: string;
  text: string;
}

interface PropTypes {
  items: Array<RadioItem>;
  setActive: (string) => any;
}

const Radio = ({ items = [], setActive }: PropTypes) => (
  <div>
    {
      items.map(item =>
        <button key={item.id} onClick={setActive(item.id)}>{item.text}</button>
      )
    }
  </div>
);

export default Radio;
