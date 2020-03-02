import React from 'react';
import { act } from 'react-test-renderer';
import { shallow } from 'enzyme';
import Radio from './index';
import { Label, Inner, Button } from './styles';

describe('Radio component', () => {
  it('Should always render a `div`', () => {
    const component = shallow(
      <Radio label="" items={[]} setActive={() => {}} />
    );

    expect(component.find('div').length).toBe(1);
  });

  it('Should render a `label` when given the label prop', () => {
    const testLabel = 'test label';
    const component = shallow(
      <Radio label={testLabel} items={[]} setActive={() => {}} />
    );

    const labelEl = component.find(Label);

    expect(labelEl.length).toBe(1);
    expect(labelEl.text()).toBe(testLabel);
  });

  it('Should render a `Button` for every item in the items array', () => {
    const items = [
      {
        id: '1',
        text: 'One',
        active: true
      },
      {
        id: '2',
        text: 'Two',
        active: false
      }
    ];

    const component = shallow(
      <Radio label="" items={items} setActive={() => {}} />
    );

    component.find(Button).forEach((btn, index) => {
      expect(btn.text()).toBe(items[index].text);
    });
  });

  it('Should call the setActive prop when a button is clicked', () => {
    const items = [
      {
        id: '1',
        text: 'One',
        active: true
      },
      {
        id: '2',
        text: 'Two',
        active: false
      }
    ];

    const setActive = jest.fn();

    const component = shallow(
      <Radio label="" items={items} setActive={setActive} />
    );

    act(() => {
      component.find(Button).forEach(btn => {
        btn.simulate('click');
      });
    });

    items.forEach(item => {
      expect(setActive).toHaveBeenCalledWith(item.id);
    });
  });
});
