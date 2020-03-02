import styled, { css } from 'styled-components';
import { colors } from '../../styles/settings';
import { minWidth, rem } from '../../styles/tools';

export const Grid = styled.main`
  ${minWidth('xlarge')} {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    min-height: 100vh;
  }
`;

export const ControlsColumn = styled.section`
  background-color: ${colors.white};
  box-sizing: border-box;
  display: none;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-end;
  padding-bottom: ${rem(50)};

  ${props => props.show ? css`display: flex;` : ''}

  ${minWidth('xlarge')} {
    border-right: 5px solid ${colors.lightGrey};
    display: block;
    height: auto;
    padding: 0;
    grid-column: 1 / span 2;
  }
`;

export const DisplayColumn = styled.section`
  background-color: #474550;

  ${minWidth('xlarge')} {
    grid-column: 3 / span 6;
  }
`;
