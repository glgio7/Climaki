import { Link } from "react-router-dom";
import * as S from "../styles";

const Home = () => {
	return (
		<S.Home>
			<h1>
				<img
					src="/assets/logo-climaki.png"
					alt="Climaki - Weather Forecast"
					className="logo__image"
				/>
				<span>CLIMAKI</span>
			</h1>
			<ul className="text-container">
				<li>
					<p>Nao deixe que o tempo o pegue de surpresa.</p>
				</li>
				<li>
					<p>
						Obtenha previsões detalhadas e precisas para a semana inteira, em
						tempo real e para qualquer lugar do mundo.
					</p>
				</li>
				<li>
					<p> Climaki, a sua melhor fonte de informações meteorológicas.</p>
				</li>
			</ul>
			<Link to={"/weather"}>
				<button>Acessar</button>
			</Link>
		</S.Home>
	);
};

export default Home;
