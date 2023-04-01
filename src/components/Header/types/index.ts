export type HeaderProps = {
	searchOnEnter: (event: React.KeyboardEvent<HTMLInputElement>) => void;
	setInput: React.Dispatch<React.SetStateAction<string>>;
	setCustomLocation: React.Dispatch<React.SetStateAction<string>>;
	customLocation: string;
	input: string;
};
