import React from 'react';
import { shallow } from 'enzyme';
import { SizeUnit } from '../../types';
import { size } from '../../utils';
import ResultsList from './index';
import { ItemHeading, Details } from './styles';

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
    },
    {
      id: '3',
      name: 'Item 3',
      diameter: null
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

    expect(component.children().length).toBe(items.length);
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

  it('Should render a `Details` table for each item containing diameter', () => {
    const component = shallow(
      <ResultsList items={items} sizeUnit={TEST_SIZE_UNIT} />
    );

    component.children().forEach((item, index) => {
      const table = item.find(Details);

      if (items[index].diameter) {
        expect(table.length).toBe(1);
        expect(
          table
            .find('td')
            .last()
            .text()
        ).toBe(size(TEST_SIZE_UNIT)(items[index].diameter));
      } else {
        expect(table.length).toBe(0);
      }
    });
  });
});
