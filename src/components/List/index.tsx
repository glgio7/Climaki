import { useEffect, useState } from "react";
import * as S from "./styles";
import { ListProps, WeatherData } from "./types";

export function List({ setCustomLocation }: ListProps) {
	const api_key = process.env.REACT_APP_API_KEY;
	const [weather, setWeather] = useState<WeatherData[]>([]);
	const citiesCode =
		"3452925,3463237,3464975,3448439,3451190,3405825,3444924,3465038,3467745,3462377,3471872,3390760,3397277,3394023,6320062,3386496,3388368,3474574,3405870,3663517";

	useEffect(() => {
		fetch(
			`https://api.openweathermap.org/data/2.5/group?id=${citiesCode}&appid=${api_key}&units=metric&lang=pt_br`
		)
			.then((response) => response.json())
			.then((data) => {
				//COUNTRY CAPITALS WEATHER
				const citiesList = data.list;
				setWeather(citiesList);
			});
	}, [api_key]);

	return (
		<>
			<S.ListContainer>
				{weather.map((item) => (
					<S.Item
						key={item.id}
						onClick={() => {
							setCustomLocation(item.name);
							document.title = `${item.name} - Climaki Weather Forecast`;
						}}
					>
						<h4>{item.name}</h4>
						<img
							className="icon"
							src={`http://openweathermap.org/img/w/${item.weather[0].icon}.png`}
							alt="Weather Icon"
						/>
						<div className="min-max">
							<p>Min: {Math.floor(item.main.temp_min)}° C</p>
							<p>Max: {Math.ceil(item.main.temp_max)}° C</p>
						</div>
					</S.Item>
				))}
			</S.ListContainer>
		</>
	);
}
