import React from "react";

const GoogleIcon = (props) => {
	return (
		<svg
			width={51}
			height={51}
			viewBox="0 0 51 51"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			{...props}
		>
			<g filter="url(#prefix__filter0_d)">
				<path
					d="M40.407 21.604h-1.209v-.063h-13.5v6h8.477c-1.236 3.493-4.56 6-8.477 6a9 9 0 010-18c2.294 0 4.382.866 5.971 2.28l4.243-4.243c-2.68-2.497-6.263-4.037-10.214-4.037-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-1.006-.103-1.987-.291-2.938z"
					fill="#FBC02D"
				/>
				<path
					d="M12.428 17.56l4.928 3.614a8.996 8.996 0 018.342-5.633c2.294 0 4.382.866 5.971 2.28l4.243-4.243c-2.68-2.497-6.263-4.037-10.214-4.037-5.761 0-10.758 3.253-13.27 8.018z"
					fill="#E53935"
				/>
				<path
					d="M25.698 39.541c3.875 0 7.395-1.482 10.057-3.894l-4.643-3.928a8.932 8.932 0 01-5.414 1.822c-3.901 0-7.214-2.487-8.462-5.96l-4.892 3.77c2.483 4.857 7.525 8.19 13.354 8.19z"
					fill="#4CAF50"
				/>
				<path
					d="M40.407 21.604l-.012-.063H25.698v6h8.477a9.03 9.03 0 01-3.065 4.178l.003-.001 4.642 3.929c-.329.298 4.943-3.606 4.943-11.106 0-1.006-.103-1.987-.291-2.938z"
					fill="#1565C0"
				/>
			</g>
			<defs>
				<filter
					id="prefix__filter0_d"
					x={0.698}
					y={0.541}
					width={50}
					height={50}
					filterUnits="userSpaceOnUse"
					colorInterpolationFilters="sRGB"
				>
					<feFlood floodOpacity={0} result="BackgroundImageFix" />
					<feColorMatrix
						in="SourceAlpha"
						values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
					/>
					<feOffset dy={1} />
					<feGaussianBlur stdDeviation={5} />
					<feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
					<feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
					<feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
				</filter>
			</defs>
		</svg>
	);
};

export default GoogleIcon;
