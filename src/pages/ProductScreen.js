import React from "react";
import Stars from "../components/Stars";

import BuyNowBtn from "../utils/BuyNowBtn";
import AddToCartBtn from "../utils/AddToCartBtn";

const ProductScreen = (props) => {
	const {
		product: { image, desc, stars, title, price, reviewCount, stat },
	} = props?.location?.state;

	console.log({ image, desc, stars, title, price, reviewCount, stat });

	return (
		<div>
			<div>Product Images</div>
			<div>
				<h1>{title}</h1>
				<div>
					<Stars stars={stars} />
					<span>{reviewCount}</span>
				</div>
				<div />
				<div>
					<div>
						<div>
							<h3>M.R.P {price}/-</h3>
						</div>
						<div>
							<div>
								<img src="" alt="" />
								<span>10 days replacement</span>
							</div>
							<div>
								<img src="" alt="" />
								<span>free devilry</span>
							</div>
							<div>
								<img src="" alt="" />
								<span>1 year warranty</span>
							</div>
						</div>
					</div>
					<div>
						<BuyNowBtn>Buy Now</BuyNowBtn>
						<AddToCartBtn>Add To Cart</AddToCartBtn>
					</div>
				</div>
				<div />
				<div>
					<h4>About this item:</h4>
					<p>{desc}</p>
				</div>
				<div />
			</div>
		</div>
	);
};

export default ProductScreen;
