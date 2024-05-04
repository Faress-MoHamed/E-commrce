import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	Cart: [],
	error: [],
};
const CartSlice = createSlice({
	name: "Cart",
	initialState,
	reducers: {
		AddCart(prevState, action) {
			const newItem = action.payload;
			newItem.totalPrice = +newItem.price * +newItem.quantity;
			const exact = prevState.Cart.filter((el) => el.slug === newItem.slug);
			if (exact.length === 0) prevState.Cart.push(newItem);
			else prevState.error.push(new Error());
		},
		increaseItemQuantity(prevState, action) {
			const item = prevState.Cart.find((el) => el.slug === action.payload);
			if (item.pieces === item.quantity) return;
			item.quantity++;
			item.totalPrice = +item.price * +item.quantity;
		},
		decreaseItemQuantity(prevState, action) {
			const item = prevState.Cart.find((el) => el.slug === action.payload);

			item.quantity--;
			if (item.quantity === 0) {
				prevState.Cart = prevState.Cart.filter(
					(el) => el.slug !== action.payload
				);
			} else {
				item.totalPrice = +item.price * +item.quantity;
			}
		},
		deleteItem(prevState, action) {
			prevState.Cart = prevState.Cart.filter(
				(el) => el.slug !== action.payload
			);
		},
		clearCart(prevState) {
			prevState.Cart = [];
		},
	},
});
export default CartSlice.reducer;
export const {
	AddCart,
	increaseItemQuantity,
	decreaseItemQuantity,
	clearCart,
	deleteItem,
} = CartSlice.actions;

export const getTotalCartQuantity = (state) => {
	return state.Cart.Cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const getTotalCartPrice = (state) =>
	state.Cart.Cart.reduce((sum, item) => sum + item.totalPrice, 0);
