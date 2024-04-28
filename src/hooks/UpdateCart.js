function UpdateCart(slug) {
	let items =
		JSON.parse(window.localStorage.getItem("Items")).filter(
			(el) => el?.slug !== slug
		) || [];
	const uniqueItems = [...new Set(items)];
	window.localStorage.setItem("Items", JSON.stringify(uniqueItems));
}

export default UpdateCart;
