import styled, { css } from 'styled-components';
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
    display: block;
    grid-column: 1 / span 2;
  }
`;

export const DisplayColumn = styled.section`
  ${minWidth('large')} {
    grid-column: 3 / span 6;
  }
`;
