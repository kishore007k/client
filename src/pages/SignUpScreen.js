import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { SignUp } from "../api/Auth";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

const SignUpScreen = () => {
	const dispatch = useDispatch();

	const [userName, setUserName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [cPassword, setCPassword] = useState("");

	const history = useHistory();

	const clear = () => {
		setUserName("");
		setEmail("");
		setPassword("");
		setCPassword("");
	};

	const handleSignUp = (e) => {
		e.preventDefault();
		SignUp({ userName, email, password, cPassword, history, dispatch });
		clear();
	};

	return (
		<div>
			<Header />
			<form>
				<label>UserName</label>
				<input
					type="text"
					placeholder="User Name"
					onChange={(e) => setUserName(e.target.value)}
					value={userName}
				/>
				<label>Email</label>
				<input
					type="email"
					autoComplete="username"
					placeholder="Email"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<label>Password</label>
				<input
					type="password"
					autoComplete="current-password"
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
				<label>Confirm Password</label>
				<input
					type="password"
					autoComplete="current-password"
					placeholder="confirm password"
					onChange={(e) => setCPassword(e.target.value)}
					value={cPassword}
				/>
				<button onClick={handleSignUp}>Sign Up</button>
			</form>
			<Footer />
		</div>
	);
};

export default SignUpScreen;
