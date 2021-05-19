import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import SignUpScreen from "./pages/SignUpScreen";
import LoginScreen from "./pages/LoginScreen";
import UserProfile from "./components/Profile/Users";
import AdminProfile from "./components/Profile/Admin";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard/Dashboard";

import { Provider } from "react-redux";
import store from "./redux/index";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<Switch>
					<Route path="/" exact component={App} />
					<Route path="/signUp" exact component={SignUpScreen} />
					<Route path="/login" exact component={LoginScreen} />
					<Route path="/profile" exact component={UserProfile} />
					<Route path="/admin/profile" exact component={AdminProfile} />
					<Route path="/dashboard" exact component={Dashboard} />
				</Switch>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
