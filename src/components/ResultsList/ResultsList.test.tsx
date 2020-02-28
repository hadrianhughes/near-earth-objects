import React from 'react';
import { shallow } from 'enzyme';
import ResultsList from './index';

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

  it('Should always render an `ul` element', () => {
    const component = shallow(
      <ResultsList items={[]} />
    );

    expect(component.type()).toBe('ul');
  });

  it('Should render an `li` for each item', () => {
    const component = shallow(
      <ResultsList items={items} />
    );

    expect(component.children().length).toBe(2);
  });

  it('Should render an `h3` tag for each item name', () => {
    const component = shallow(
      <ResultsList items={items} />
    );

    component.children().forEach((item, index) => {
      expect(item.find('h3').text()).toBe(items[index].name);
    });
  });

  it('Should render a span for the diameter of each item', () => {
    const component = shallow(
      <ResultsList items={items} />
    );

    component.children().forEach((item, index) => {
      expect(item.find('span').text()).toBe(`Diameter: ${items[index].diameter}`);
    });
  });
});
