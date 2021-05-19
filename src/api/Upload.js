import axios from "axios";
import { updateUser } from "../redux/actions/Users";

const URL = "http://localhost:3001";

export const UpdateUserProfile = ({
	userImage,
	id,
	userName,
	phoneNumber,
	dispatch,
	localToken,
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
				{ userImage, uId: id, userName, phoneNumber },
				config
			)
			.then((res) => {
				dispatch(updateUser(res.data));
			})
			.catch((e) => console.log(e));
	}
};
