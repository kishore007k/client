import React, { useState } from "react";
import { Rating } from "./style";

const LiveStar = () => {
	const [stars, setStars] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(stars);
	};

	return (
		<div>
			<div id="status"></div>
			<form id="ratingForm">
				<Rating className="rating">
					<input
						type="radio"
						id="star5"
						name="rating"
						value={stars !== "" ? stars : "5"}
						onClick={(e) => setStars(e.currentTarget.value)}
					/>
					<label for="star5" title="Rocks!">
						5 stars
					</label>
					<input
						type="radio"
						id="star4"
						name="rating"
						value={stars !== "" ? stars : "4"}
						onClick={(e) => setStars(e.currentTarget.value)}
					/>
					<label for="star4" title="Pretty good">
						4 stars
					</label>
					<input
						type="radio"
						id="star3"
						name="rating"
						value={stars !== "" ? stars : "3"}
						onClick={(e) => setStars(e.currentTarget.value)}
					/>
					<label for="star3" title="Meh">
						3 stars
					</label>
					<input
						type="radio"
						id="star2"
						name="rating"
						value={stars !== "" ? stars : "2"}
						onClick={(e) => setStars(e.currentTarget.value)}
					/>
					<label for="star2" title="Kinda bad">
						2 stars
					</label>
					<input
						type="radio"
						id="star1"
						name="rating"
						value={stars !== "" ? stars : "1"}
						onClick={(e) => setStars(e.currentTarget.value)}
					/>
					<label for="star1" title="Sucks big time">
						1 star
					</label>
				</Rating>
				<button className="submit" onClick={handleSubmit}>
					Submit
				</button>
			</form>
		</div>
	);
};

export default LiveStar;
