import React, { useEffect, useState } from "react";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import HeadLines from "./../../components/headLines/HeadLines";
import FilterCategoryItem from "../../components/filterCategory/FilterCategoryItem";
// import { Swiper, SwiperSlide } from "swiper/react";
import Card from "./../../components/card/Card";
import { useDispatch, useSelector } from "react-redux";
import {
	filterCategory,
	getAllCatgorise,
} from "../../reduxToolkit/slices/GetAllProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { Helmet } from "react-helmet";

const Shop = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeTitle, setActiveTitle] = useState("burgers");
	const { categories, filterCategories } = useSelector(
		(state) => state.products
	);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getAllCatgorise());
	}, [dispatch]);

	useEffect(() => {
		dispatch(filterCategory(activeTitle));
	}, [activeTitle, dispatch]);
	return (
		<main className="shop">
			<Helmet>
				<title>Home page</title>
			</Helmet>
			<BreadCrumbs />
			<HeadLines subTitle={"Shop by category"} title={"Shop by category"} />
			<div className="filter--category">
				<Swiper
					onClick={(e) => {
						setActiveIndex(e.clickedIndex);
						setActiveTitle(categories?.data[e.clickedIndex]?.attributes?.title);
					}}
					slidesPerView={2.3}
					spaceBetween={4}
					breakpoints={{
						1024: {
							slidesPerView: 4,
						},
					}}
				>
					{categories?.data?.map((el, id) => (
						<SwiperSlide key={el.id}>
							<FilterCategoryItem
								activeIndex={activeIndex}
								id={id}
								data={el?.attributes}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="shop--items">
				{filterCategories?.data?.map((data) =>
					data?.attributes?.products?.data?.map((el, id) => (
						<Card key={id} data={el?.attributes} />
					))
				)}
			</div>
		</main>
	);
};

export default Shop;
