import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding:0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #312941;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }

  button {
    cursor: pointer;
  }
`;

export { GlobalStyle };
