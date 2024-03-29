import { createGlobalStyle } from "styled-components";

export const GlobalCSS = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    
    box-sizing: border-box;
    
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    
    list-style: none;
    
    border: none;
    outline: none;
    
    scroll-behavior: smooth;
}

img{
    width: 100%;
}

body{
    width: 100%;
    height: 100%;
    
    
	background-image: url("/assets/wallpaper.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    
    
}
    a{color: #fff;}
`;
