import React from 'react';
import { shallow } from 'enzyme';
import ResultsList from './index';
import { Item } from './styles';

describe('ResultsList component', () => {
  it('Should always render an `ul` element', () => {
    const component = shallow(
      <ResultsList
        items={[]} />
    );

    expect(component.type()).toBe('ul');
  });

  it('Should accept an items prop and render an `li` for each item', () => {
  });
});
