import React from 'react';
import { act } from 'react-test-renderer';
import { shallow } from 'enzyme';
import Layout from './index';
import {
  Grid,
  ControlsColumn,
  DisplayColumn,
  ToggleButton
} from './styles';

describe('Layout component', () => {
  const mockSetControls = jest.fn();
  const component = shallow(<Layout isControlsOpen={false} onSetControls={mockSetControls} />);

  it('Should always render a `Grid`', () => {
    expect(component.type()).toBe(Grid);
  });

  it('Should always render a `ControlsColumn` inside the `Grid`', () => {
    expect(component.find(ControlsColumn).length).toBe(1);
  });

  it('Should always render a `DisplayColumn` inside the `Grid`', () => {
    expect(component.find(DisplayColumn).length).toBe(1);
  });

  it('Should always render a `ToggleButton` inside the `Grid`', () => {
    expect(component.find(ToggleButton).length).toBe(1);
  });

  it('Should call the `onSetControls` prop when the `ToggleButton` is clicked', () => {
    act(() => {
      component.find(ToggleButton).simulate('click');
    });

    expect(mockSetControls).toHaveBeenCalled();
  });
});
