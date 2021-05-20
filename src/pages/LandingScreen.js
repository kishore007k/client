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
		<div>
			<h2>This is the LandingScreen</h2>
		</div>
	);
};

export default LandingScreen;
