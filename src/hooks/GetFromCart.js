function GetFromCart() {
	return JSON.parse(window.sessionStorage.getItem("Items"));
}

export default GetFromCart;
