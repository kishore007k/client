import React from "react";

import Stars from "../Stars";

import reviewerOne from "../../assets/images/reviewers/userOne.jpg";
import reviewerTwo from "../../assets/images/reviewers/userTwo.jpg";
import reviewerThree from "../../assets/images/reviewers/userThree.jpg";
import reviewerFour from "../../assets/images/reviewers/userFour.jpg";

import PicOne from "../../assets/images/slide/pic1.jpg";
import PicTwo from "../../assets/images/slide/pic2.jpg";
import PicThree from "../../assets/images/slide/pic3.jpg";
import CustomerReviewCard from "../CustomerReviewCard";
import {
	CustomerRevContainer,
	CustomerRevMain,
	CustomerRevWrapper,
} from "./style";

const data = [
	{
		id: 1,
		reviewerImage: reviewerOne,
		reviewerName: "Shubham Verma",
		reviewImages: [PicOne, PicTwo, PicThree],
		review: `I am giving this review after two days of usage.
    This product is really good, when I took this product, there was no review in it.
    So now when we talk about its review, it is really good. 
    The booting time is only 9 seconds, the graphics is quite awesome. 
    There is no issue of heating even in this summer month. Battery backup is 7 hours 
    in normal use, the full time is 3 to 3½ hours with video and 2 to 2 and a half 
    hours if you talk with the game. The sound quality is quite good. The keyboard 
    light is quite attractive. Overall speaking, this is a very good product, yes you 
    can go for it.`,
		stars: 3,
		createdAt: "",
	},
	{
		id: 2,
		reviewerImage: reviewerTwo,
		reviewerName: "Shubham Verma",
		reviewImages: [PicOne, PicTwo, PicThree],
		review: `I am giving this review after two days of usage.
    This product is really good, when I took this product, there was no review in it.
    So now when we talk about its review, it is really good. 
    The booting time is only 9 seconds, the graphics is quite awesome. 
    There is no issue of heating even in this summer month. Battery backup is 7 hours 
    in normal use, the full time is 3 to 3½ hours with video and 2 to 2 and a half 
    hours if you talk with the game. The sound quality is quite good. The keyboard 
    light is quite attractive. Overall speaking, this is a very good product, yes you 
    can go for it.`,
		stars: 3,
		createdAt: "",
	},
	{
		id: 3,
		reviewerImage: reviewerThree,
		reviewerName: "Shubham Verma",
		reviewImages: [PicOne, PicTwo, PicThree],
		review: `I am giving this review after two days of usage.
    This product is really good, when I took this product, there was no review in it.
    So now when we talk about its review, it is really good. 
    The booting time is only 9 seconds, the graphics is quite awesome. 
    There is no issue of heating even in this summer month. Battery backup is 7 hours 
    in normal use, the full time is 3 to 3½ hours with video and 2 to 2 and a half 
    hours if you talk with the game. The sound quality is quite good. The keyboard 
    light is quite attractive. Overall speaking, this is a very good product, yes you 
    can go for it.`,
		stars: 3,
		createdAt: "",
	},
	{
		id: 4,
		reviewerImage: reviewerFour,
		reviewerName: "Shubham Verma",
		reviewImages: [PicOne, PicTwo, PicThree],
		review: `I am giving this review after two days of usage.
    This product is really good, when I took this product, there was no review in it.
    So now when we talk about its review, it is really good. 
    The booting time is only 9 seconds, the graphics is quite awesome. 
    There is no issue of heating even in this summer month. Battery backup is 7 hours 
    in normal use, the full time is 3 to 3½ hours with video and 2 to 2 and a half 
    hours if you talk with the game. The sound quality is quite good. The keyboard 
    light is quite attractive. Overall speaking, this is a very good product, yes you 
    can go for it.`,
		stars: 3,
		createdAt: "",
	},
];

const CustomerReviews = ({ stars, reviewCount }) => {
	return (
		<CustomerRevContainer>
			<CustomerRevMain>
				<h3>Customer Reviews</h3>
				<span>
					<Stars stars={stars} />
					<pre>({reviewCount})</pre>
				</span>
			</CustomerRevMain>
			<CustomerRevWrapper>
				{data.map((reviewData) => (
					<CustomerReviewCard reviewData={reviewData} key={reviewData.id} />
				))}
			</CustomerRevWrapper>
		</CustomerRevContainer>
	);
};

export default CustomerReviews;
