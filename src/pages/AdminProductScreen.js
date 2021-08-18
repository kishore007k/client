import React, { useState } from "react";
import { DeleteIcon, EditIcon } from "../assets/icons/Admin";
import {
	APSContainer,
	ASPTable,
	ASPTableBody,
	ASPTableCheckBox,
	ASPTableHead,
	ASPTopAddPBtn,
	ASPTopContainer,
	ASPTopSearchDiv,
	ASPTopSearchInput,
	ASPTopTitleC,
} from "../pages_styles/AdminProductScreenStyle";

const AdminProductScreen = () => {
	const [searchData, setSearchData] = useState("");

	const tableHeader = [
		"image",
		"title",
		"Sub Title",
		"price",
		"rating",
		"actions",
	];

	const tableData = [
		{
			id: 1,
			image: "",
			title: "I Mac Mini",
			subTitle: "An Apple Product",
			price: 512,
			rating: 2,
		},
		{
			id: 2,
			image: "",
			title: "I Mac Mini",
			subTitle: "An Apple Product",
			price: 512,
			rating: 2,
		},
		{
			id: 3,
			image: "",
			title: "I Mac Mini",
			subTitle: "An Apple Product",
			price: 512,
			rating: 2,
		},
		{
			id: 4,
			image: "",
			title: "I Mac Mini",
			subTitle: "An Apple Product",
			price: 512,
			rating: 2,
		},
		{
			id: 5,
			image: "",
			title: "I Mac Mini",
			subTitle: "An Apple Product",
			price: 512,
			rating: 2,
		},
	];

	return (
		<APSContainer>
			<ASPTopContainer>
				<ASPTopTitleC>
					<h2>products</h2>
					<span>(pCount)</span>
				</ASPTopTitleC>
				<ASPTopSearchDiv>
					<label htmlFor="">Search</label>
					<ASPTopSearchInput
						type="text"
						value={searchData}
						onChange={(e) => setSearchData(e.target.value)}
					/>
				</ASPTopSearchDiv>
				<div>
					<ASPTopAddPBtn>Add Product</ASPTopAddPBtn>
				</div>
			</ASPTopContainer>
			<div>
				<ASPTable>
					<thead>
						<ASPTableHead>
							<td>
								<ASPTableCheckBox>
									<label className="container-checkbox">
										ID
										<input type="checkbox" />
										<span className="checkmark"></span>
									</label>
								</ASPTableCheckBox>
							</td>
							{tableHeader.map((heading, index) => (
								<td key={index}>{heading}</td>
							))}
						</ASPTableHead>
					</thead>
					<tbody>
						{tableData.map((item) => (
							<ASPTableBody key={item.id}>
								<td>
									<ASPTableCheckBox>
										<label className="container-checkbox">
											{item.id}
											<input type="checkbox" />
											<span className="checkmark"></span>
										</label>
									</ASPTableCheckBox>
								</td>
								<td>
									<div image={item.image} />
								</td>
								<td>{item.title}</td>
								<td>{item.subTitle}</td>
								<td>{item.price}</td>
								<td>{item.rating}</td>
								<td>
									<div>
										<button>
											<EditIcon />
										</button>
										<button>
											<DeleteIcon />
										</button>
									</div>
								</td>
							</ASPTableBody>
						))}
					</tbody>
				</ASPTable>
			</div>
		</APSContainer>
	);
};

export default AdminProductScreen;
