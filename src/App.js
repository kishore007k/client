import React from "react";
import "./App.css";
import Main from "./main";

import SignUpScreen from "./pages/SignUpScreen";
import LoginScreen from "./pages/LoginScreen";
import UserProfile from "./components/Profile/Users";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
import CartScreen from "./pages/CartScreen";
import PaymentScreen from "./screens/PaymentScreen";
import AdminProfile from "./components/Profile/Admin";
import Dashboard from "./pages/Dashboard";
import CategoriesScreen from "./components/Dashboard/CategoriesScreen";
import UsersRoleScreen from "./components/Dashboard/UsersRoleScreen";
import ProductsScreen from "./components/Dashboard/ProductsScreen";
import OrderScreen from "./components/Dashboard/OrderScreen";

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
						<Route path="/cart" exact component={CartScreen} />
						<Route path="/cart/payment" exact component={PaymentScreen} />
						<Route path="/products/:productName" component={ProductDetailScreen} />
						<ProtectedRoute exact path="/admin/profile" component={AdminProfile} />
						<ProtectedRoute exact path="/dashboard" component={Dashboard} />
						<ProtectedRoute exact path="/categories" component={CategoriesScreen} />
						<ProtectedRoute exact path="/users" component={UsersRoleScreen} />
						<ProtectedRoute exact path="/shop" component={ProductsScreen} />
						<ProtectedRoute exact path="/orders" component={OrderScreen} />
						<Route component={Page404} />
					</Switch>
				</Router>
			</Provider>
		</div>
	);
};

export default App;
