import React, { useState } from "react";
import {
	AverageOrders,
	CategoriesIcon,
	CustomerIcon,
	ProductsIcon,
} from "../assets/icons/Admin";
import DashboardCover from "../components/Dashboard/DashboardCover";
import {
	DashboardTopCard,
	DashboardTopCardImage,
	DashboardTopCardMain,
	DashboardTopDiv,
	DTCSub,
	ImageUploadContainer,
} from "../pages_styles/DashboardStyles";
import { useSelector } from "react-redux";
import ImageUpload from "../utils/ImageUpload";

import { Helmet } from "react-helmet";

const Dashboard = () => {
	const [image, setImage] = useState("");

	const user = useSelector((state) => state?.userData?.userData?.user);

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
			</DashboardCover>
		</>
	);
};

export default Dashboard;
