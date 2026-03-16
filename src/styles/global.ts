import { createGlobalStyle } from 'styled-components';
import { ITheme } from '../interface';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Sans:wght@400;500;600;700&family=Space+Grotesk:wght@500;700&display=swap');

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'IBM Plex Sans', sans-serif;

    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }

    &::-webkit-scrollbar-track {
      background: transparent;
      padding: 2px;
    }

    &::-webkit-scrollbar-thumb {
      background-color: rgba(42, 42, 94, 0.55);
      border-radius: 999px;
    }
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background:
      radial-gradient(circle at top left, rgba(171, 171, 227, 0.22), transparent 28%),
      radial-gradient(circle at right 20%, rgba(100, 100, 222, 0.14), transparent 32%),
      ${({ theme }: { theme: ITheme }) => theme.background};
    color: ${({ theme }: { theme: ITheme }) => theme.gray4};
    line-height: 1.6;
  }

  body,
  input,
  button,
  textarea {
    font-size: 15px;
    color: ${({ theme }: { theme: ITheme }) => theme.gray4};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Space Grotesk', sans-serif;
    line-height: 1.08;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
