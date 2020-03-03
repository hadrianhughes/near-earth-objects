import styled from 'styled-components';
import { colors } from '../../styles/settings';
import { rem } from '../../styles/tools';

export const StyledInput = styled.input`
  border: 1px solid ${colors.lightGrey};
  border-radius: ${rem(10)};
  box-sizing: border-box;
  font-size: ${rem(16)};
  padding: ${rem(10)};
`;

export const StyledLabel = styled.label`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const LabelText = styled.span`
`;
