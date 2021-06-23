import React, { useState } from "react";
import styled from "styled-components";

// Product Images
import PicOne from "../assets/images/slide/pic1.jpg";
import PicTwo from "../assets/images/slide/pic2.jpg";
import PicThree from "../assets/images/slide/pic3.jpg";
import PicFour from "../assets/images/slide/pic4.jpg";
import ProductCard from "../screens/ProductCard";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { FilterIcon, SortIcon } from "../assets/icons";
import { COLORS, FONTS } from "../assets/styles";
import { SearchIcon } from "../assets/icons/Header Icons";

import { Helmet } from "react-helmet";

const data = [
	{
		title: "ROG Strix GT 4X",
		image: [PicOne, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 4,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicTwo, PicFour, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 3,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicThree, PicTwo, PicFour],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 4,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicFour, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 5,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicOne, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 1,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicTwo, PicFour, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 3,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicThree, PicTwo, PicFour],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 4,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicFour, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 4,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicOne, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 5,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicTwo, PicFour, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 4,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicThree, PicTwo, PicFour],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 2,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicFour, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 4,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicOne, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 4,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicTwo, PicFour, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 3,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicThree, PicTwo, PicFour],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 4,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicFour, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 5,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicThree, PicTwo, PicFour],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 4,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
	{
		title: "ROG Strix GT 4X",
		image: [PicFour, PicTwo, PicThree],
		desc:
			"Some Desc about the product and some features that this product has and how much it will be useful",
		stat: "Best Selling",
		price: "₹4400",
		category: "computer",
		stars: 4,
		reviewCount: 4201,
		slug: "rog-strix-gt-4x",
	},
];

const ProductScreen = () => {
	const [search, setSearch] = useState("");

	return (
		<>
			<Helmet>
				<title>E Commerce Site | Products</title>
			</Helmet>
			<Header />
			<ProductPageWrapper>
				<ActionBtnContainer>
					<ActionButtons>
						Sort <SortIcon />
					</ActionButtons>
					<SearchBarContainer>
						<SearchIcon color={COLORS.primary} />
						<SearchBar
							type="text"
							name="searchField"
							placeholder="e.q,Laptops..."
							onChange={(e) => setSearch(e.target.value)}
							value={search}
						/>
					</SearchBarContainer>
					<ActionButtons>
						Filter <FilterIcon />
					</ActionButtons>
				</ActionBtnContainer>
				<div>
					<ProductCard data={data} />
				</div>
			</ProductPageWrapper>
			<Footer />
		</>
	);
};

export default ProductScreen;

const ProductPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 100%;
	max-width: 1300px;
	margin: 80px auto;
`;

const ActionBtnContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	padding-top: 20px;
`;

const ActionButtons = styled.button`
	display: flex;
	align-items: center;
	background-color: ${COLORS.filterBtn};
	padding: 10px 20px;
	border: none;
	outline: none;
	border-radius: 10px;
	font-size: ${FONTS.fontSize.title};
	color: ${COLORS.white};
	font-weight: ${FONTS.fontWeight.semiBold};
	cursor: pointer;

	svg {
		margin-left: 10px;
	}
`;

const SearchBarContainer = styled.div`
	display: flex;
	align-items: center;
	position: relative;

	svg {
		position: absolute;
		right: 0px;
		background-color: ${COLORS.BgShade};
		width: 40px;
		height: 39px;
		padding: 5px;
		border-top: 1px solid ${COLORS.darkGrey};
		border-bottom: 1px solid ${COLORS.darkGrey};
		border-right: 1px solid ${COLORS.darkGrey};
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
		cursor: pointer;
		transition: 0.5s ease-in-out all;
		box-shadow: -2px 0px 4px rgba(0, 0, 0, 0);

		:hover {
			box-shadow: -2px 0px 4px rgba(0, 0, 0, 0.1);
			background-color: none;
		}
	}
`;

const SearchBar = styled.input`
	padding: 10px;
	width: 350px;
	border: 1px solid ${COLORS.darkGrey};
	border-radius: 5px;
	letter-spacing: 0.2em;

	:focus {
		outline: none;
	}
`;
