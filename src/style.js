import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';

export const GlobalStyle = createGlobalStyle`
  ${normalize()}

  html {
    box-sizing: border-box;
    font-size: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    background-color: #fff;
    color: #333;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen-Sans, Ubuntu,
    Cantarell, 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ol,
  ul,
  p,
  fieldset {
    margin: 0;
    padding: 0;
  }

  fieldset {
    border: none;
  }

  ol,
  ul {
    list-style: none;
  }

  a {
    transition: color 0.1s linear;
    color: #2980b9;
    text-decoration: none;
    cursor: pointer;

    &:focus,
    &:hover {
      color: #20638f;
    }
  }
`;
