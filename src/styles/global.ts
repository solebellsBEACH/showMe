import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family:'Roboto Mono';
      &::-webkit-scrollbar {
    width: 5px;
    height: 3px; /* A altura só é vista quando a rolagem é horizontal */
  }

  &::-webkit-scrollbar-track {
    background: transparent;
    padding: 2px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #000;
  }
  }
  body, input, button {
    font-size:15px;
    color:#3D3D3D
  }
a{
  text-decoration: none;
  color:#3D3D3D
}
  button {
    cursor: pointer;
  }

  .more-about-me{
    width: 100%;
    margin: 5vh 7vw;
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: x-large;
    transition: color 0.3s;

    &:hover{
      color:#4D4DAB;
    }
  }

  #icon{
    height: 70px;
    width: 70px;
  }

`;
