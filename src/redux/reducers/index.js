import { combineReducers } from "redux";
import { CategoriesReducer } from "./CategoriesReducer";
import { setUserDataReducer } from "./UserReducer";

const reducers = combineReducers({
	userData: setUserDataReducer,
	categories: CategoriesReducer,
});

export default reducers;
