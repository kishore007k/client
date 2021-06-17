import React from "react";
import DashboardCover from "./DashboardCover";

import { Helmet } from "react-helmet";

const CategoriesScreen = () => {
	return (
		<DashboardCover>
			<Helmet>
				<title>E Commerce Site | Categories</title>
			</Helmet>
			<div>
				<h1>Categories Screen</h1>
			</div>
		</DashboardCover>
	);
};

export default CategoriesScreen;
