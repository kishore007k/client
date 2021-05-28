import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LandingScreen from "./pages/LandingScreen";

import Loading from "./components/Loading";

const Main = () => {
	const loading = false;

	return (
		<>
			{loading === true ? (
				<Loading />
			) : (
				<div>
					<Header />
					<LandingScreen />
					<Footer />
				</div>
			)}
		</>
	);
};

export default Main;
