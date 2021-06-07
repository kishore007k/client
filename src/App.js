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
import ProductDetailScreen from "./pages/ProductDetailScreen";
import AboutScreen from "./pages/AboutScreen";
import ContactScreen from "./pages/ContactScreen";
import Page404 from "./pages/404Page";
import ProtectedRoute from "./screens/ProtectedRoute";
import ProductScreen from "./pages/ProductScreen";
import EditUserProfile from "./components/EditProfile/Users";

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
						<Route path="/editProfile" exact component={EditUserProfile} />
						<Route path="/forgotPassword" exact component={ForgotPass} />
						<Route path="/resetPassword" exact component={ResetPassword} />
						<Route path="/about" exact component={AboutScreen} />
						<Route path="/contact" exact component={ContactScreen} />
						<Route path="/product" exact component={ProductScreen} />
						<Route path="/products/:productName" component={ProductDetailScreen} />
						<ProtectedRoute path="/dashboard" exact component={Dashboard} />
						<ProtectedRoute path="/admin/profile" exact component={AdminProfile} />
						<Route component={Page404} />
					</Switch>
				</Router>
			</Provider>
		</div>
	);
};

export default App;
