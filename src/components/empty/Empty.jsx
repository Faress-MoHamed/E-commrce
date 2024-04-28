import { FaCartShopping } from "react-icons/fa6";

function Empty() {
  return (
		<div className="empty">
			<h2>This Cart is Empty</h2>

      <FaCartShopping />
      <p>...</p>
		</div>
	);
}

export default Empty
