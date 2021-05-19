import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useHistory } from "react-router";
import { Login, LogOut } from "../api/Auth";
import { useDispatch } from "react-redux";

const LoginScreen = () => {
	const dispatch = useDispatch();

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const history = useHistory();

	const clear = () => {
		setEmail("");
		setPassword("");
	};

	const handleLogin = (e) => {
		e.preventDefault();
		Login({ email, password, history, dispatch });
		clear();
	};

	const handleLogout = () => {
		LogOut({ dispatch });
	};

	return (
		<div>
			<Header />
			<hr />
			<br />
			<form>
				<label>Email</label>
				<input
					type="email"
					autoComplete="username"
					placeholder="e.q., johndoe@gamil.com"
					onChange={(e) => setEmail(e.target.value)}
					value={email}
				/>
				<br />
				<label>Password</label>
				<input
					type="password"
					autoComplete="current-password"
					placeholder="password"
					onChange={(e) => setPassword(e.target.value)}
					value={password}
				/>
				<br />
				<br />
				<button onClick={handleLogin}>Login</button>
				<button onClick={handleLogout}>Log Out</button>
			</form>
			<br />
			<hr />
			<Footer />
		</div>
	);
};

export default LoginScreen;
