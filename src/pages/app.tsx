import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalCSS } from "../globalcss";
import Home from "./index";

const App = () => {
	return (
		<BrowserRouter>
			<GlobalCSS />
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
