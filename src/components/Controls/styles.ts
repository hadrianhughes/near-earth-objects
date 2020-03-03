import styled, { css } from 'styled-components';
import { rem, minWidth } from '../../styles/tools';
import { colors } from '../../styles/settings';

export const Wrapper = styled.div`
  padding: ${rem(20)};

  ${minWidth('xlarge')} {
    padding: ${rem(10)};
  }

  ${props => props.flex ? css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  ` : ''}
`;

const inputStyles = css`
  border: 1px solid ${colors.lightGrey};
  border-radius: ${rem(10)};
  box-sizing: border-box;
  font-size: ${rem(16)};
  padding: ${rem(10)};
`;

export const Input = styled.input`
  ${inputStyles}

  flex: 1;
  margin-right: ${rem(10)};
  width: 100%;
`;

export const DatesWrapper = styled.div`
  display: flex;
  margin-top: ${rem(10)};
  width: 100%;
`;

export const DateInput = styled.input`
  ${inputStyles}

  &:first-child {
    margin-right: ${rem(10)};
  }
`;
