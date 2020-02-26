import styled from 'styled-components';
import { rem } from '../../styles/tools';
import { colors } from '../../styles/settings';

export const StyledButton = styled.button`
  background-color: ${colors.white};
  border-radius: ${rem(10)};
  border: 1px solid ${colors.lightGrey};
  cursor: pointer;
  font-size: ${rem(16)};
  padding: ${rem(10, 20)};

  &:hover {
    background-color: ${colors.lighterGrey};
  }
`;
