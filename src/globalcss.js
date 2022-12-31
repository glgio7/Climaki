import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    list-style: none;
    border: none;
    outline: none;
}

body{
    overflow-x: hidden;
    max-width: 100vw;
    height: 100%;
    background-color: cornflowerblue;
}
`