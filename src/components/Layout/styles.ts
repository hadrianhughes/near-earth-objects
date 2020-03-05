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
  left: 0;
  max-height: 100vh;
  padding-bottom: ${rem(100)};
  position: fixed;
  top: 0;
  width: 100%;

  ${props => props.showMobile ? css`display: flex;` : ''}

  ${minWidth('xlarge')} {
    border-right: 5px solid ${colors.lightGrey};
    display: flex;
    height: auto;
    grid-column: 1 / span 2;
    padding: 0;
    position: static;
    width: auto;
  }
`;

export const DisplayColumn = styled.section`
  ${minWidth('xlarge')} {
    grid-column: 3 / span 6;
  }
`;

export const ToggleButton = styled.button`
  background: none;
  border: 10px solid white;
  border-radius: 50%;
  bottom: ${rem(20)};
  height: ${rem(50)};
  position: fixed;
  right: ${rem(20)};
  text-indent: -9999px;
  width: ${rem(50)};

  ${props => props.open ? css`
    border: 10px solid ${colors.darkGrey};
  ` : ''}

  ${minWidth('xlarge')} {
    display: none;
  }
`;
