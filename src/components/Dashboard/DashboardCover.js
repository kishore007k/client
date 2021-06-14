import React, { useEffect, useState } from "react";
import { fetchUserDetail } from "../../api/Auth";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { LogoIcon } from "../../assets/icons/Header Icons";
import { COLORS } from "../../assets/styles";
import {
	DashboardContainer,
	DashboardHeader,
	DashboardWrapper,
	DHWrapper,
	DMain,
	DSBItem,
	DSBItems,
	DSBLogout,
	DSideBar,
	UserData,
	UserProfilePic,
} from "./DashboardStyles";
import {
	CategoriesIcon,
	DashboardIcon,
	LogoutIcon,
	OrderIcon,
	ShopIcon,
	UserIcon,
} from "../../assets/icons/Admin";

const DashboardCover = ({ children }) => {
	const localUserDataJson = JSON.parse(localStorage.getItem("user"));
	const userDataLS = JSON.parse(localStorage.getItem("userData"));

	const dispatch = useDispatch();
	const user = useSelector((state) => state?.userData?.userData?.user);

	const id = localUserDataJson?.data?._id;

	useEffect(() => {
		fetchUserDetail({ id, dispatch });
	}, [id, dispatch]);

	const currentPath = window.location.pathname;

	const path = currentPath.split("/").pop();

	return (
		<DashboardWrapper>
			<DashboardHeader>
				<DHWrapper>
					<Link to="/">
						<LogoIcon color={COLORS.secondary} />
					</Link>
					<UserData>
						<Link to="/admin/profile">
							<h4>{user ? user.userName : userDataLS.userName}</h4>
							<UserProfilePic image={user ? user.userImage : userDataLS.userImage} />
						</Link>
					</UserData>
				</DHWrapper>
			</DashboardHeader>
			<DMain>
				<DSideBar>
					<DSBItems>
						<DSBItem active={path === "dashboard" ? true : false}>
							<Link to="/dashboard">
								<DashboardIcon />
								Dashboard
							</Link>
						</DSBItem>
						<DSBItem active={path === "categories" ? true : false}>
							<Link to="/categories">
								<CategoriesIcon />
								Categories
							</Link>
						</DSBItem>
						<DSBItem active={path === "shop" ? true : false}>
							<Link to="/shop">
								<ShopIcon />
								Shop
							</Link>
						</DSBItem>
						<DSBItem active={path === "users" ? true : false}>
							<Link to="/users">
								<UserIcon />
								Users
							</Link>
						</DSBItem>
						<DSBItem active={path === "orders" ? true : false}>
							<Link to="/orders">
								<OrderIcon />
								Orders
							</Link>
						</DSBItem>
					</DSBItems>
					<DSBLogout>
						<LogoutIcon color={COLORS.mediumBlack} />
						<p>Log Out</p>
					</DSBLogout>
				</DSideBar>
				<DashboardContainer>{children}</DashboardContainer>
			</DMain>
		</DashboardWrapper>
	);
};

export default DashboardCover;
