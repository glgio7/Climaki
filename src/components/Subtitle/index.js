import styled from "styled-components"

const StyledH2 = styled.h2`
    background-color: cornflowerblue;
    padding: 1rem 0;
    padding-inline: 1%;
    width: 100%;
    text-align:center;    
    color: #fff;
    font-size: 1.25rem;
    line-height: 1.3rem;
    font-weight: normal;
`
export default function Subtitle() {
    return (
        <StyledH2>
            Acompanhe a previsão climática no Brasil em tempo real.
        </StyledH2>
    )
}