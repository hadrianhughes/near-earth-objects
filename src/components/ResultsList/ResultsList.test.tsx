import React from 'react';
import { shallow } from 'enzyme';
import { SizeUnit } from '../../reducer';
import { size } from '../../utils';
import ResultsList from './index';
import { ItemHeading } from './styles';

describe('ResultsList component', () => {
  const items = [
    {
      id: '1',
      name: 'Item 1',
      diameter: 100
    },
    {
      id: '2',
      name: 'Item 2',
      diameter: 200
    }
  ];

  const TEST_SIZE_UNIT = SizeUnit.feet;

  it('Should always render an `ul` element', () => {
    const component = shallow(
      <ResultsList items={[]} sizeUnit={TEST_SIZE_UNIT} />
    );

    expect(component.type()).toBe('ul');
  });

  it('Should render an `li` for each item', () => {
    const component = shallow(
      <ResultsList items={items} sizeUnit={TEST_SIZE_UNIT} />
    );

    expect(component.children().length).toBe(2);
  });

  it('Should render an `ItemHeading` for each item name', () => {
    const component = shallow(
      <ResultsList items={items} sizeUnit={TEST_SIZE_UNIT} />
    );

    component.children().forEach((item, index) => {
      expect(
        item
          .find(ItemHeading)
          .text()
      ).toBe(items[index].name);
    });
  });

  it('Should render a table for each item containing diameter', () => {
    const component = shallow(
      <ResultsList items={items} sizeUnit={TEST_SIZE_UNIT} />
    );

    component.children().forEach((item, index) => {
      const table = item.find('table');

      expect(table.length).toBe(1);
      expect(
        table
          .find('td')
          .last()
          .text()
      ).toBe(size(TEST_SIZE_UNIT)(items[index].diameter));
    });
  });
});
