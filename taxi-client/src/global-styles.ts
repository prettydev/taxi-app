import reset from "styled-reset";
import { createGlobalStyle } from "./typed-components";

// tslint:disable-next-line
const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro');
  ${reset};
  * {
    box-sizing: border-box;
  }
  body {
    font-family: -apple-system, system-ui, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  input,
  button {
    &:focus,
    &:active {
      outline: none;
    }
  }
`;

export default GlobalStyles;
