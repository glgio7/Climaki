import { Link } from "react-router-dom"
import styled from "styled-components"

const StyledHeader = styled.header`
    background-color: rgb(30,100,230);
    width: 100%;
    height: 72px;
    display: flex;
    padding: 0 2rem;
    align-items: center;
    position: relative;
    z-index: 5;
    
    .background-header{
        display: block;
        position: absolute;
        z-index: -1;
        opacity: .25;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
    
    h1{
        display: inline-flex;
        align-items: center;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
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

export default function Header({ clearLocation }) {
    return (
        <StyledHeader>
            <div className="background-header"><img src="../assets/unsplash3.png" alt="" /></div>
            <Link to="/" onClick={clearLocation}>
                <h1>
                    <img src="../../../assets/forecast_logo.png" alt="Weather Forecast" className="logo" />
                    <p>CLIMAKI</p>
                </h1></Link>
        </StyledHeader>
    )
}