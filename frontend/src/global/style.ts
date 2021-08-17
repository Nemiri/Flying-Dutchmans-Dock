import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  #root {
    display: flex;
    flex-direction: row;
  }

  :root {
    --green: #00FF00;
    --red: #FF0000;
    --w-text: #A4A6B3;
    --wh-text: #DDE2FF;
    --b-text: #252733;
    --pb-background: #363740;
    --pbh-background: #9FA2B4;
    --pw-background: #F7F8FC;
    --sw-background: #e9eeff;
  }

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-track {
    border-radius: 4px;
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background: #888;
  }

  @media (max-width: 1080px) {
    html {
      font-size: 93.75%; // 15px
    }
  }

  @media (max-width: 720px) {
    html {
      font-size: 87.5%; // 14px
    }
  }

  body {
    background: var(--pw-background);
  }

  body, input, textarea, button {
    font: 500 1rem Poppins, sans-serif;
    color: #494D4B;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
    font-family: Poppins, sans-serif;
  }

  h1 {
    font-size: 2rem;
  }

  h2 {
    font-size: 1.5rem;
  }

  button {
    cursor: pointer;
  }
`;