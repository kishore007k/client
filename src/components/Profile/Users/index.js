import React, { useEffect } from "react";
import Header from "../../Header";
import Footer from "../../Footer";
import { BackCurve, EditIcon, OrderCurve } from "../../../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import {
	BackCurveContainer,
	BlurEffect,
	EditIconContainer,
	ProfileContainer,
	ProfileImage,
	ProfileMain,
	ProfilePageContainer,
	ProfileSub,
	UserInfo,
	UserInfoTitle,
	UserInfoDiv,
	UserName,
	UserLastName,
	UserEmail,
	UserAddress,
	UserAddressTitle,
	UserAddressDiv,
	Address,
	OrdersTitle,
	OrdersContainer,
	OrdersImage,
	OrdersMain,
	OrdersSpan,
	CustomTableWrapper,
} from "./style";
import { Link } from "react-router-dom";
import { fetchUserDetail } from "../../../api/Auth";
import { COLORS } from "../../../assets/styles";

import OrderImage from "../../../assets/images/slide/pic1.jpg";
import CustomTable from "../../CustomTable";

const UserProfile = () => {
	const localUserDataJson = JSON.parse(localStorage.getItem("user"));
	const dispatch = useDispatch();

	const id = localUserDataJson?.data?._id;

	useEffect(() => {
		fetchUserDetail({ id, dispatch });
	}, [id, dispatch]);

	const user = useSelector((state) => state?.userData?.userData?.user);

	const tableData = [
		{
			orderTitle: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
			createdAt: "15 March 2020",
			orderStatus: "Order PLaced",
		},
		{
			orderTitle: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
			createdAt: "22 October 2019",
			orderStatus: "On Progress",
		},
		{
			orderTitle: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
			createdAt: "12 June 2019",
			orderStatus: "Delivered",
		},
		{
			orderTitle:
				"Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
			createdAt: "7 January 2019",
			orderStatus: "Delivered",
		},
	];

	const tableHeadings = [
		{
			title: "Product Name",
		},
		{
			title: "Created At",
		},
		{
			title: "Order Status",
		},
	];

	const CurrentState = "onProgress";

	return (
		<div>
			<Header color={COLORS.profileNav} />
			<div style={{ marginTop: "80px" }}>
				<BackCurveContainer>
					<BackCurve />
				</BackCurveContainer>
				{/* Main */}
				<ProfilePageContainer>
					<ProfileContainer>
						<ProfileImage image={user?.userImage} />
						<EditIconContainer>
							<Link to="/editProfile">
								<EditIcon />
								<BlurEffect />
							</Link>
						</EditIconContainer>
					</ProfileContainer>
					<ProfileMain>
						<ProfileSub>
							<UserInfo>
								<UserInfoTitle>User Information</UserInfoTitle>
								<UserInfoDiv>
									<h4>User Name:</h4>
									<UserName>{user?.userName}</UserName>
								</UserInfoDiv>
								<UserInfoDiv>
									<h4>First Name:</h4>
									<h6>{user?.firstName}</h6>
								</UserInfoDiv>
								<UserInfoDiv>
									<h4>Last Name:</h4>
									<UserLastName>{user?.lastName}</UserLastName>
								</UserInfoDiv>
								<UserInfoDiv>
									<h4>Email:</h4>
									<UserEmail>{user?.email}</UserEmail>
								</UserInfoDiv>
							</UserInfo>
							<UserAddress>
								<UserAddressTitle>User Shipping Address</UserAddressTitle>
								<UserAddressDiv>
									<h5>Address:</h5>
									<Address>{user?.userAddress?.address}</Address>
								</UserAddressDiv>
								<UserAddressDiv>
									<h5>Mobile Number:</h5>
									<p>{user?.userAddress?.phoneNumber}</p>
								</UserAddressDiv>
							</UserAddress>
						</ProfileSub>
						<OrdersTitle>Orders</OrdersTitle>
						<div>
							<OrdersContainer>
								<OrdersImage>
									<img src={OrderImage} alt="OrderImage" />
								</OrdersImage>
								<OrdersMain>
									<h2>SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s</h2>
									<p>
										Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis
										tenetur quidem commodi. Minus, a nobis sapiente natus eveniet
										blanditiis atque magnam quo incidunt quis quos necessitatibus autem!
										Ratione, voluptatum in?
									</p>
									<div>
										<OrdersSpan
											color={CurrentState === "orderPlaced" ? COLORS.orangeBtn : ""}
										>
											Order Placed
											<OrderCurve />
										</OrdersSpan>
										<OrdersSpan
											color={CurrentState === "onProgress" ? COLORS.orangeBtn : ""}
										>
											On Progress
											<OrderCurve />
										</OrdersSpan>
										<OrdersSpan
											color={CurrentState === "outForDelivery" ? COLORS.orangeBtn : ""}
										>
											Out For Delivery
											<OrderCurve />
										</OrdersSpan>
										<OrdersSpan
											color={CurrentState === "delivered" ? COLORS.orangeBtn : ""}
										>
											Delivered
										</OrdersSpan>
									</div>
								</OrdersMain>
							</OrdersContainer>
							<CustomTableWrapper>
								<CustomTable data={tableData} headings={tableHeadings} />
							</CustomTableWrapper>
						</div>
					</ProfileMain>
				</ProfilePageContainer>
			</div>
			<Footer />
		</div>
	);
};

export default UserProfile;
