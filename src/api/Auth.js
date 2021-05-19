import axios from "axios";
import {
	getUserData,
	loginUser,
	logoutUser,
	registerUser,
	setUserData,
} from "../redux/actions/Users";

const URL = "http://localhost:3001";

export const SignUp = ({
	userName,
	email,
	password,
	cPassword,
	history,
	dispatch,
}) => {
	axios
		.post(`${URL}/api/users/signUp`, { userName, email, password, cPassword })
		.then((res) => {
			console.log(res);
			dispatch(registerUser(res));
			return history.push("/login");
		})
		.catch((e) => console.log(e));
};

export const Login = ({ email, password, history, dispatch }) => {
	axios
		.post(`${URL}/api/users/signIn`, { email, password })
		.then((res) => {
			if (res.data) {
				if (res.data.user.role === 1) {
					history.push("/dashboard");
					localStorage.setItem("user", JSON.stringify(res.data));
					dispatch(loginUser(res.data));
				}
				history.push("/");
				localStorage.setItem("user", JSON.stringify(res.data));
				dispatch(loginUser(res.data));
			}
		})
		.catch((e) => console.log(e));
};

export const LogOut = ({ dispatch }) => {
	dispatch(logoutUser());
};

export const fetchUserDetail = ({ id, dispatch }) => {
	axios
		.get(`${URL}/api/users/singleUser/${id}`)
		.then((res) => {
			dispatch(getUserData(id));
			dispatch(setUserData(res.data));
			localStorage.setItem("userData", JSON.stringify(res.data));
			return res;
		})
		.catch((e) => console.log(e));
};
