import styled, { css } from 'styled-components';
import { colors } from '../../styles/settings';
import { minWidth } from '../../styles/tools';

export const Grid = styled.main`
  ${minWidth('large')} {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    min-height: 100vh;
  }
`;

export const ControlsColumn = styled.section`
  display: none;

  ${props => props.show ? css`display: block;` : ''}

  ${minWidth('large')} {
    border-right: 5px solid ${colors.lightGrey};
    display: block;
    grid-column: 1 / span 2;
  }
`;

export const DisplayColumn = styled.section`
  background-color: #474550;

  ${minWidth('large')} {
    grid-column: 3 / span 6;
  }
`;
