import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
	const { pathname } = window.location;
	console.log(pathname.replace("/", ""));
	return (
		<section className="error">
			<h2>
				the path <span>{pathname.replace("/", "")}</span> doesn't exist return
				<Link to={"/"}> Home</Link>
			</h2>
		</section>
	);
};

export default Error;
