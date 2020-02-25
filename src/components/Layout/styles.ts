import styled from 'styled-components';
import { minWidth } from '../../styles/tools';

export const Grid = styled.main`
  ${minWidth('large')} {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    min-height: 100vh;
  }
`;

export const ControlsColumn = styled.section`
  ${minWidth('large')} {
    grid-column: 1 / span 2;
  }
`;

export const DisplayColumn = styled.section`
  ${minWidth('large')} {
    grid-column: 3 / span 6;
  }
`;
