import React, { useEffect } from "react";
import { fetchUserDetail, LogOut } from "../../api/Auth";
import Footer from "../Footer";
import Header from "../Header";
import { useDispatch } from "react-redux";

const Dashboard = () => {
	const localUserDataJson = JSON.parse(localStorage.getItem("user"));

	const dispatch = useDispatch();

	const id = localUserDataJson?.data?._id;

	useEffect(() => {
		fetchUserDetail({ id, dispatch });
	}, [id, dispatch]);

	return (
		<div>
			<Header />
			<div style={{ marginTop: "80px" }}>
				Dashboard
				<form>
					<button onClick={LogOut}>Log Out</button>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default Dashboard;
