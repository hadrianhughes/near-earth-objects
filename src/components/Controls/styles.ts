import styled, { css } from 'styled-components';
import { rem } from '../../styles/tools';
import { colors } from '../../styles/settings';

export const Wrapper = styled.div`
  padding: ${rem(10)};

  ${props => props.flex ? css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  ` : ''}
`;

export const Input = styled.input`
  border: 1px solid ${colors.lightGrey};
  border-radius: ${rem(10)};
  box-sizing: border-box;
  flex: 1;
  font-size: ${rem(16)};
  margin-right: ${rem(10)};
  padding: ${rem(10)};
`;
