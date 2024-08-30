import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* layout.css의 내용 */
  @font-face {
    font-family: 'EnjoyStories';
    font-weight: bold;
    font-style: normal;
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/tvn/EnjoyStoriesBold.eot');
    src: url('https://cdn.jsdelivr.net/gh/webfontworld/tvn/EnjoyStoriesBold.eot?#iefix') format('embedded-opentype'),
        url('https://cdn.jsdelivr.net/gh/webfontworld/tvn/EnjoyStoriesBold.ttf') format("truetype");
    font-display: swap;
  }

  @font-face {
    font-family: 'Gmarket Sans';
    src: url('./fonts/GmarketSansBold.otf') format('otf');
    src: url('./fonts/GmarketSansTTFBold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

  @font-face {
    font-family: 'Gmarket Sans';
    src: url('./fonts/GmarketSansMedium.otf') format('otf');
    src: url('./fonts/GmarketSansTTFMedium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 400;
    src: url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff2") format('woff2'),
        url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.woff") format('woff'),
        url("https://fonts.gstatic.com/ea/notosanskr/v2/NotoSansKR-Regular.otf") format('opentype');
  }

  body {
    font-family: 'Gmarket Sans';
    background-color: #5B2386;
    color: #FFFFFF;
  }

  header, main, footer {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  p {
    font-weight: normal;
    font-size: 24px;
    line-height: 24px;
    text-align: center;
  }

  .motivational-text {
    font-family: 'EnjoyStories';
    font-weight: bold;
    font-size: 36px;
    line-height: 36px;
  }

  main .motivational-text {
    color: #F5DF4D;
  }

  .explanation p {
    font-size: 18px;
    line-height: 28px;
  }

  .explanation p strong {
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
  }

  p.result strong {
    font-weight: bold;
    font-size: 72px;
    line-height: 72px;
  }

  h2 {
    font-family: 'EnjoyStories';
    font-weight: bold;
    font-size: 96px;
    line-height: 105.6px;
    color: #5B2386;
  }

  dialog .motivational-text {
    color: #5B2386;
  }

  small {
    font-family: 'Noto Sans KR';
    font-weight: normal;
    font-size: 12px;
    line-height: 17.38px;
  }

  button {
    font-family: 'Gmarket Sans';
    font-weight: bold;
    font-size: 24px;
    line-height: 24px;
    color: #5B2386;
    border: none;
    border-radius: 56px;
    padding: 21px 49px;
    background-color: #FCEE21;
    box-shadow: 0 0 10px 0 #00000080;
  }

  button.share {
    background-color: #FFFFFF;
  }
`;

export default GlobalStyle;