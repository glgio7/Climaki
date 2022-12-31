import styled from "styled-components"

const StyledHeader = styled.header`
    background-color: rgba(0,0,0, .5);
    width: 100%;
    height: 84px;
    display: flex;
    padding: 0 2rem;
    align-items: center;

    h1{
        display: inline-flex;
        align-items: center;
    }

    img{
        width: 100%;
        height: 100%;
    }
    
    .logo{
        object-fit: contain;
        width: 66px;
    }

    p{
        color: #fff;
        margin: 0 .5rem;
        font-weight: bold;
        font-size: 2rem;
        text-shadow: 0px 5px 5px #000;
    }
`

export default function Header() {
    return (
        <StyledHeader>
            <h1>
            <img src="../../../assets/forecast_logo.png" alt="Weather Forecast" className="logo"/>
            <p>CLIMAKI</p>
            </h1>
        </StyledHeader>
    )
}