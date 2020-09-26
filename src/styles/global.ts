import { createGlobalStyle } from 'styled-components';

// import gitBackground from '../assets/gitBackground.svg';

export default createGlobalStyle`

  :root {
    --white: #FFF;

    --black-1: #1B2437;
    --black-2: #1b1b1b;
    --black-3: #000000;

    --gray-1: #F6F6F6;
    --gray-2: #EFEFF4;
    --gray-3: #E5E5EA;
    --gray-4: #D1D1D6;
    --gray-5: #C7C7CC;
    --gray-6: #8E8E93;
    --gray-7: #48484A;
    --gray-8: #31363f;

    --pink: #EDA3B5;
    --pink-2: #ff9d9d;

    --red: #FF0000;

    --green: #00FF00;
  }

  * {
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
    background: var(--gray-4);

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
