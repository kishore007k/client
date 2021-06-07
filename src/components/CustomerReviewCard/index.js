import React from "react";

import Stars from "../Stars";
import {
	CustomerReviewWrapper,
	Review,
	ReviewerNameAndImage,
	ReviewerNameAndStars,
	ReviewerProImage,
	ReviewerProImageBg,
	ReviewerProImageContainer,
	ReviewImages,
} from "./style";

const CustomerReviewCard = ({ reviewData }) => {
	const { reviewerImage, reviewerName, reviewImages, review, stars } =
		reviewData;

	return (
		<CustomerReviewWrapper>
			<ReviewerNameAndImage>
				<ReviewerProImageContainer>
					<ReviewerProImage reviewerImage={reviewerImage} />
					<ReviewerProImageBg />
				</ReviewerProImageContainer>
				<ReviewerNameAndStars>
					<h5>{reviewerName}</h5>
					<Stars stars={stars} />
				</ReviewerNameAndStars>
			</ReviewerNameAndImage>
			<Review>
				<p>{review}</p>
			</Review>
			<div>
				{reviewImages.map((img, index) => (
					<ReviewImages src={img} alt={reviewerName} key={index} />
				))}
			</div>
		</CustomerReviewWrapper>
	);
};

export default CustomerReviewCard;
