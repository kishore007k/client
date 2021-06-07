import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../../../api/Auth";
import { UpdateUserProfile } from "../../../api/Upload";

const EditUserProfile = () => {
	const localUserDataJson = JSON.parse(localStorage.getItem("user"));
	const userData = JSON.parse(localStorage.getItem("userData"));

	const UserDataReducer = useSelector((state) => state.userData?.userData?.user);
	const dispatch = useDispatch();

	const [image, setImage] = useState(
		UserDataReducer?.userImage
			? UserDataReducer?.userImage
			: userData?.user?.userImage
	);
	const [userName, setUserName] = useState(
		UserDataReducer?.userName
			? UserDataReducer?.userName
			: userData?.user?.userName
	);
	const [phNumber, setPhNumber] = useState(
		UserDataReducer?.phoneNumber
			? UserDataReducer?.phoneNumber
			: userData?.user?.phoneNumber
	);

	const id = localUserDataJson?.data?._id;
	const localToken = localUserDataJson?.token;

	const UpdateUser = (e) => {
		e.preventDefault();
		UpdateUserProfile({
			userImage: image,
			id,
			userName: userName,
			phoneNumber: phNumber,
			dispatch,
			localToken,
		});
	};

	useEffect(() => {
		fetchUserDetail({ id, dispatch });
	}, [id, dispatch]);

	return (
		<div>
			<p>Upload your Profile Pic Here</p>
			<FileBase64 onDone={(files) => setImage(files.base64)} />
			{UserDataReducer || image ? (
				<img
					src={
						image === UserDataReducer?.userImage ? UserDataReducer?.userImage : image
					}
					alt={
						userName === UserDataReducer?.userName
							? UserDataReducer?.userName
							: image?.name
					}
					style={{ width: "30%", margin: "50 auto", borderRadius: "50%" }}
				/>
			) : (
				<></>
			)}
			<br />
			<hr />
			<label>User Name:</label>
			<input
				type="text"
				placeholder="UserName"
				value={
					userName === UserDataReducer?.userName
						? UserDataReducer?.userName
						: userName
				}
				onChange={(e) => setUserName(e.target.value)}
			/>
			<hr />
			<label>Phone Number:</label>
			<input
				type="number"
				placeholder="phone number"
				value={
					phNumber === UserDataReducer?.phoneNumber
						? UserDataReducer?.phoneNumber
						: phNumber
				}
				onChange={(e) => setPhNumber(e.target.value)}
			/>
			<br />
			<hr />
			<br />
			<button onClick={UpdateUser}>Update</button>
			<hr />
		</div>
	);
};

export default EditUserProfile;
