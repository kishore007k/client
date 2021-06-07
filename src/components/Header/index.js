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
} from "./styles";

// Images
import { AdminPanelIcon } from "../../assets/icons";
import { COLORS } from "../../assets/styles";
import {
	CartIcon,
	LogoIcon,
	SearchIcon,
} from "../../assets/icons/Header Icons/index";

const Header = ({ color }) => {
	const history = useHistory();

	const user = useSelector((state) => state.userData?.userData?.user);
	const dispatch = useDispatch();

	return (
		<HeaderWrapper>
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
						<Link to="/">About</Link>
					</button>
					<button>
						<Link to="/">Contact</Link>
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
									<AdminPanelIcon color={COLORS.primary} />
								</Link>
							)}
							<Link to="/profile">
								<img
									src={user?.userImage}
									alt={user?.userName}
									style={{ width: "100%", borderRadius: "50%" }}
								/>
							</Link>
							<LogoutBtn color={color} onClick={() => LogOut({ dispatch, history })}>
								Logout
							</LogoutBtn>
						</ProfileContainer>
					)}
				</Actions>
			</Container>
		</HeaderWrapper>
	);
};

export default Header;
