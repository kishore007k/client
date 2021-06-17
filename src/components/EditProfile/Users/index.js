import React, { useEffect, useState } from "react";
import FileBase64 from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserDetail } from "../../../api/Auth";
import { UpdateUserProfile } from "../../../api/Upload";
import Header from "../../Header";
import Footer from "../../Footer";
import {
	BackCurveContainer,
	EditProfileContainer,
	EditProfileImage,
	EditProfileTitle,
	EPImageUpload,
	EPImageUploader,
	EPInputs,
	EPInnerInputs,
	EPInnerInputPN,
	EPUpdateBtn,
} from "./style";
import { BackCurve } from "../../../assets/icons";
import { useHistory } from "react-router";

import { Helmet } from "react-helmet";

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
	const [firstName, setFirstName] = useState(
		UserDataReducer?.firstName
			? UserDataReducer?.firstName
			: userData?.user?.firstName
	);
	const [lastName, setLastName] = useState(
		UserDataReducer?.lastName
			? UserDataReducer?.lastName
			: userData?.user?.lastName
	);
	const [email, setEmail] = useState(
		UserDataReducer?.email ? UserDataReducer?.email : userData?.user?.email
	);
	const [phNumber, setPhNumber] = useState(
		UserDataReducer?.userAddress?.phoneNumber
			? UserDataReducer?.userAddress?.phoneNumber
			: userData?.user?.userAddress?.phoneNumber
	);

	const id = localUserDataJson?.data?._id;
	const localToken = localUserDataJson?.token;
	const history = useHistory();

	const UpdateUser = (e) => {
		e.preventDefault();
		UpdateUserProfile({
			userImage: image,
			id,
			userName: userName,
			phoneNumber: phNumber,
			firstName,
			lastName,
			email,
			dispatch,
			localToken,
			history,
		});
	};

	useEffect(() => {
		fetchUserDetail({ id, dispatch });
	}, [id, dispatch]);

	return (
		<>
			<Helmet>
				<title>E Commerce Site | Edit {userName}</title>
			</Helmet>
			<Header />
			<BackCurveContainer>
				<BackCurve />
			</BackCurveContainer>
			<EditProfileContainer>
				<EditProfileTitle>Edit Profile</EditProfileTitle>
				<EPImageUpload>
					{UserDataReducer || image ? (
						<EditProfileImage
							image={
								image === UserDataReducer?.userImage
									? UserDataReducer?.userImage
									: image
							}
						/>
					) : (
						<></>
					)}
					<EPImageUploader>
						<span>Select and upload a Picture to update Profile Picture</span>
						<FileBase64 onDone={(files) => setImage(files.base64)} />
					</EPImageUploader>
				</EPImageUpload>
				<EPInputs>
					<EPInnerInputs>
						<div>
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
						</div>
						<div>
							<label>First Name:</label>
							<input
								type="text"
								placeholder="UserName"
								value={
									firstName === UserDataReducer?.firstName
										? UserDataReducer?.firstName
										: firstName
								}
								onChange={(e) => setFirstName(e.target.value)}
							/>
						</div>
					</EPInnerInputs>
					<EPInnerInputs>
						<div>
							<label>Last Name:</label>
							<input
								type="text"
								placeholder="LastName"
								value={
									lastName === UserDataReducer?.lastName
										? UserDataReducer?.lastName
										: lastName
								}
								onChange={(e) => setLastName(e.target.value)}
							/>
						</div>
						<div>
							<label>Email:</label>
							<input
								type="email"
								placeholder="Email"
								value={
									email === UserDataReducer?.email ? UserDataReducer?.email : email
								}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</div>
					</EPInnerInputs>
					<EPInnerInputPN>
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
					</EPInnerInputPN>
				</EPInputs>
				<EPUpdateBtn onClick={UpdateUser}>Update</EPUpdateBtn>
			</EditProfileContainer>
			<Footer />
		</>
	);
};

export default EditUserProfile;
