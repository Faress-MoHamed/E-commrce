
function AddToCart(Cart) {
	let items = JSON.parse(window.sessionStorage.getItem("Items")) || [];

	for (let i = 0; i < Cart.length; i++) {
		items.push(Cart[i]);
	}
	const uniqueItems = [...new Set(items)];
	window.sessionStorage.setItem("Items", JSON.stringify(uniqueItems));
}

export default AddToCart;
