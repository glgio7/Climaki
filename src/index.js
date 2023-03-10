import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GlobalCSS } from "./globalcss";
import Home from "./pages/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<BrowserRouter>
		<GlobalCSS />
		<Routes>
			<Route exact path="/" element={<Home />} />
		</Routes>
	</BrowserRouter>
);
