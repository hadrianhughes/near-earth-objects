import styled from 'styled-components';
import { colors } from '../../styles/settings';
import { rem } from '../../styles/tools';

export const ItemButton = styled.button`
  background-color: ${colors.white};
  border: 1px dashed ${colors.lightGrey};
  border-radius: ${rem(10)};
  cursor: pointer;
  font-size: ${rem(16)};
  padding: ${rem(20)};
  text-align: left;
  width: 100%;

  &:hover {
    background-color: ${colors.lighterGrey};
  }
`;

export const ItemHeading = styled.h3`
  margin-top: 0;
`;

export const DetailLabel = styled.td`
  font-weight: bold;
`;
