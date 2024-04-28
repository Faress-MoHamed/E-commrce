import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
	const date = new Date();
	return (
		<footer>
			<span>
				&copy;{`${date.getFullYear()}`}
				<Link
					target="_blank"
					to={"https://www.linkedin.com/in/fares-mohamed-29a4a9285/"}
				>
					Fares Mohamed .
				</Link>
				All Reversed.
			</span>
		</footer>
	);
};

export default Footer;
