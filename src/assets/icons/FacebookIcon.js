import React from "react";

const FacebookIcon = (props) => {
	return (
		<svg
			width={31}
			height={31}
			viewBox="0 0 31 31"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<path
				d="M26.873.973h-22.5a3.753 3.753 0 00-3.75 3.75v22.5a3.754 3.754 0 003.75 3.75h22.5a3.755 3.755 0 003.75-3.75v-22.5a3.754 3.754 0 00-3.75-3.75z"
				fill="#D9D9D9"
			/>
			<path
				d="M21.248 15.973v-3.75c0-1.035.84-.938 1.875-.938h1.875V6.598h-3.75a5.625 5.625 0 00-5.625 5.625v3.75h-3.75v4.687h3.75v10.313h5.625V20.66h2.812l1.875-4.687h-4.687z"
				fill="#fff"
			/>
		</svg>
	);
};

export default FacebookIcon;
