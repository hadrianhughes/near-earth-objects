import React from 'react';
import { act } from 'react-test-renderer';
import { shallow } from 'enzyme';
import Button from './index';
import { StyledButton } from './styles';

describe('Button component', () => {
  it('Should always render a StyledButton', () => {
    const component = shallow(
      <Button
        text=""
        onClick={() => {}} />
    );

    expect(component.type()).toBe(StyledButton);
  });

  it('Should accept a text prop and render the text inside the button', () => {
    const textProp = 'test text';
    const component = shallow(
      <Button
        text={textProp}
        onClick={() => {}} />
    );

    expect(component.text()).toBe(textProp);
  });

  it('Should accept an onClick function and apply it to the button', () => {
    const onClick = jest.fn();
    const component = shallow(
      <Button
        text=""
        onClick={onClick} />
    );

    act(() => {
      component.props().onClick();
    });

    expect(onClick).toHaveBeenCalled();
  });
});
