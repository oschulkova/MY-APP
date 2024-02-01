import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }


  body {
    font-family: ${(props) => props.theme.fontFamily};
    font-size: ${(props) => props.theme.fontSizeDefault};
    line-height: 27px;
    font-weight: 400;
    height: 100%;
  }


  #root{
    height: 100%;
    display:flex;
    flex-direction:column;
  }

  h1{
    font-weight:700;
    font-size:44px;
    line-height:50px;
  }

  h2{
    font-weight:700;
    font-size:36px;
    line-height:41px;
  }

  h3{
    font-weight:700;
    font-size:18px;
    line-height:27px;
  }
`;