import React from 'react';
import renderer from 'react-test-renderer';
import ShallowRenderer from 'react-test-renderer/shallow';
import { dive } from '../../utils';
import Layout from './index';
import {
  Grid,
  ControlsColumn,
  DisplayColumn
} from './styles';

describe('Layout component', () => {
  const r = new ShallowRenderer();
  r.render(<Layout />);
  const component = r.getRenderOutput();

  it('Should always render a Grid', () => {
    expect(component.type).toBe(Grid);
  });

  it('Should always render a ControlsColumn and DisplayColumn inside the Grid', () => {
    expect(component.props.children.length).toBe(2);
    expect(component.props.children[0].type).toBe(ControlsColumn);
    expect(component.props.children[1].type).toBe(DisplayColumn);
  });
});
