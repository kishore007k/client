import React from "react";
import DashboardCover from "./DashboardCover";

import Categories from "../../pages/Categories";

import { Helmet } from "react-helmet";

const CategoriesScreen = () => {
	return (
		<DashboardCover>
			<Helmet>
				<title>E Commerce Site | Categories</title>
			</Helmet>
			<div>
				<Categories />
			</div>
		</DashboardCover>
	);
};

export default CategoriesScreen;
