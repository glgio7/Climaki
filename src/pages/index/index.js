import Header from "../../components/Header";
import { useEffect, useState } from "react";
import { RiArrowUpCircleFill, RiCloseCircleFill } from "react-icons/ri";
import { List } from "../../components/ListI";
import { Container } from "./styles";

function Home() {
	const api_key = "7b9f700d5f985dd21792000657bd66d0";
	const [input, setInput] = useState("");
	const [customLocation, setCustomLocation] = useState("");
	const [weather, setWeather] = useState([]);
	const searchOnEnter = (props) =>
		props.keyCode === 13 ? setCustomLocation(input) + setInput("") : "";

	/////////////////////////////
	const [forecast, setForecast] = useState([]);
	const [expandWeekly, setExpandWeekly] = useState(false);
	const daysNames = [
		"Domingo",
		"Segunda",
		"Terça",
		"Quarta",
		"Quinta",
		"Sexta",
		"Sábado",
	];
	////////////////////////////

	useEffect(() => {
		// CURRENT WEATHER
		const fetchWeather = () => {
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${customLocation}&appid=${api_key}&units=metric&lang=pt_br`
			)
				.then((response) => response.json())
				.then((data) => {
					const weather = {
						city: data?.name,
						country: data.sys?.country,
						sunriseHour: new Date(data.sys?.sunrise * 1000).getHours(),
						sunriseMinutes: new Date(data.sys?.sunrise * 1000).getMinutes(),
						sunsetHour: new Date(data.sys?.sunset * 1000).getHours(),
						sunsetMinutes: new Date(data.sys?.sunset * 1000).getMinutes(),
						temp: Math.round(data.main?.temp),
						feels_like: Math.round(data.main?.feels_like),
						status: data.weather ? data.weather[0].main : "",
						description: data.weather ? data.weather[0].description : "",
						icon: data.weather ? data.weather[0].icon : "",
						id: data.id,
					};
					setWeather(weather);
				});
		};
		const fetchForecast = () => {
			fetch(
				`https://api.openweathermap.org/data/2.5/forecast?q=${customLocation}&appid=${api_key}&units=metric&lang=pt_br`
			)
				.then((response) => response.json())
				.then((data) => {
					// 5day WEATHER
					const arr = data.list;
					setForecast(arr);
				});
		};
		Promise.all([fetchWeather(), fetchForecast()]);
	}, [customLocation]);

	return (
		<>
			<Header
				searchOnEnter={searchOnEnter}
				setInput={setInput}
				setCustomLocation={setCustomLocation}
				customLocation={customLocation}
				input={input}
			/>
			<Container>
				{customLocation ? (
					<>
						<h1>{weather.city}</h1>
						<span>{weather.country}</span>
						<nav className={expandWeekly ? "active" : ""}>
							<RiArrowUpCircleFill
								className="nav-button"
								onClick={() => {
									window.scrollTo(0, 0);
									setExpandWeekly(false);
								}}
							/>
							<RiCloseCircleFill
								className="nav-button"
								onClick={() => setExpandWeekly(false)}
							/>
						</nav>
					</>
				) : (
					<h1>Principais cidades</h1>
				)}
				<>
					{customLocation ? (
						<>
							<div className="container">
								<h2>Agora</h2>
								<img
									className="weather-icon"
									src={`https://openweathermap.org/img/w/${weather.icon}.png`}
									alt={weather.status}
								/>
								<h3>{weather.description}</h3>
								<div className="info__city">
									<h4>Temperatura Atual</h4>
									<p>{`${weather.temp || ""}°C`}</p>
									<h4>Sensação térmica</h4>
									<p>{`${weather.feels_like || ""}°C`}</p>
								</div>
								<div className="info__city">
									<h4>Nascer do sol</h4>
									<p>{`${weather.sunriseHour || ""}:${
										weather.sunriseMinutes || ""
									}`}</p>
									<h4>Pôr do sol</h4>
									<p>{`${weather.sunsetHour || ""}:${
										weather.sunsetMinutes || ""
									}`}</p>
								</div>
								<button onClick={() => setExpandWeekly(!expandWeekly)}>
									Na semana
								</button>
								<div
									className={
										expandWeekly
											? "weekly-container active"
											: "weekly-container"
									}
								>
									{expandWeekly === true &&
										forecast.map((item) => (
											<ul className="weekly-list" key={forecast.indexOf(item)}>
												<li>
													<h3>
														{daysNames[new Date(item.dt * 1000).getDay()]}
														<img
															src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
															alt={weather.status}
														/>
													</h3>

													<h3>{`${new Date(item.dt * 1000).getHours()}:00`}</h3>
												</li>
												<li>
													<h5>{item.weather[0].description}</h5>
													<p>{item.rain ? `${item.rain["3h"]} mm` : ""}</p>
												</li>
												<li>
													<h5>Mínima</h5>
													<p>{`${Math.floor(item.main.temp_min)}° C`}</p>
												</li>
												<li>
													<h5>Sensação térmica</h5>
													<p>{`${Math.round(item.main.feels_like)}° C`}</p>
												</li>
												<li>
													<h5>Máxima</h5>
													<p>{`${Math.ceil(item.main.temp_max)}° C`}</p>
												</li>
											</ul>
										))}
								</div>
							</div>
						</>
					) : (
						<List setCustomLocation={setCustomLocation} />
					)}
				</>
			</Container>
		</>
	);
}

export default Home;
