export interface CityWeatherData {
	city: string;
	country: string;
	sunriseHour: string;
	sunriseMinutes: string;
	sunsetHour: string;
	sunsetMinutes: string;
	icon: string;
	status: string;
	description: string;
	temp: number;
	feels_like: number;
}

export interface ForecastData {
	item: [];
	dt: number;
	weather: [{ description: string; icon: string }];
	main: { temp_min: number; feels_like: number; temp_max: number };
	rain: { "3h": string };
}
