import React, { Fragment } from 'react';
import { act } from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { dive } from '../../utils';
import Controls from './index';

describe('Controls component', () => {
  it('Should render a Fragment', () => {
    const r = new ShallowRenderer();
    r.render(
      <Controls
        query=""
        onChangeQuery={() => {}}/>
    );

    const component = r.getRenderOutput();

    expect(component.type).toBe(Fragment);
  });
});
