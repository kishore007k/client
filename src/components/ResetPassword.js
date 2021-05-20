import React, { useState } from "react";
import { resetPass } from "../api/Auth";
import { useDispatch } from "react-redux";

const ResetPassword = () => {
	const [newPassword, setNewPassword] = useState("");
	const [repeatNP, setRepeatNP] = useState("");

	const localUserDataJson = JSON.parse(localStorage.getItem("user"));
	const dispatch = useDispatch();

	const id = localUserDataJson?.data?._id;
	const email = localUserDataJson?.data?.email;
	const secretKey = localUserDataJson?.data?.secretKey;

	const handleUpdate = (e) => {
		e.preventDefault();
		resetPass({
			newPassword,
			cNewPassword: repeatNP,
			id,
			secretKey,
			dispatch,
			email,
		});
	};

	return (
		<form>
			<label>New Password</label>
			<input
				name="password"
				onChange={(e) => setNewPassword(e.target.value)}
				value={newPassword}
				placeholder="New Password"
			/>
			<br />
			<br />
			<hr />
			<label>Confirm Password</label>
			<input
				name="cPassword"
				onChange={(e) => setRepeatNP(e.target.value)}
				value={repeatNP}
				placeholder="Confirm New Password"
			/>
			<br />
			<br />
			<hr />
			<button onClick={handleUpdate}>Update</button>
		</form>
	);
};

export default ResetPassword;
