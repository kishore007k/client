import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserDetail } from "../api/Auth";

const LandingScreen = () => {
	const localUserDataJson = JSON.parse(localStorage.getItem("user"));

	const dispatch = useDispatch();

	const id = localUserDataJson?.data?._id;

	useEffect(() => {
		fetchUserDetail({ id, dispatch });
	}, [id, dispatch]);

	return (
		<div style={{ marginTop: "80px" }}>
			<h2 style={{ fontSize: "40px" }}>This is the LandingScreen</h2>
		</div>
	);
};

export default LandingScreen;
