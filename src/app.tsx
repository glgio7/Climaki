import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalCSS } from "./styles/globalcss";
import Weather from "./pages/Weather";
import Home from "./pages";

const App = () => {
	return (
		<BrowserRouter>
			<GlobalCSS />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/weather" element={<Weather />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
