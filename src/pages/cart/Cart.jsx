import React, { useState } from "react";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import CartItem from "../../components/CartItem/CartItem";
import { useSelector } from "react-redux";
import { getTotalCartPrice } from "../../reduxToolkit/slices/CartSlice";
import TotalPrice from "../../components/Total Price/TotalPrice";
import Empty from "../../components/empty/Empty";

const Cart = () => {
	const [Price, SetPrice] = useState(0);
	const totalPrice = useSelector(getTotalCartPrice);
	const { Cart } = useSelector((store) => store.Cart);
	return (
		<main>
			<BreadCrumbs />
			{Cart.length > 0 ? (
				<main className="Cart">
					<div className="cart">
						<p className="head">{Cart.length} items in Cart</p>
						{Cart?.map((el, i) => (
							<CartItem SetPrice={SetPrice} key={i} data={el} />
						))}
					</div>
					<TotalPrice totalPrice={totalPrice} />
				</main>
			) : (
				<Empty />
			)}
		</main>
	);
};

export default Cart;
