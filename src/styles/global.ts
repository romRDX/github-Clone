import { createGlobalStyle } from 'styled-components';

// import gitBackground from '../assets/gitBackground.svg';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
  }

  body {
    height: 100%;
    /* background: #312E38; */
    /* color: #FFF; */

    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px "Roboto Slab", sans-serif;
    font-size: 16px;
  }

  h1, h2,h3,h4,h5,h6,strong {
    font-weight: 500;
  }

  button {
    cursor: pointer;
  }
`;
