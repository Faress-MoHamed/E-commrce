import React, { useEffect } from "react";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import HeadLines from "./../headLines/HeadLines";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../reduxToolkit/slices/GetAllProducts";
import toast from "react-hot-toast";
import { AddCart } from "../../reduxToolkit/slices/CartSlice";
// const fetcha = async (slug) => {
// 	const data = await fetch(
// 		`http://localhost:1337/api/products?populate=*&filters[slug][$eq]=${slug}`
// 	);
// 	return data;
// };
const ProductDetiails = () => {
	const { slug } = useParams();
	const { productDetails } = useSelector((state) => state.products);
	// const data = productDetails?.data[0]?.attributes;
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getProductDetails(slug));
	}, [slug, dispatch]);
	function handleClick() {
		const newItem = {
			name: productDetails?.data[0]?.attributes?.name,
			description: productDetails?.data[0]?.attributes?.description,
			slug: productDetails?.data[0]?.attributes?.slug,
			pieces: productDetails?.data[0]?.attributes?.pieces,
			price: productDetails?.data[0]?.attributes?.price,
			type: productDetails?.data[0]?.attributes?.type,
			price_formatting: productDetails?.data[0]?.attributes?.price_formatting,
			quantity: 1,
			img,
		};
		dispatch(AddCart(newItem));
		toast.success("Add to Cart successfully");
	}
	let product;
	if (productDetails && productDetails.data && productDetails.data.length > 0) {
		product = productDetails?.data[0]?.attributes;
	}
	const img = product?.image?.data?.attributes?.url;
	return (
		<section className="productDetails">
			<BreadCrumbs />
			<HeadLines title={product?.name} />
			<div className="productDetails--container">
				<div className="productDetails--image">
					<img src={img} alt="product" />
				</div>
				<div className="productDetails--content">
					<h4>{product?.name}</h4>
					<p>{product?.description}</p>
					<span>
						{product?.price} {product?.price_formatting}
					</span>
					<div className="card--btn">
						<button onClick={handleClick}>Add to cart</button>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ProductDetiails;
