import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogOut } from "../../api/Auth";

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
import logo from "../../assets/images/logoPrimary.png";
import search from "../../assets/images/search.png";
import cart from "../../assets/images/Cart.png";
import { AdminPanelIcon } from "../../assets/icons";
import { COLORS } from "../../assets/styles";

const Header = () => {
	const user = useSelector((state) => state.userData?.userData?.user);
	const dispatch = useDispatch();

	return (
		<HeaderWrapper>
			<Container>
				<LogoContainer>
					<Link to="/">
						<img src={logo} alt="logo" />
					</Link>
				</LogoContainer>
				<Nav>
					<button>
						<Link to="/">Home</Link>
					</button>
					<button>
						<Link to="/products">Products</Link>
					</button>
					<button>
						<Link to="/">About</Link>
					</button>
					<button>
						<Link to="/">Contact</Link>
					</button>
				</Nav>
				<Actions>
					<Btn>
						<Link to="/">
							<img src={search} alt="search" />
						</Link>
					</Btn>
					<Btn>
						<Link to="/cart">
							<img src={cart} alt="cart" />
						</Link>
					</Btn>
					{!user ? (
						<LoginBtn>
							<Link to="/login">Login</Link>
						</LoginBtn>
					) : (
						<ProfileContainer>
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
							<LogoutBtn onClick={() => LogOut({ dispatch })}>Logout</LogoutBtn>
						</ProfileContainer>
					)}
				</Actions>
			</Container>
		</HeaderWrapper>
	);
};

export default Header;
