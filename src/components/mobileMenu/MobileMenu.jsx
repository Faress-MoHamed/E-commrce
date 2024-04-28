import React, { useContext } from "react";
import { MobileHandlerContext } from "../../utils/mobileHandler";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const MobileMenu = () => {
	const { openMenu, setOpenMenu } = useContext(MobileHandlerContext);
	const handleClick = () => {
		setOpenMenu(false);
	};
	return (
		<div className={`mobileMenu ${openMenu ? "active" : ""}`}>
			<motion.ul
				initial={{ opacity: 0, y: -100 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ delay: 0.5, duration: 0.4, ease: "easeInOut" }}
			>
				<NavLink onClick={handleClick} to={"/"}>Home</NavLink>
				<NavLink onClick={handleClick} to={"/about"}>About</NavLink>
				<NavLink onClick={handleClick} to={"/shop"}>shop</NavLink>
				<NavLink onClick={handleClick} to={"/contact"}>contact</NavLink>
			</motion.ul>
		</div>
	);
};

export default MobileMenu;
