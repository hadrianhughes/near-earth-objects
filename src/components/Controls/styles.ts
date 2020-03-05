import styled, { css } from 'styled-components';
import { rem, minWidth } from '../../styles/tools';
import { colors } from '../../styles/settings';
import Input from '../Input';

export const Wrapper = styled.div`
  display: flex;
  padding: ${rem(20)};

  ${minWidth('xlarge')} {
    padding: ${rem(10)};
  }

  ${props => props.wrap ? css`
    flex-wrap: wrap;
    justify-content: space-between;
  ` : ''}

  ${props => props.stretch ? css`
    flex: 1;
    overflow-y: auto;
  ` : ''}
`;

export const StyledInput = styled(Input)`
  flex: 1;
  margin-right: ${rem(10)};
`;

export const DateInput = styled(Input)`
  margin-top: ${rem(10)};

  &:first-child {
    margin-right: ${rem(10)};
  }
`;
