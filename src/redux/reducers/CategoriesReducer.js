import ActionTypes from "../constants/actionTypes";

const INITIAL_STATE = {
	categories: {},
};

export const CategoriesReducer = (state = INITIAL_STATE, { type, payload }) => {
	switch (type) {
		case ActionTypes.GET_ALL_CATEGORIES:
			return { ...state, categories: payload };
		default:
			return state;
	}
};
