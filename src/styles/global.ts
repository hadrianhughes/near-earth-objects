import { createGlobalStyle } from 'styled-components';
import { baseFontSize } from './settings';

const Globals = createGlobalStyle`
  html, body {
    font-size: ${baseFontSize}px;
    margin: 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }
`;

export default Globals;
