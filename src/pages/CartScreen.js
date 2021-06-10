import React, { useState } from "react";
import {
	BuyNowBtnContainer,
	CardGrid,
	CartBackIcon,
	CartCart,
	CartCartCart,
	CartCloseIcon,
	CartCouponInput,
	CartCouponInputContainer,
	CartGridView,
	CartHeadings,
	CartMain,
	CartProductImage,
	CartRightSideCard,
	CartRightSideCardContainer,
	CartRSAddress,
	CartRSPhoneNo,
	CartTotalContainer,
	CartWrapper,
	RadioBtnWrapper,
} from "../pages_styles/CartScreenStyles";

import ProductOne from "../assets/images/cart/p1.png";
import ProductTwo from "../assets/images/cart/p2.png";
import ProductThree from "../assets/images/cart/p3.png";
import ProductFour from "../assets/images/cart/p4.png";
import { BackIcon, CloseIcon } from "../assets/icons";
import { COLORS } from "../assets/styles";

import { Link } from "react-router-dom";

const headings = [
	{
		title: "product",
	},
	{
		title: "details",
	},
	{
		title: "qty",
	},
	{
		title: "cost",
	},
	{
		title: "",
	},
];

const data = [
	{
		product: ProductOne,
		details:
			"HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch (39.62 cms) ",
		qty: "1",
		cost: "₹ 78,500/-",
	},
	{
		product: ProductTwo,
		details:
			"HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch (39.62 cms) ",
		qty: "1",
		cost: "₹ 78,500/-",
	},
	{
		product: ProductThree,
		details:
			"HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch (39.62 cms) ",
		qty: "1",
		cost: "₹ 78,500/-",
	},
	{
		product: ProductFour,
		details:
			"HP Pavilion Gaming 9th Gen Intel Core i5 Processor 15.6-inch (39.62 cms) ",
		qty: "1",
		cost: "₹ 78,500/-",
	},
];

const deliveryOptions = [
	{
		option: "Standard",
	},
	{
		option: "Two-Day",
	},
	{
		option: "Prime",
	},
];

const paymentOptions = [
	{
		option: "COD",
	},
	{
		option: "Credit/Debit Card",
	},
	{
		option: "GPay",
	},
];

const CartScreen = () => {
	const [coupon, setCoupon] = useState("");
	const [activeDO, setActiveDO] = useState("Standard");
	const [activePO, setActivePO] = useState("Credit/Debit Card");

	return (
		<CartWrapper>
			<CartBackIcon>
				<Link to="/">
					<BackIcon color={COLORS.mediumBlack} /> Continue Shopping
				</Link>
			</CartBackIcon>
			<CartMain>
				<CartCartCart>
					<CartCart>
						<h3>shopping cart</h3>
						<div>
							<CardGrid>
								{headings.map((item, index) => (
									<CartHeadings key={index}>{item.title}</CartHeadings>
								))}
							</CardGrid>
							<div>
								{data.map((item, index) => (
									<CartGridView key={index}>
										<CartProductImage image={item.product} />
										<div>
											<p>{item.details}</p>
										</div>
										<div>
											<span>{item.qty}</span>
										</div>
										<div>
											<span>{item.cost}</span>
										</div>
										<CartCloseIcon>
											<CloseIcon color={COLORS.darkGrey} />
										</CartCloseIcon>
									</CartGridView>
								))}
							</div>
						</div>
					</CartCart>
					<CartTotalContainer>
						<h3>Total: </h3>
						<h4>₹ 78,500/-</h4>
					</CartTotalContainer>
				</CartCartCart>
				<CartRightSideCardContainer>
					<CartRightSideCard>
						<h1>Shipping Details</h1>
						<div>
							<h3>Address</h3>
							<CartRSAddress>
								2924,Washington Street, Port Lavaca State TX, Texas-77979.
							</CartRSAddress>
						</div>
						<div>
							<h3>Mobile Number</h3>
							<CartRSPhoneNo>361-482-6348</CartRSPhoneNo>
						</div>
						<div>
							<h3>Shipping Method</h3>
							<RadioBtnWrapper>
								{deliveryOptions.map((item, index) => (
									<label className="rad-label" key={index}>
										<input
											type="radio"
											className="rad-input"
											checked={activeDO === item.option ? true : false}
											onChange={() => setActiveDO(item.option)}
										/>
										<div className="rad-design"></div>
										<div className="rad-text">{item.option}</div>
									</label>
								))}
							</RadioBtnWrapper>
						</div>
						<div>
							<h3>Payment Method</h3>
							<RadioBtnWrapper>
								{paymentOptions.map((item, index) => (
									<label className="rad-label" key={index}>
										<input
											type="radio"
											className="rad-input"
											checked={activePO === item.option ? true : false}
											onChange={() => setActivePO(item.option)}
										/>
										<div className="rad-design"></div>
										<div className="rad-text">{item.option}</div>
									</label>
								))}
							</RadioBtnWrapper>
						</div>
						<div>
							<h3>Coupon Code</h3>
							<CartCouponInputContainer>
								<CartCouponInput
									type="text"
									onChange={(e) => setCoupon(e.target.value)}
									value={coupon}
								/>
							</CartCouponInputContainer>
						</div>
					</CartRightSideCard>
					<BuyNowBtnContainer>
						<button>Buy Now</button>
					</BuyNowBtnContainer>
				</CartRightSideCardContainer>
			</CartMain>
		</CartWrapper>
	);
};

export default CartScreen;
