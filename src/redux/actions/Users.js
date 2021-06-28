import ActionTypes from "../constants/actionTypes";

export const getUserData = (id) => {
	return {
		type: ActionTypes.GET_USER_DATA,
		payload: id,
	};
};

export const setUserData = (userData) => {
	return {
		type: ActionTypes.SET_USER_DATA,
		payload: userData,
	};
};

export const registerUser = (data) => {
	return {
		type: ActionTypes.USER_REGISTER,
		payload: data,
	};
};

export const loginUser = (userData) => {
	return {
		type: ActionTypes.USER_LOGIN,
		payload: userData,
	};
};

export const logoutUser = () => {
	return {
		type: ActionTypes.USER_LOGOUT,
	};
};

export const updateUser = (updatedUserData) => {
	return {
		type: ActionTypes.UPDATE_USER_DETAILS,
		payload: updatedUserData,
	};
};

export const forgotPassword = (message) => {
	return {
		type: ActionTypes.FORGOT_PASSWORD,
		payload: message,
	};
};

export const resetPassword = (message) => {
	return {
		type: ActionTypes.RESET_PASSWORD,
		payload: message,
	};
};

export const getAllCategories = (categories) => {
	return {
		type: ActionTypes.GET_ALL_CATEGORIES,
		payload: categories,
	};
};
