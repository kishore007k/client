import React from "react";
import { Rating } from "./style";

const Stars = ({ stars }) => {
	return (
		<form>
			<Rating className="rating">
				<input
					type="radio"
					value={stars !== "" ? stars : "5"}
					onChange={() => {}}
					checked={stars >= 5 ? true : false}
					disabled
				/>
				<label htmlFor="star5" title="Rocks!">
					5 stars
				</label>
				<input
					type="radio"
					value={stars !== "" ? stars : "4"}
					onChange={() => {}}
					checked={stars >= 4 ? true : false}
					disabled
				/>
				<label htmlFor="star4" title="Pretty good">
					4 stars
				</label>
				<input
					type="radio"
					value={stars !== "" ? stars : "3"}
					onChange={() => {}}
					checked={stars >= 3 ? true : false}
					disabled
				/>
				<label htmlFor="star3" title="Meh">
					3 stars
				</label>
				<input
					type="radio"
					value={stars !== "" ? stars : "2"}
					onChange={() => {}}
					checked={stars >= 2 ? true : false}
					disabled
				/>
				<label htmlFor="star2" title="Kinda bad">
					2 stars
				</label>
				<input
					type="radio"
					value={stars !== "" ? stars : "1"}
					onChange={() => {}}
					checked={stars >= 1 ? true : false}
					disabled
				/>
				<label htmlFor="star1" title="Sucks big time">
					1 star
				</label>
			</Rating>
		</form>
	);
};

export default Stars;
