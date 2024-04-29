import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosConfig } from "../../axios/axiosConfig";

const initialState = {
	productData: [],
	productDetails: {},
	categories: [],
	filterCategories: {},
	isLoading: false,
	errors: null,
};

const getAllProduct = createAsyncThunk("get-all-products", async () => {
	try {
		const { data } = await axiosConfig(`products?populate=*`);
		return data;
	} catch (err) {
		throw err;
	}
});
const getProductDetails = createAsyncThunk("product-details", async (slug) => {
	try {
		const { data } = await axiosConfig(
			`products?populate=*&filters[slug][$eq]=${slug}`
		);
		return data;
	} catch (err) {
		throw err;
	}
});
const getAllCatgorise = createAsyncThunk("get-all-categorise", async () => {
	try {
		const { data } = await axiosConfig({
			url: `categories?populate=*`,
		});
		return data;
	} catch (err) {
		throw err;
	}
});
const filterCategory = createAsyncThunk("filter-categorise", async (title) => {
	try {
		const { data } = await axiosConfig({
			url: `categories?filters[title]=${title}&populate[products][populate][0]=image`,
		});
		return data;
	} catch (err) {
		throw err;
	}
});

const getAllProductSlice = createSlice({
	name: "getAllProducts",
	initialState,
	extraReducers: (builder) => {
		builder.addCase(getAllProduct.pending, (state, action) => {
			state.isLoading = true;
		});
		builder.addCase(getAllProduct.fulfilled, (state, action) => {
			state.isLoading = false;
			state.productData = action.payload;
		});
		builder.addCase(getAllProduct.rejected, (state, action) => {
			state.isLoading = false;
			state.errors = action.payload;
		});
		builder.addCase(getProductDetails.fulfilled, (state, action) => {
			state.isLoading = false;
			state.productDetails = action.payload;
		});
		builder.addCase(getAllCatgorise.fulfilled, (state, action) => {
			state.categories = action.payload;
		});
		builder.addCase(filterCategory.fulfilled, (state, action) => {
			state.filterCategories = action.payload;
		});
	},
});

const getAllProductReducer = getAllProductSlice.reducer;
export {
	getAllProduct,
	getAllProductReducer,
	getProductDetails,
	getAllCatgorise,
	filterCategory,
};
