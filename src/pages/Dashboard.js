import React, { useState } from "react";
import {
	AverageOrders,
	CategoriesIcon,
	CustomerIcon,
	ProductsIcon,
} from "../assets/icons/Admin";
import DashboardCover from "../components/Dashboard/DashboardCover";
import {
	DashboardTable,
	DashboardTopCard,
	DashboardTopCardImage,
	DashboardTopCardMain,
	DashboardTopDiv,
	DTCSub,
	ImageUploadContainer,
	TRGrid,
	TRGridData,
	TRGridDataUser,
	UserImageContainer,
} from "../pages_styles/DashboardStyles";
import { useSelector } from "react-redux";
import ImageUpload from "../utils/ImageUpload";

import { Helmet } from "react-helmet";

const Dashboard = () => {
	const [image, setImage] = useState("");

	const user = useSelector((state) => state?.userData?.userData?.user);

	const tableHeading = ["ID", "Order", "User", "Status"];

	const tableData = [
		{
			id: "4316fds4gfd1g6df46g32",
			order:
				"HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch (39.62 cms)",
			user: {
				userImage: user?.userImage,
				userName: user?.userName,
			},
			status: "Order Placed",
		},
		{
			id: "4316fds4gfd1g6df46g32",
			order:
				"HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch (39.62 cms)",
			user: {
				userImage: user?.userImage,
				userName: user?.userName,
			},
			status: "Order Placed",
		},
		{
			id: "4316fds4gfd1g6df46g32",
			order:
				"HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch (39.62 cms)",
			user: {
				userImage: user?.userImage,
				userName: user?.userName,
			},
			status: "Order Placed",
		},
		{
			id: "4316fds4gfd1g6df46g32",
			order:
				"HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch (39.62 cms)",
			user: {
				userImage: user?.userImage,
				userName: user?.userName,
			},
			status: "Order Placed",
		},
		{
			id: "4316fds4gfd1g6df46g32",
			order:
				"HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch (39.62 cms)",
			user: {
				userImage: user?.userImage,
				userName: user?.userName,
			},
			status: "Order Placed",
		},
	];

	return (
		<>
			<Helmet>
				<title>E Commerce Site | Dashboard</title>
			</Helmet>
			<DashboardCover>
				<DashboardTopDiv>
					<DashboardTopCard>
						<DashboardTopCardImage color={"#8481FF"} bg={"#EFEEFF"}>
							<ProductsIcon />
						</DashboardTopCardImage>
						<DashboardTopCardMain>
							<h5>Products</h5>
							<h3>230</h3>
							<DTCSub color={"#8481FF"} bg={"#EFEEFF"}>
								<p>200+ Products</p>
								<span>+10.5%</span>
							</DTCSub>
						</DashboardTopCardMain>
					</DashboardTopCard>
					<DashboardTopCard>
						<DashboardTopCardImage color={"#FF7171"} bg={"#FEEDED"}>
							<CategoriesIcon />
						</DashboardTopCardImage>
						<DashboardTopCardMain>
							<h5>Categories</h5>
							<h3>50</h3>
							<DTCSub color={"#FF7171"} bg={"#FEEDED"}>
								<p>25+ Categories</p>
								<span>+10.5%</span>
							</DTCSub>
						</DashboardTopCardMain>
					</DashboardTopCard>
					<DashboardTopCard>
						<DashboardTopCardImage color={"#6892F8"} bg={"#EAF0FE"}>
							<CustomerIcon />
						</DashboardTopCardImage>
						<DashboardTopCardMain>
							<h5>Customers</h5>
							<h3>156,471</h3>
							<DTCSub color={"#6892F8"} bg={"#EAF0FE"}>
								<p>250+ Orders</p>
								<span>+8.5%</span>
							</DTCSub>
						</DashboardTopCardMain>
					</DashboardTopCard>
					<DashboardTopCard>
						<DashboardTopCardImage color={"#F3B37B"} bg={"#FEF4EC"}>
							<AverageOrders />
						</DashboardTopCardImage>
						<DashboardTopCardMain>
							<h5>Avg Orders</h5>
							<h3>20.15%</h3>
							<DTCSub color={"#F3B37B"} bg={"#FEF4EC"}>
								<p>Last Week</p>
								<span>-2.2%</span>
							</DTCSub>
						</DashboardTopCardMain>
					</DashboardTopCard>
				</DashboardTopDiv>

				<ImageUploadContainer>
					<h4>Upload Image</h4>
					<ImageUpload image={image} setImage={setImage} user={user} />
					<button className="uploadBtn">Upload</button>
				</ImageUploadContainer>

				<DashboardTable>
					<h1>Orders</h1>
					<thead>
						<TRGrid>
							{tableHeading.map((heading, index) => (
								<td key={index}>{heading}</td>
							))}
						</TRGrid>
					</thead>
					<tbody>
						{tableData.map((item, index) => (
							<TRGridData key={index}>
								<td>{item.id}</td>
								<td>{item.order}</td>
								<td>
									<TRGridDataUser>
										<UserImageContainer image={item.user.userImage} />
										<h4>{item.user.userName}</h4>
									</TRGridDataUser>
								</td>
								<td>{item.status}</td>
							</TRGridData>
						))}
					</tbody>
				</DashboardTable>
			</DashboardCover>
		</>
	);
};

export default Dashboard;
