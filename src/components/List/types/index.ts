export type ListProps = {
	setCustomLocation: React.Dispatch<React.SetStateAction<string>>;
};

export interface WeatherData {
	id: string;
	name: string;
	icon: string;
	weather: [{ icon: string }];
	main: { temp_min: number; temp_max: number };
}
