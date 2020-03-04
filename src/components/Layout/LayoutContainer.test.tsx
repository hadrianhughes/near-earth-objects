import React from 'react';
import { act } from 'react-test-renderer';
import { shallow } from 'enzyme';
import Layout from './index';
import { LayoutContainer } from './LayoutContainer';

jest.mock('../Controls/ControlsContainer', () => () => <div />);

describe('LayoutContainer component', () => {
  const setControlsOpenMock = jest.fn();

  const component = shallow(
    <LayoutContainer
      isControlsOpen={true}
      setControlsOpen={setControlsOpenMock} />
  );

  it('Should render `Layout`', () => {
    expect(component.find(Layout).dive().length).toBe(1);
  });

  it('Should pass an isControlsOpen prop to `Layout`', () => {
    expect(component.find(Layout).props().isControlsOpen).toBe(true);
  });

  it('Should pass an onSetControls prop to `Layout` which defers to setControlsOpen', () => {
    act(() => {
      component.find(Layout).props().onSetControls();
    });

    expect(setControlsOpenMock).toHaveBeenCalled();
  })
});
