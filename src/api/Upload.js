import axios from "axios";
import { updateUser } from "../redux/actions/Users";

const URL = "http://localhost:3001";

export const UpdateUserProfile = ({
	userImage,
	id,
	userName,
	phoneNumber,
	firstName,
	lastName,
	email,
	dispatch,
	localToken,
	history,
}) => {
	if (localToken) {
		const config = {
			headers: {
				Authorization: "Bearer " + localToken,
			},
		};

		axios
			.post(
				`${URL}/api/users/edit`,
				{ userImage, uId: id, userName, phoneNumber, firstName, lastName, email },
				config
			)
			.then((res) => {
				history.push("/profile");
				dispatch(updateUser(res.data));
			})
			.catch((e) => console.log(e));
	}
};
