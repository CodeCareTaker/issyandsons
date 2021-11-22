import { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Raleway', sans-serif;
  }

  #styles a{
    color: white;
  }

  #styles a:hover{
    color: #327ba8;
  }

  a {
    text-decoration: none;
    color: black;
  }

  * {
    box-sizing: border-box;
  }
`