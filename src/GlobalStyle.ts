import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Lineto Circular Pro';
    src: url('./assets/fonts/lineto-circular-pro-book.eot');
    src: url('./assets/fonts/lineto-circular-pro-book.eot?#iefix') format('embedded-opentype'),
         url('./assets/fonts/lineto-circular-pro-book.woff2') format('woff2'),
         url('./assets/fonts/lineto-circular-pro-book.woff') format('woff'),
         url('./assets/fonts/lineto-circular-pro-book.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body, button, input, textarea, {
    font-family: 'Lineto Circular Pro', sans-serif;
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
