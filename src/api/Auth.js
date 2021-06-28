import axios from "axios";
import {
	forgotPassword,
	getAllCategories,
	getUserData,
	loginUser,
	logoutUser,
	registerUser,
	resetPassword,
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
			dispatch(registerUser(res));
			return history.push("/login");
		})
		.catch((e) => console.log(e));
};

export const Login = ({ email, password, history, dispatch }) => {
	axios
		.post(`${URL}/api/users/signIn`, { email, password })
		.then((res) => {
			if (res.data.user.role === 0) {
				history.push("/");
				localStorage.setItem("user", JSON.stringify(res.data));
				dispatch(loginUser(res.data));
			} else {
				history.push("/dashboard");
				localStorage.setItem("user", JSON.stringify(res.data));
				dispatch(loginUser(res.data));
			}
		})
		.catch((e) => console.log(e));
};

export const LogOut = ({ dispatch, history }) => {
	dispatch(logoutUser());
	history.push("/");
	localStorage.clear();
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

export const forgotPass = ({ email, secretKey, dispatch }) => {
	axios
		.post(`${URL}/api/users/forgotPass/${email}/${secretKey}`, { email })
		.then((res) => {
			if (res) {
				dispatch(forgotPassword(res.data));
			}
		})
		.catch((err) => console.log(err));
};

export const resetPass = ({
	newPassword,
	cNewPassword,
	id,
	secretKey,
	dispatch,
	email,
}) => {
	axios
		.post(`${URL}/api/users/resetPass/${email}/${secretKey}`, {
			newPassword,
			cNewPassword,
			id,
		})
		.then((res) => {
			dispatch(resetPassword(res));
		})
		.catch((e) => console.log(e));
};

export const createCategories = ({ cName, cImage, localToken }) => {
	const config = {
		headers: {
			Authorization: "Bearer " + localToken,
		},
	};

	axios
		.post(`${URL}/api/categories`, { cName, cImage }, config)
		.then((res) => console.log(res))
		.catch((e) => console.log(e));
};

export const fetchAllCategories = ({ localToken, dispatch, setCategories }) => {
	const config = {
		headers: {
			Authorization: "Bearer " + localToken,
		},
	};

	const response = axios
		.get(`${URL}/api/categories`, config)
		.then((res) => {
			dispatch(getAllCategories(res.data));
			setCategories(res.data);
		})
		.catch((e) => console.log(e));

	return response;
};
