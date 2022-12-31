import styled from "styled-components"

const StyledNav = styled.nav`
    background-color: rgba(0,200,125, .75);
    width: 100%;
    height: 36px;
    display: flex;
    padding: 0 2rem;
    align-items: center;
    
    ul{
        width: 100%;
        display: inline-flex;
        flex-wrap: wrap;
        align-items: center;
    }
    
    li{
        color: #fff;
        cursor: pointer;
        font-size: 1rem;
        width: 25%;
        text-align: center;
        transition: all 250ms;
        
        &:active, &:hover{
            font-weight: bold;
            color: #333;
        }
    }
    
    @media screen and (max-width: 768px){
        padding: 0rem;
        height: initial;

        ul{
            justify-content: space-around;
        }
        
        li{
            border-radius: 10px;
            width: 30%;
            background: rgba(30,30,30, .75);
            font-weight: bold;
            margin-block: .25rem;
        }
        li:nth-child(1){
            width: 75%;
            margin-inline: 30%;
        }
}
`

export default function Nav() {
    return (
        <StyledNav>
            <ul>
                <li>Tempo real</li>
                <li>Diário</li>
                <li>Semanal</li>
                <li>Suporte</li>
            </ul>
        </StyledNav>
    )
}