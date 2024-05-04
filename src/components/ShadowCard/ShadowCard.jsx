import React from "react";
import { Circles } from "react-loader-spinner";

function ShadowCard() {
	return (
		<div className="shadow--card">
			<div className="shadow--image image">
				<Circles color="rgba(255, 255, 255, 0.5)" />
			</div>
			<div className="card--price">
				<div className="price">
					<span></span>
				</div>
				<div className="rate">
					<span></span>
				</div>
			</div>
			<div className="shadow--card--title">
				<div></div>
			</div>
			<div className="shadow--card--title">
				<div></div>
			</div>

			<div className="card--btn">
				<button></button>
			</div>
		</div>
	);
}

export default ShadowCard;
