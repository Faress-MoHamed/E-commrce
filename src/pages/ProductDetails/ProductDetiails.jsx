import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../reduxToolkit/slices/GetAllProducts";
import toast from "react-hot-toast";
import { AddCart } from "../../reduxToolkit/slices/CartSlice";
import BreadCrumbs from "./../../components/breadCrumbs/BreadCrumbs";
import HeadLines from "../../components/headLines/HeadLines";
import { useQuery } from "@tanstack/react-query";

const ProductDetiails = () => {
	const { slug } = useParams();
	const dispatch = useDispatch();

	let { isLoading, data: productDetails } = useQuery({
		queryKey: ["productDetails"],
		queryFn: () => dispatch(getProductDetails(slug)),
	});
	productDetails = productDetails?.payload;

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
		!isLoading && (
			<section className="productDetails">
				<BreadCrumbs />
				<HeadLines title={product?.name} />
				<div className="productDetails--container">
					<div className="productDetails--image">
						{isLoading ? <p>loading...</p> : <img src={img} alt="product" />}
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
		)
	);
};

export default ProductDetiails;
