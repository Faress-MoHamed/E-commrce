import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AddCart } from "../../reduxToolkit/slices/CartSlice";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { Circles } from "react-loader-spinner";
import { useQueryClient } from "@tanstack/react-query";

const Card = ({ data, isLoading }) => {
	const dispatch = useDispatch();
	const queryClient = useQueryClient();

	const img = data?.image?.data?.attributes.url;
	function handleClick() {
		const newItem = {
			name: data?.name,
			description: data?.description,
			slug: data?.slug,
			pieces: data?.pieces,
			price: data?.price,
			type: data?.type,
			price_formatting: data?.price_formatting,
			quantity: 1,
			img,
		};
		dispatch(AddCart(newItem));
		toast.success("Add to Cart successfully");
	}
	return (
		data && (
			<div className="card">
				{data?.feature && (
					<div className="newBadge">
						<span>new</span>
					</div>
				)}
				<div className="image">
					<img src={img} alt={data?.description} />
				</div>
				<div className="card--price">
					<div className="price">
						<span>
							{data?.price} {data?.price_formatting}
						</span>
					</div>
					<div className="rate">
						<FaStar />
						<span>
							{Number.isInteger(data?.rate) ? data?.rate + ".0" : data?.rate}
						</span>
					</div>
				</div>
				<div className="card--title">
					<Link
						onClick={() =>
							queryClient.invalidateQueries({
								queryKey: ["productDetails"],
							})
						}
						to={`../shop/${data?.slug}`}
					>
						{data?.name}
					</Link>
				</div>
				<div className="card--option">
					<div className="option">
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="0.5"
								y="0.5"
								width="19"
								height="19"
								rx="9.5"
								stroke="#D62828"
							/>
							<path
								d="M8.39644 13.3107L5.14644 10.0607C4.95119 9.86541 4.95119 9.54883 5.14644 9.35355L5.85353 8.64644C6.04879 8.45117 6.36539 8.45117 6.56064 8.64644L8.75 10.8358L13.4394 6.14644C13.6346 5.95119 13.9512 5.95119 14.1465 6.14644L14.8536 6.85355C15.0488 7.0488 15.0488 7.36539 14.8536 7.56066L9.10355 13.3107C8.90828 13.5059 8.5917 13.5059 8.39644 13.3107Z"
								fill="#D62828"
							/>
						</svg>
						<span>{data?.pieces} pieces</span>
					</div>
					<div className="option">
						<svg
							width="20"
							height="20"
							viewBox="0 0 20 20"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<rect
								x="0.5"
								y="0.5"
								width="19"
								height="19"
								rx="9.5"
								stroke="#D62828"
							/>
							<path
								d="M8.39644 13.3107L5.14644 10.0607C4.95119 9.86541 4.95119 9.54883 5.14644 9.35355L5.85353 8.64644C6.04879 8.45117 6.36539 8.45117 6.56064 8.64644L8.75 10.8358L13.4394 6.14644C13.6346 5.95119 13.9512 5.95119 14.1465 6.14644L14.8536 6.85355C15.0488 7.0488 15.0488 7.36539 14.8536 7.56066L9.10355 13.3107C8.90828 13.5059 8.5917 13.5059 8.39644 13.3107Z"
								fill="#D62828"
							/>
						</svg>
						<span>{data?.type} Sauce</span>
					</div>
				</div>
				<div className="card--btn">
					<button onClick={handleClick}>Add To Cart</button>
				</div>
			</div>
		)
	);
};

export default Card;
