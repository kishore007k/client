import React from "react";
import DashboardCover from "./DashboardCover";

import { Helmet } from "react-helmet";
import AdminProductScreen from "../../pages/AdminProductScreen";

const ProductsScreen = () => {
	return (
		<DashboardCover>
			<Helmet>
				<title>E Commerce Site | Create Products</title>
			</Helmet>
			<div>
				<AdminProductScreen />
			</div>
		</DashboardCover>
	);
};

export default ProductsScreen;
