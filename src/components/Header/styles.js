import styled from "styled-components";

export const StyledHeader = styled.header`
    background-color: rgba(60,60,70, 1);
    
    width: 100%;
    height: 180px;
    
    display: flex;
    flex-direction: column;

    position: relative;
    
    z-index: 5;
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .container-top{
        width: 100%;
        display: flex;
        align-items: center;
    
    padding: 0 2rem;
    }
    
    .logo{
        display: flex;

        width: calc(100vw/3);
        height: 54px;
        align-items: center;
        cursor: pointer;
    }
    
    .logo__image{
        object-fit: contain;
        width: 42px;
        opacity: .85;
        transition: all 250ms;
        &:hover{
            opacity: 1;
        }        
    }
    
    .logo__title{
        color: #fff;
        margin: 0 .5rem;
        font-weight: bold;
        font-size: 1.75rem;
        text-shadow: 0px 3px 5px #000;
    }

    .search-bar{
        width: calc(100vw / 3);
        display: flex; 
        align-items: center;
    }

    .search-bar__input{
        width: 85%;
        padding-left: 1rem;
        border-radius: 3px 0 0 3px;
    }
    
    .search-bar__button{
        border-radius: 0 3px 3px 0;
        width: 15%;
        cursor: pointer;
        background-color: #000;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.25rem;
    }

    .search-bar__input, .search-bar__button{
        height: 30px;
    }

    .container-banner{
        width: 100%;
        height: 100%;
        background-image: url(/assets/banner-landscape.jpg);
        background-position: center;
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .container-banner__item{
        width: 30%;
        opacity: 1;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .banner__item__text{
        color: #000;
    }

    .banner__item__image{
        margin-top: .5rem;
        width: 42px;
        height: 42px;
    }

    @media screen and (max-width: 768px){

        height: auto;
    .container-top{
        flex-wrap: wrap;
        padding-bottom: 1rem;
    }    
    
    .search-bar, h1{
        width: 100vw;
    }
    
    .logo__image{
        opacity: 1;
    }  
    
    .container-banner__item{
        flex-direction: row;
        justify-content: flex-start;
        height: 60px;
        width: 100%;
    }

    .banner__item__text{
        font-weight: bold;
        font-size: .75rem;
        margin-left: 2rem;
        margin-top: .5rem;
    }
    
    .banner__item__image{
        margin-left: 1rem;
        order: -1;
        width: 28px;
        height: 28px;
    }
    }
`
