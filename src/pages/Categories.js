import React, { useEffect, useState } from "react";

import FileBase64 from "react-file-base64";
import { useDispatch } from "react-redux";

import { createCategories, fetchAllCategories } from "../api/Auth";
import {
	CategoryImage,
	CategoryNameAndInput,
	CImage,
	Container,
	ImageUploaderDiv,
	InputContainer,
	MainDiv,
	PImageContainer,
	SideWrapper,
	UnorderedList,
	Wrapper,
} from "../pages_styles/CategoriesStyles";

const Categories = () => {
	const userData = JSON.parse(localStorage.getItem("user"));
	const localToken = userData?.token;

	const dispatch = useDispatch();

	const [image, setImage] = useState("");
	const [categoryName, setCategoryName] = useState("");
	const [category, setCategories] = useState([]);

	const handleCreateCategories = (e) => {
		e.preventDefault();
		createCategories({ cName: categoryName, cImage: image, localToken });
	};

	useEffect(() => {
		fetchAllCategories({ localToken, dispatch, setCategories });
	}, [localToken, dispatch, setCategories, category]);

	return (
		<Container>
			<Wrapper>
				<h1>Add a New Category</h1>
				<MainDiv>
					<CategoryNameAndInput>
						<h3>Category Name</h3>
						<input
							type="text"
							placeholder="e,q., Laptops"
							value={categoryName}
							onChange={(e) => setCategoryName(e.target.value)}
						/>
					</CategoryNameAndInput>
					<CategoryImage>
						<h3>Category Image</h3>
						{image !== "" ? (
							<div>
								<CImage image={image} />
							</div>
						) : (
							<ImageUploaderDiv>
								<InputContainer>
									<span>Drag & Drop</span>
									<FileBase64 onDone={(files) => setImage(files.base64)} />
								</InputContainer>
							</ImageUploaderDiv>
						)}
					</CategoryImage>
				</MainDiv>
				<button onClick={handleCreateCategories}>Create</button>
			</Wrapper>
			<SideWrapper>
				<h3>List Of categories</h3>
				<UnorderedList>
					{category.map((category, index) => (
						<li key={index}>
							<span />
							<div>
								{category.cName} <PImageContainer image={category?.cImage} />
							</div>
						</li>
					))}
				</UnorderedList>
			</SideWrapper>
		</Container>
	);
};

export default Categories;
