import styled from 'styled-components';
import { colors } from '../../styles/settings';
import { minWidth } from '../../styles/tools';

export const Canvas = styled.canvas`
  background-color: ${colors.blueGrey};
  display: block;
  height: 100vh;
  width: 100%;

  ${minWidth('xlarge')} {
    height: 100%;
  }
`;
