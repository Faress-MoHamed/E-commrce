import React, { useContext } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import { MobileHandlerContext } from "../../utils/mobileHandler";
import { useSelector } from "react-redux";

const Navbar = () => {
	const { Cart } = useSelector((store) => store.Cart);

	const { isMobile, openMenu, setOpenMenu } = useContext(MobileHandlerContext);
	return (
		<nav className="navbar" style={openMenu ? { position: "fixed" } : {}}>
			<div className="container">
				<div className="logo">
					<img
						src="./assets/images/logo.png"
						alt="logo"
						width={100}
						height={100}
					/>
				</div>
				<ul>
					<NavLink to={"/"}>Home</NavLink>
					<NavLink to={"/about"}>About</NavLink>
					<NavLink to={"/shop"}>shop</NavLink>
					<NavLink to={"/contact"}>contact</NavLink>
				</ul>
				<div className="nav--icons">
					<Link to={"/whishList"}>
						<div className="nav--icon">
							<span>0</span>
							<FaHeart />
						</div>
					</Link>
					<Link to={"/cart"}>
						<div className="nav--icon">
							<span>{Cart.length}</span>
							<AiOutlineShoppingCart />
						</div>
					</Link>
				</div>
				{isMobile && (
					<div
						className={`nav--barIcon ${openMenu ? "menu-open" : ""}`}
						onClick={() => setOpenMenu(!openMenu)}
					>
						<div></div>
						<div></div>
					</div>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
