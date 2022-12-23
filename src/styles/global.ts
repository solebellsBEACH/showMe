import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family:'Roboto Mono';
  }
  body, input, button {
    font-size:15px;
  }

  button {
    cursor: pointer;
  }

  // Adicione quais mais regras desejar!
`;
