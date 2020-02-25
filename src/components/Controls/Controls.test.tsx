import React, { Fragment } from 'react';
import { create, act } from 'react-test-renderer';
import { dive } from '../../utils';
import Controls from './index';

describe('Controls component', () => {
  it('Should render an input', () => {
    const component = create(
      <Controls
        query=""
        onChangeQuery={() => {}}/>
    ).root;

    expect(() => component.findByType('input')).not.toThrow();
  });

  it('Should fire the `onChangeQuery` prop when the input is used', () => {
    const onChangeQuery = jest.fn();

    const component = create(
      <Controls
        query=""
        onChangeQuery={onChangeQuery} />
    ).root;

    const expectedOutput = {
      target: {
        value: 'foo'
      }
    };

    act(() => {
      const inputEl = component.findByType('input');
      inputEl.props.onChange(expectedOutput);
    });

    expect(onChangeQuery).toHaveBeenCalledWith(expectedOutput);
  });
});
