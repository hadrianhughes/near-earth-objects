import styled, { css } from 'styled-components';
import { rem } from '../../styles/tools';
import { colors } from '../../styles/settings';

export const Wrapper = styled.div`
  padding: ${rem(10)};

  ${props => props.flex ? css`
    display: flex;
    justify-content: space-between;
  ` : ''}
`;

export const Input = styled.input`
  border: 1px solid ${colors.lightGrey};
  border-radius: ${rem(10)};
  box-sizing: border-box;
  font-size: ${rem(16)};
  padding: ${rem(10)};
  width: 60%;
`;
