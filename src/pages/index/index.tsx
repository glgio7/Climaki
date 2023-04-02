import Header from "../../components/Header";
import { useCallback, useEffect, useState } from "react";
import { RiArrowUpCircleFill, RiCloseCircleFill } from "react-icons/ri";
import { List } from "../../components/List";
import * as S from "./styles";
import { CityWeatherData, DayOfWeek, ForecastData } from "./types";

function Home() {
	const api_key = process.env.REACT_APP_API_KEY;

	///// User custom location needed states
	const [input, setInput] = useState("");
	const [customLocation, setCustomLocation] = useState("");
	const [weather, setWeather] = useState<CityWeatherData>(
		{} as CityWeatherData
	);

	///// Forecast needed states
	const [forecast, setForecast] = useState<ForecastData[]>(
		[] as ForecastData[]
	);
	const [expandWeekly, setExpandWeekly] = useState(false);

	///// For user experience
	const searchOnEnter = useCallback(
		(props: React.KeyboardEvent<HTMLInputElement>) => {
			if (props.key === "Enter") {
				setCustomLocation(input);
				setInput("");
			}
		},
		[input]
	);

	useEffect(() => {
		////// Get current weather
		const fetchWeather = () => {
			fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${customLocation}&appid=${api_key}&units=metric&lang=pt_br`
			)
				.then((response) => response.json())
				.then((data) => {
					const weather = {
						city: data?.name,
						country: data.sys?.country,
						sunriseHour: new Date(data.sys?.sunrise * 1000)
							.getHours()
							.toString(),
						sunriseMinutes: JSON.stringify(
							new Date(data.sys?.sunrise * 1000).getMinutes()
						).toString(),
						sunsetHour: new Date(data.sys?.sunset * 1000).getHours().toString(),
						sunsetMinutes: JSON.stringify(
							new Date(data.sys?.sunset * 1000).getMinutes()
						).toString(),
						temp: Math.round(data.main?.temp),
						feels_like: Math.round(data.main?.feels_like),
						status: data.weather ? data.weather[0].main : "",
						description: data.weather ? data.weather[0].description : "",
						icon: data.weather ? data.weather[0].icon : "",
						id: data.id,
					};
					setWeather(weather);
				})
				.catch((err) => console.log(err));
		};

		///// Get weather forecast for 5 days / for each 3 hours
		const fetchForecast = () => {
			fetch(
				`https://api.openweathermap.org/data/2.5/forecast?q=${customLocation}&appid=${api_key}&units=metric&lang=pt_br`
			)
				.then((response) => response.json())
				.then((data) => {
					// 5day WEATHER
					const arr = data.list;
					setForecast(arr);
				})
				.catch((err) => console.log(err));
		};
		Promise.all([fetchWeather(), fetchForecast()]);
	}, [customLocation, api_key]);

	///// Fill empty space when minutes are smaller than 2 digits

	if (weather.sunriseMinutes && weather.sunriseMinutes.length === 1) {
		weather.sunriseMinutes = "0" + weather.sunriseMinutes;
	}
	if (weather.sunsetMinutes && weather.sunsetMinutes.length === 1) {
		weather.sunsetMinutes = "0" + weather.sunsetMinutes;
	}

	return (
		<>
			<Header
				searchOnEnter={searchOnEnter}
				setInput={setInput}
				setCustomLocation={setCustomLocation}
				customLocation={customLocation}
				input={input}
			/>
			<S.Container>
				{!customLocation ? (
					<h1>Principais cidades</h1>
				) : (
					<>
						<h1>{weather.city}</h1>
						<span className="country-span">{weather.country}</span>
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
				)}
				<>
					{!customLocation ? (
						<List setCustomLocation={setCustomLocation} />
					) : (
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
										expandWeekly ? "weekly-list active" : "weekly-list"
									}
								>
									{expandWeekly === true &&
										forecast.map((item) => (
											<div className="weekly-item" key={forecast.indexOf(item)}>
												<div className="weekly-item__header">
													<h5>
														<span>
															{DayOfWeek[new Date(item.dt * 1000).getDay()]}
														</span>
														{`${new Date(item.dt * 1000).getHours()}:00`}
													</h5>
													<h4>
														{item.weather[0].description}
														<span>{item.rain && `${item.rain["3h"]} mm`}</span>
													</h4>
													<img
														src={`https://openweathermap.org/img/w/${item.weather[0].icon}.png`}
														alt={weather.status}
													/>
												</div>
												<div className="weekly-item__body">
													<div>
														<h5>Mínima</h5>
														<p>{`${Math.floor(item.main.temp_min)}° C`}</p>
													</div>
													<div>
														<h5>Sensação térmica</h5>
														<p>{`${Math.round(item.main.feels_like)}° C`}</p>
													</div>
													<div>
														<h5>Máxima</h5>
														<p>{`${Math.ceil(item.main.temp_max)}° C`}</p>
													</div>
												</div>
											</div>
										))}
								</div>
							</div>
						</>
					)}
				</>
			</S.Container>
		</>
	);
}

export default Home;
