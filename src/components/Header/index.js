import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogOut } from "../../api/Auth";
import { useHistory } from "react-router-dom";

// Styles
import {
	HeaderWrapper,
	Nav,
	LogoContainer,
	Actions,
	Container,
	LoginBtn,
	Btn,
	ProfileContainer,
	LogoutBtn,
	NavProfile,
} from "./styles";

// Images
import { AdminPanelIcon } from "../../assets/icons";
import {
	CartIcon,
	LogoIcon,
	LogOutIcon,
	SearchIcon,
} from "../../assets/icons/Header Icons/index";

const Header = ({ color, image }) => {
	const history = useHistory();

	const user = useSelector((state) => state.userData?.userData?.user);
	const dispatch = useDispatch();

	return (
		<HeaderWrapper image={image}>
			<Container>
				<LogoContainer>
					<Link to="/">
						<LogoIcon color={color} />
					</Link>
				</LogoContainer>
				<Nav color={color}>
					<button>
						<Link to="/">Home</Link>
					</button>
					<button>
						<Link to="/product">Products</Link>
					</button>
					<button>
						<Link to="/about">About</Link>
					</button>
					<button>
						<Link to="/contact">Contact</Link>
					</button>
				</Nav>
				<Actions>
					<Btn color={color}>
						<Link to="/">
							<SearchIcon color={color} />
						</Link>
					</Btn>
					<Btn color={color}>
						<Link to="/cart">
							<CartIcon color={color} />
						</Link>
					</Btn>
					{!user ? (
						<LoginBtn>
							<Link to="/login">Login</Link>
						</LoginBtn>
					) : (
						<ProfileContainer color={color}>
							{user.userRole === 1 && (
								<Link to="/dashboard">
									<AdminPanelIcon color={color} />
								</Link>
							)}
							<Link to="/profile">
								<NavProfile image={user?.userImage} />
							</Link>
							<LogoutBtn color={color} onClick={() => LogOut({ dispatch, history })}>
								<LogOutIcon color={color} />
							</LogoutBtn>
						</ProfileContainer>
					)}
				</Actions>
			</Container>
		</HeaderWrapper>
	);
};

export default Header;
