import React from "react";
import DashboardCover from "./DashboardCover";

import { Helmet } from "react-helmet";

const OrderScreen = () => {
	return (
		<DashboardCover>
			<Helmet>
				<title>E Commerce Site | Manage Orders</title>
			</Helmet>
			<div>
				<h1>Order Screen</h1>
			</div>
		</DashboardCover>
	);
};

export default OrderScreen;
