import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

import { SignUp } from "../api/Auth";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

// Image
import BgImage from "../assets/images/bgImage.jpg";
import GoogleIcon from "../assets/icons/GoogleIcon";

// Styles
import styled from "styled-components";
import { COLORS } from "../assets/styles";
import {
	Title,
	LoginForm,
	FormInput,
	FormLabel,
	InputContainer,
	ActionButton,
	ActionContainer,
	GoogleBtn,
	GoogleText,
	Span,
	PasswordInput,
} from "../utils/FormStyle";

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

	const handleGoogleLogin = () => {};

	return (
		<>
			<Header />
			<SignUpScreenWrapper>
				<SignUpWrapper>
					<Title>Register</Title>
					<LoginForm>
						<InputContainer>
							<FormLabel>UserName</FormLabel>
							<FormInput
								type="text"
								placeholder="User Name"
								onChange={(e) => setUserName(e.target.value)}
								value={userName}
							/>
						</InputContainer>
						<InputContainer>
							<FormLabel>Email</FormLabel>
							<FormInput
								type="email"
								autoComplete="username"
								placeholder="Email"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
						</InputContainer>
						<PasswordContainer>
							<InputContainer>
								<FormLabel>Password</FormLabel>
								<PasswordInput
									type="password"
									autoComplete="current-password"
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
									value={password}
								/>
							</InputContainer>
							<InputContainer>
								<FormLabel>Confirm Password</FormLabel>
								<PasswordInput
									type="password"
									autoComplete="current-password"
									placeholder="Confirm Password"
									onChange={(e) => setCPassword(e.target.value)}
									value={cPassword}
								/>
							</InputContainer>
						</PasswordContainer>
						<ActionContainer>
							<ActionButton onClick={handleSignUp}>Sign Up</ActionButton>
							<GoogleBtn onClick={handleGoogleLogin}>
								<GoogleIcon />
								<GoogleText>Sign In with Google</GoogleText>
							</GoogleBtn>
							<Span>
								<Link to="/login">Already have an Account? Sign In</Link>
							</Span>
						</ActionContainer>
					</LoginForm>
				</SignUpWrapper>
			</SignUpScreenWrapper>
			<Footer />
		</>
	);
};

export default SignUpScreen;

const SignUpScreenWrapper = styled.section`
	margin-top: 80px;
	height: 700px;
	width: "100%";
	position: relative;
	background-color: ${COLORS.BgShade};
	background-image: url(${BgImage});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	background-attachment: fixed;

	::after {
		content: "";
		position: absolute;
		left: 0;
		width: 50vw;
		height: 700px;
		background: rgba(255, 255, 255, 0.1);
		filter: blur(5px);
		backdrop-filter: blur(10px);
	}
`;

const SignUpWrapper = styled.div`
	width: 50vw;
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	z-index: 1;
`;

const PasswordContainer = styled.div`
	display: flex;
	justify-content: space-evenly;
	width: 60%;
`;
