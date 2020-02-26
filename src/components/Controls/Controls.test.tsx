import React, { Fragment } from 'react';
import { shallow } from 'enzyme';
import Controls from './index';

describe('Controls component', () => {
  it('Should render a Fragment', () => {
    const component = shallow(
      <Controls
        query=""
        onChangeQuery={() => {}}/>
    );

    expect(component.type()).toBe(Fragment);
  });
});
