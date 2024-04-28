import React from "react";
import { useDispatch } from "react-redux";
import {
	decreaseItemQuantity,
	increaseItemQuantity,
} from "../../reduxToolkit/slices/CartSlice";
import LazyLoad from "react-lazyload";

const CartItem = ({ data }) => {
	const dispatch = useDispatch();

	const handleIncrease = () => {
		dispatch(increaseItemQuantity(data?.slug));
	};
	const handleDecrease = () => {
		dispatch(decreaseItemQuantity(data?.slug));
	};

	return (
		<div className="cartbox-item">
			<div className="item">
				<div className="cartbox--image">
					<LazyLoad height={200} offset={100}>
						<img  src={data?.img} alt={data?.description} />
					</LazyLoad>
				</div>
				<div className="cartbox--description">
					<h4 className="cartbox--name">{data?.name}</h4>
					<h5 className="cartbox--price">
						{data?.price} {data?.price_formatting}
					</h5>
					<div className="cartbox--varity">
						<p className="cartbox--pieces">{data?.pieces} Pieces</p>
						<p className="cartbox--type">{data?.type} Sauce</p>
					</div>
				</div>
			</div>
			<div className="cartbox--controls">
				<button onClick={() => handleDecrease()} className="btn-cat">
					-
				</button>
				<p className="numbers">{data?.quantity}</p>
				<button onClick={() => handleIncrease()} className="btn-cart">
					+
				</button>
			</div>
		</div>
	);
};

export default CartItem;
