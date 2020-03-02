import styled, { css } from 'styled-components';
import { colors } from '../../styles/settings';
import { rem } from '../../styles/tools';

export const Label = styled.span`
  color: ${colors.darkGrey};
  display: inline-block;
  margin-right: ${rem(10)};
  vertical-align: middle;
`;

export const Inner = styled.div`
  background-color: ${colors.white};
  border: 1px solid ${colors.lightGrey};
  border-radius: ${rem(5)};
  display: inline-block;
  height: 100%;
  overflow: hidden;
  vertical-align: middle;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: inline-block;
  height: 100%;
  vertical-align: top;

  ${props => props.active ? css`
    background-color: ${colors.lighterGrey};
  ` : ''}
`;
