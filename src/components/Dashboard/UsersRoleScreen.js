import React from "react";
import DashboardCover from "./DashboardCover";

import { Helmet } from "react-helmet";

const UsersRoleScreen = () => {
	return (
		<DashboardCover>
			<Helmet>
				<title>E Commerce Site | User</title>
			</Helmet>
			<div>
				<h1>UsersRoleScreen</h1>
			</div>
		</DashboardCover>
	);
};

export default UsersRoleScreen;
