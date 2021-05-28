import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useHistory } from "react-router";
import { Login } from "../api/Auth";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

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
	ForgotSpan,
} from "../utils/FormStyle";

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

	const handleGoogleLogin = () => {};

	return (
		<>
			<Header />
			<LoginScreenWrapper>
				<Wrapper>
					<Title>Login</Title>
					<LoginForm>
						<InputContainer>
							<FormLabel>Email</FormLabel>
							<FormInput
								type="email"
								autoComplete="username"
								placeholder="e.q., johndoe@gamil.com"
								onChange={(e) => setEmail(e.target.value)}
								value={email}
							/>
						</InputContainer>
						<InputContainer>
							<FormLabel>Password</FormLabel>
							<FormInput
								type="password"
								autoComplete="current-password"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
								value={password}
							/>
						</InputContainer>
						<ForgotSpan>
							<Link to="/forgotPassword">Forgot Password?</Link>
						</ForgotSpan>
						<ActionContainer>
							<ActionButton onClick={handleLogin}>Sign In</ActionButton>
							<GoogleBtn onClick={handleGoogleLogin}>
								<GoogleIcon />
								<GoogleText>Sign In with Google</GoogleText>
							</GoogleBtn>
							<Span>
								<Link to="/signUp">Don't you have an Account? Sign Up</Link>
							</Span>
						</ActionContainer>
					</LoginForm>
				</Wrapper>
			</LoginScreenWrapper>
			<Footer />
		</>
	);
};

export default LoginScreen;

const LoginScreenWrapper = styled.section`
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
		right: 0;
		width: 50vw;
		height: 700px;
		background: rgba(255, 255, 255, 0.1);
		filter: blur(5px);
		backdrop-filter: blur(10px);
	}
`;

const Wrapper = styled.div`
	width: 50vw;
	position: absolute;
	top: 0;
	right: 0;
	bottom: 0;
	z-index: 1;
`;
