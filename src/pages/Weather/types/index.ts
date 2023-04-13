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

export enum DayOfWeek {
	Dom = 0,
	Seg = 1,
	Ter = 2,
	Qua = 3,
	Qui = 4,
	Sex = 5,
	Sáb = 6,
}
