import React, { useState } from "react";
import BreadCrumbs from "../../components/breadCrumbs/BreadCrumbs";
import HeadLines from "./../../components/headLines/HeadLines";
import FilterCategoryItem from "../../components/filterCategory/FilterCategoryItem";
import { useDispatch } from "react-redux";
import {
	filterCategory,
	getAllCatgorise,
} from "../../reduxToolkit/slices/GetAllProducts";
import { Swiper, SwiperSlide } from "swiper/react";
import { useQuery } from "@tanstack/react-query";
import Card from "../../components/card/Card";
import ShadowCard from "../../components/ShadowCard/ShadowCard";

const Shop = () => {
	const [activeIndex, setActiveIndex] = useState(0);
	const [activeTitle, setActiveTitle] = useState("Appitizies");

	const dispatch = useDispatch();

	let { data: filterCategories, isLoading } = useQuery({
		queryKey: ["filterCategories"],
		queryFn: async () => {
			try {
				return await dispatch(filterCategory(activeTitle));
			} catch (error) {
				console.error("Error fetching categories:", error);
				throw error;
			}
		},
	});
	let { data: categories } = useQuery({
		queryKey: ["categories"],
		queryFn: async () => {
			try {
				return await dispatch(getAllCatgorise());
			} catch (error) {
				console.error("Error fetching categories:", error);
				throw error;
			}
		},
	});
	filterCategories = filterCategories?.payload?.data[0];
	categories = categories?.payload;
	return (
		<main className="shop">
			<BreadCrumbs />
			<HeadLines subTitle={"Shop by category"} title={"Shop by category"} />
			<div className="filter--category">
				<Swiper
					onClick={async (e) => {
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
								index={id}
								activeIndex={activeIndex}
								data={el?.attributes}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
			<div className="shop--items">
				{isLoading ? (
					<>
					<ShadowCard />
					<ShadowCard />
					<ShadowCard />
					</>
				) : (
					filterCategories?.attributes?.products?.data?.map((data) => {
						return <Card key={data?.id} data={data?.attributes} />;
					})
				)}
			</div>
		</main>
	);
};

export default Shop;
