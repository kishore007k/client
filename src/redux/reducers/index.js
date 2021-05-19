import { combineReducers } from "redux";
import { setUserDataReducer } from "./UserReducer";

const reducers = combineReducers({
	userData: setUserDataReducer,
});

export default reducers;
