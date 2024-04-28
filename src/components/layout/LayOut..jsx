import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import MobileMenu from "../mobileMenu/MobileMenu";
import Footer from './../footer/Footer';

const LayOut = () => {
	return (
		<>
			<MobileMenu />
			
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
};

export default LayOut;
