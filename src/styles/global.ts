import { createGlobalStyle } from 'styled-components';
import { baseFontSize, colors } from './settings';
import { rem } from './tools';

const Globals = createGlobalStyle`
  html, body {
    font-family: sans-serif;
    font-size: ${baseFontSize}px;
    margin: 0;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  hr {
    border: none;
    border-bottom: 1px solid ${colors.lightGrey};
    margin: ${rem(20)};
    width: 100%;
  }
`;

export default Globals;
