import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CategoriesScreen from "./CategoriesScreen";
import Dashboard from "../../pages/Dashboard";
import OrderScreen from "./OrderScreen";
import ProductsScreen from "./ProductsScreen";
import UsersRoleScreen from "./UsersRoleScreen";

import AdminProfile from "../Profile/Admin/index";

const AdminDashboard = () => {
	return (
		<Router>
			<Switch>
				<Route exact path="/admin/profile" component={AdminProfile} />
				<Route exact path="/dashboard" component={Dashboard} />
				<Route exact path="/categories" component={CategoriesScreen} />
				<Route exact path="/users" component={UsersRoleScreen} />
				<Route exact path="/shop" component={ProductsScreen} />
				<Route exact path="/orders" component={OrderScreen} />
			</Switch>
		</Router>
	);
};

export default AdminDashboard;
