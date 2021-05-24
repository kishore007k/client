import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { forgotPass } from "../../api/Auth";

const ForgotPass = () => {
	const [email, setEmail] = useState("");

	const localUserDataJson = JSON.parse(localStorage.getItem("user"));
	const secretKey = localUserDataJson?.data?.secretKey;

	const dispatch = useDispatch();

	const handleSendLink = (e) => {
		e.preventDefault();
		forgotPass({ email, secretKey, dispatch });
	};

	return (
		<form>
			<label htmlFor="email">Email</label>
			<input
				type="email"
				name="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<button onClick={handleSendLink}>Send Link</button>
		</form>
	);
};

export default ForgotPass;
