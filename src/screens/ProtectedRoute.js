import { Redirect, Route, useLocation } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
	const location = useLocation();

	const localUserDataJson = JSON.parse(localStorage.getItem("user"));
	const userRole = localUserDataJson?.data?.userRole;

	return (
		<Route {...rest}>
			{userRole === 1 ? (
				<Component />
			) : (
				<Redirect to={{ pathname: "/login", state: { from: location } }} />
			)}
		</Route>
	);
};

export default PrivateRoute;
