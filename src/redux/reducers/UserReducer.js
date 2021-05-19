import ActionTypes from "../constants/actionTypes";

const INITIAL_STATE = {
	registerUser: {},
	loginUser: {},
	userData: {},
	updateMessage: {},
};

export const setUserDataReducer = (
	state = INITIAL_STATE.userData,
	{ type, payload }
) => {
	switch (type) {
		case ActionTypes.USER_REGISTER:
			return { ...state, registerUser: payload };
		case ActionTypes.USER_LOGIN:
			return { ...state, loginUser: payload };
		case ActionTypes.USER_LOGOUT:
			return { ...state, userData: {}, loginUser: {}, registerUser: {} };
		case ActionTypes.SET_USER_DATA:
			return { ...state, userData: payload };
		case ActionTypes.UPDATE_USER_DETAILS:
			return { ...state, updateMessage: payload.message, userData: payload.data };
		default:
			return state;
	}
};
