import React from "react";
import { LogOut } from "../../api/Auth";
import Footer from "../Footer";
import Header from "../Header";

const Dashboard = () => {
	return (
		<div>
			<Header />
			Dashboard
			<form>
				<button onClick={LogOut}>Log Out</button>
			</form>
			<Footer />
		</div>
	);
};

export default Dashboard;
