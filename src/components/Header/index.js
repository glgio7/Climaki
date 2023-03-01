import { RiSearchLine } from "react-icons/ri";
import { useRef } from "react";
import { StyledHeader } from "./styles";

export default function Header({ searchOnEnter, setInput, setCustomLocation, input }) {

    const inputRef = useRef()

    return (
        <StyledHeader>
            <div className="container-top">

                <h1 className="logo" onClick={() => { setCustomLocation(''); document.title = 'Climaki - Weather Forecast' }}>
                    <img src="../../../assets/logo-climaki.png" alt="Climaki - Weather Forecast" className="logo__image" />
                    <p className="logo__title">CLIMAKI</p>
                </h1>
                <div className="search-bar">
                    <input className="search-bar__input" value={input} type='search' placeholder="Pesquisar cidade" autoComplete="on" onKeyDown={searchOnEnter} onChange={(e) => setInput(e.target.value)} useRef={inputRef} />
                    <button className="search-bar__button" onClick={() => { setCustomLocation(input); }}>
                        <RiSearchLine className="icon" />
                    </button>
                </div>
            </div>
            <ul className="container-banner">
                <li className="container-banner__item">
                    <span className="banner__item__text">Acompanhe o clima em tempo real</span>
                    <img className="banner__item__image" src="/assets/icon-clock.png" alt="" />
                </li>
                <li className="container-banner__item">
                    <span className="banner__item__text">Várias cidades do mundo inteiro</span>
                    <img className="banner__item__image" src="/assets/icon-world.png" alt="" />
                </li>
                <li className="container-banner__item">
                    <span className="banner__item__text">Previsão para semana inteira</span>
                    <img className="banner__item__image" src="/assets/icon-calendar.png" alt="" />
                </li>

            </ul>
        </StyledHeader>
    )
}