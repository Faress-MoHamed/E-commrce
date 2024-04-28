import React, { useEffect } from "react";
import BreadCrumbs from "../breadCrumbs/BreadCrumbs";
import HeadLines from "./../headLines/HeadLines";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../reduxToolkit/slices/GetAllProducts";
import toast from "react-hot-toast";
import { AddCart } from "../../reduxToolkit/slices/CartSlice";

const ProductDetiails = () => {
	const { slug } = useParams();
	const dispatch = useDispatch();
	const { productDetails } = useSelector((state) => state.products);
	const data = productDetails?.data[0]?.attributes;
	// console.log(productDetails);
	function handleClick() {
		const newItem = {
			name: data?.name,
			description: data?.description,
			slug: data?.slug,
			pieces: data?.pieces,
			price: data?.price,
			type: data?.type,
			price_formatting: data?.price_formatting,
			quantity: 1,
			img,
		};
		console.log(newItem);
		dispatch(AddCart(newItem));
		toast.success("Add to Cart successfully");
	}
	const dispatct = useDispatch();

	useEffect(() => {
		dispatct(getProductDetails(slug));
	}, [slug]);
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
					<img src={img} alt="" />
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
