import { useRef } from "react";
import { HeaderProps } from "./types";
import * as S from "./styles";
import { TbClockHour1, TbCalendar, TbWorld, TbSearch } from "react-icons/tb";

export default function Header({
	searchOnEnter,
	setInput,
	setCustomLocation,
	input,
}: HeaderProps) {
	const inputRef = useRef<HTMLInputElement>(null);

	return (
		<S.HeaderContainer>
			<div className="container-top">
				<h1
					className="logo"
					onClick={() => {
						setCustomLocation("");
						document.title = "Climaki - Weather Forecast";
					}}
				>
					<img
						src="../../../assets/logo-climaki.png"
						alt="Climaki - Weather Forecast"
						className="logo__image"
					/>
					<p className="logo__title">CLIMAKI</p>
				</h1>
				<div className="search-bar">
					<input
						className="search-bar__input"
						value={input}
						type="search"
						placeholder="Pesquisar cidade"
						autoComplete="on"
						onKeyDown={searchOnEnter}
						onChange={(e) => setInput(e.target.value)}
						ref={inputRef}
					/>
					<button
						className="search-bar__button"
						onClick={() => {
							setCustomLocation(input);
						}}
					>
						<TbSearch className="icon" />
					</button>
				</div>
			</div>
			<ul className="container-banner">
				<li className="container-banner__item">
					<span className="banner__item__text">
						Acompanhe o clima em tempo real
					</span>
					<TbClockHour1 className="banner__item__image" />
				</li>
				<li className="container-banner__item">
					<span className="banner__item__text">
						Várias cidades do mundo inteiro
					</span>
					<TbWorld className="banner__item__image" />
				</li>
				<li className="container-banner__item">
					<span className="banner__item__text">
						Previsão para semana inteira
					</span>
					<TbCalendar className="banner__item__image" />
				</li>
			</ul>
		</S.HeaderContainer>
	);
}
