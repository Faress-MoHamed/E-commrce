import { useDispatch } from "react-redux";
import { clearCart } from "../../reduxToolkit/slices/CartSlice";
import toast, { Toaster } from "react-hot-toast";
function TotalPrice({ totalPrice }) {
	const dispatch = useDispatch();

	const handleClick = () => {
		dispatch(clearCart());
		toast.success("checked Out success");
	};

	return (
		<div className="checkout-box">
			<div className="checout--total">
				<p className="total">Total</p>
				<p className="total">{totalPrice} EGP</p>
			</div>
			<div className="checout--shipping">
				<p className="shipping">shipping</p>
				<p className="shipping">free</p>
			</div>
			<div className="line"></div>
			<div className="card--btn">
				<button onClick={handleClick}>CheckOut</button>

			</div>
		</div>
	);
}

export default TotalPrice;
