import React from "react";

import Stars from "../Stars";
import {
	CustomerReviewWrapper,
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
			<div>
				<p>{review}</p>
			</div>
			<div>
				<ReviewImages src={reviewImages[0]} alt={reviewerName} />
				<ReviewImages src={reviewImages[1]} alt={reviewerName} />
				<ReviewImages src={reviewImages[2]} alt={reviewerName} />
			</div>
		</CustomerReviewWrapper>
	);
};

export default CustomerReviewCard;
