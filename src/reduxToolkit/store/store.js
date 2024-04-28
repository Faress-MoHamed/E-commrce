import { configureStore } from "@reduxjs/toolkit";
import { getAllProductReducer } from "../slices/GetAllProducts";
import CartSlice from "../slices/CartSlice";

const store = configureStore({
	reducer: {
		products: getAllProductReducer,
		Cart: CartSlice,
	},
});
export { store };
