import React from "react";
import "./App.css";
import Main from "./main";

import SignUpScreen from "./pages/SignUpScreen";
import LoginScreen from "./pages/LoginScreen";
import UserProfile from "./components/Profile/Users";
import AdminProfile from "./components/Profile/Admin";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

import { Provider } from "react-redux";
import store from "./redux/index";
import ResetPassword from "./components/ResetPassword";
import ForgotPass from "./components/ForgotPass";
import ProductScreen from "./pages/ProductScreen";
import AboutScreen from "./pages/AboutScreen";
import ContactScreen from "./pages/ContactScreen";

const App = () => {
	return (
		<div>
			<Provider store={store}>
				<Router>
					<Switch>
						<Route path="/" exact component={Main} />
						<Route path="/signUp" exact component={SignUpScreen} />
						<Route path="/login" exact component={LoginScreen} />
						<Route path="/profile" exact component={UserProfile} />
						<Route path="/admin/profile" exact component={AdminProfile} />
						<Route path="/dashboard" exact component={Dashboard} />
						<Route path="/forgotPassword" exact component={ForgotPass} />
						<Route path="/resetPassword" exact component={ResetPassword} />
						<Route path="/products" exact component={ProductScreen} />
						<Route path="/about" exact component={AboutScreen} />
						<Route path="/contact" exact component={ContactScreen} />
					</Switch>
				</Router>
			</Provider>
		</div>
	);
};

export default App;
