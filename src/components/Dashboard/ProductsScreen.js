import React from "react";
import DashboardCover from "./DashboardCover";

import { Helmet } from "react-helmet";

const ProductsScreen = () => {
	return (
		<DashboardCover>
			<Helmet>
				<title>E Commerce Site | Create Products</title>
			</Helmet>
			<div>
				<h1>ProductsScreen</h1>
			</div>
		</DashboardCover>
	);
};

export default ProductsScreen;
