import React from "react";
import Banner from "../../components/banner/Banner";
import MostSelling from "../../components/mostSelling/MostSelling";
import Video from "./../../components/video/Video";
import { useLoaderData } from "react-router-dom";

const Home = () => {
	const data = useLoaderData();
	return (
		<>

			<main>
				<Banner />
				<MostSelling productData={data} />
				<Video />
			</main>
		</>
	);
};

export default Home;
