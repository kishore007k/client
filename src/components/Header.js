import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogOut } from "../api/Auth";

const Header = () => {
	const user = useSelector((state) => state.userData?.loginUser);
	const dispatch = useDispatch();

	return (
		<div>
			<nav>
				<ul>
					<li>
						<button>
							<Link to="/">Home</Link>
						</button>
					</li>
					<li>
						<button>
							<Link to="/signUp">SignUp</Link>
						</button>
					</li>
					{!user ? (
						<li>
							<button>
								<Link to="/login">Login</Link>
							</button>
						</li>
					) : (
						<li>
							<button onClick={() => LogOut({ dispatch })}>Logout</button>
						</li>
					)}
					{user ? (
						<div>
							<Link to="/profile">
								<img
									src={user?.data?.userImage}
									alt={user?.data?.userName}
									style={{ width: "5%", borderRadius: "50%" }}
								/>
							</Link>
						</div>
					) : (
						<></>
					)}
				</ul>
			</nav>
			<div>{user ? <p>{user?.data?.email}</p> : <></>}</div>
		</div>
	);
};

export default Header;
