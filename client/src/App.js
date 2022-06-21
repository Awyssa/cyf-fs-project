import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";

const App = () =>
{
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
