import { createGlobalStyle } from 'styled-components';
import { baseFontSize } from './settings';

const Globals = createGlobalStyle`
  html, body {
    font-size: ${baseFontSize}px;
    margin: 0;
  }
`;

export default Globals;
