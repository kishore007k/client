export const COLORS = {
	primary: "#8E9AFF",
	secondary: "#FF89C2",
	paymentGradient:
		"linear-gradient(164.37deg, #333B50 -16.32%, #232837 114.33%)",
	white: "#FFFFFF",
	darkBlack: "#303030",
	lightBlack: "#646464",
	mediumBlack: "#515151",
	star: "#FBC02D",
	black: "#000000",
	grayIcon: "#D9D9D9",
	lightGreyText: "#F6F6F6",
	orangeBtn: "#FF8C4B",
	BgShade: "#F6F5FF",
	circle: "#C7FFF8",
	profileNav: "#FF7474",
	status: "#40D146",
	activeStatus: "#FF7474",
	darkGrey: "#C8C8C8",
	input: "#FFDBBA",
	bubble: "#FF5F00",
	bubbleBg: "#FFA5A5",
	cartBg: "#F8F8F8",
	profileDesignLayer1: "#DBDAFF",
	profileDesignLayer2: "#E8E8FF",
	filterBtn: "#FF9A61",
	greyIconDark: "#9C9C9C",
	adminPanelBg: "#EEF0F7",
	adminActiveIconColor: "#DDDCFF",
	gitHubLinks: "#2D98FF",
	gitHubGo: "#00ADD8",
	admin: {
		productsBg: "#EFEEFF",
		categoriesBg: "#FEEDED",
		customerBg: "#EAF0FE",
		averageOrdersBg: "#FEF4EC",
	},
};

export const FONTS = {
	fontSize: {
		H1: "40px",
		H2: "32px",
		title: "20px",
		subTitle: "18px",
		para: "16px",
		mediumText: "14px",
		smallText: "12px",
		verySmall: "8px",
	},
	fontWeight: {
		bold: "700",
		semiBold: "600",
		medium: "500",
		regular: "300",
	},
	fontFamily: {
		primary: `'Source Sans Pro', sans-serif`,
		secondary: `'Source Code Pro', monospace`,
	},
};

const size = {
	mobileM: "375px",
	mobileL: "425px",
	tablet: "768px",
	laptop: "1024px",
	laptopL: "1440px",
	desktop: "2560px",
};

export const DEVICE = {
	xs: `(max-width: ${size.mobileM})`,
	sm: `(max-width: ${size.mobileL})`,
	base: `(max-width: ${size.tablet})`,
	md: `(max-width: ${size.laptop})`,
	lg: `(max-width: ${size.laptopL})`,
	xl: `(max-width: ${size.desktop})`,
};
