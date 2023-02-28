import { Link } from "react-router-dom";
import styled from "styled-components";
import { RiSearchLine } from "react-icons/ri";
import { useRef } from "react";

const StyledHeader = styled.header`
    background-color: rgba(60,70,70, 1);
    width: 100%;
    height: 54px;
    display: flex;
    padding: 0 2rem;
    position: relative;
    z-index: 5;
    align-items: center;
    
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
        display: flex;
        align-items: center;
        cursor: pointer;
    }
    
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    
    .logo{
        object-fit: contain;
        width: 50px;
        opacity: .75;
        transition: all 250ms;
        &:hover{
            opacity: 1;
        }        
    }

    p{
        color: #fff;
        margin: 0 .5rem;
        font-weight: bold;
        font-size: 1.75rem;
        text-shadow: 0px 3px 5px #000;
    }

    @media screen and (max-width: 768px){
    justify-content: center;

    .logo{
        opacity: 1;
    }    
    }
`

export default function Header({ searchOnEnter, setInput, setCustomLocation, input }) {

    const inputRef = useRef()

    return (
        <StyledHeader>
            {/* <div className="background-header"><img src="../assets/unsplash3.png" alt="" /></div> */}
                <h1 onClick={() => { setCustomLocation('');}}>
                    <img src="../../../assets/logo-climaki.png" alt="Climaki - Weather Forecast" className="logo"/>
                    <p>CLIMAKI</p>
                </h1>
            <div className="search-bar">
                <input type='search' placeholder="Pesquisar cidade" autoComplete="on" onKeyDown={searchOnEnter} onChange={(e) => setInput(e.target.value)} useRef={inputRef}/>
                <button className="search-button" onClick={() => { setCustomLocation(input);}}>
                    <RiSearchLine className="icon" />
                </button>
            </div>
        </StyledHeader>
    )
}