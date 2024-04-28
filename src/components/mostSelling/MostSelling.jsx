import React, { useContext } from "react";
import HeadLines from "../headLines/HeadLines";
import Card from "../card/Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import { MobileHandlerContext } from "../../utils/mobileHandler";
import { useLoaderData } from "react-router-dom";

const MostSelling = ({ productData }) => {
	const { isMobile } = useContext(MobileHandlerContext);

	return (
		<section className="mostSelling">
			<HeadLines subTitle={"Most Selling"} title={"Most Selling"} />
			<Swiper
				slidesPerView={1.3}
				spaceBetween={40}
				// loop={true}
				modules={[Navigation, Scrollbar]}
				navigation={{ nextEl: ".right--arrow", prevEl: ".left--arrow" }}
				scrollbar={{ el: ".swiper--progress" }}
				breakpoints={{
					600: {
						slidesPerView: 2.3,
					},
					800: {
						slidesPerView: 3.3,
					},
					1440: {
						slidesPerView: 4.3,
					},
				}}
			>
				{productData?.data?.map(
					(el, i) =>
						el?.attributes.most_selling && (
							<SwiperSlide key={i}>
								<Card id={el?.id} data={el?.attributes} />
							</SwiperSlide>
						)
				)}
			</Swiper>
			<div className="swiper--option">
				<div className="swiper--progress"></div>
				{!isMobile && (
					<div className="swiper--arrows">
						<div className="left--arrow arrow">
							<svg
								width="22"
								height="22"
								viewBox="0 0 22 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M12.5757 19.895L11.4917 20.979C11.0327 21.438 10.2905 21.438 9.83643 20.979L0.344238 11.4917C-0.114746 11.0327 -0.114746 10.2905 0.344238 9.83643L9.83643 0.344238C10.2954 -0.114746 11.0376 -0.114746 11.4917 0.344238L12.5757 1.42822C13.0395 1.89209 13.0298 2.64893 12.5562 3.10303L6.67236 8.7085H20.7056C21.355 8.7085 21.8774 9.23096 21.8774 9.88037V11.4429C21.8774 12.0923 21.355 12.6147 20.7056 12.6147H6.67236L12.5562 18.2202C13.0347 18.6743 13.0444 19.4312 12.5757 19.895Z"
									fill="white"
									fillOpacity="1"
								/>
							</svg>
						</div>
						<div className="right--arrow arrow">
							<svg
								width="22"
								height="22"
								viewBox="0 0 22 22"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M9.30176 1.42822L10.3857 0.344236C10.8447 -0.114748 11.5869 -0.114748 12.041 0.344236L21.5332 9.83154C21.9922 10.2905 21.9922 11.0327 21.5332 11.4868L12.041 20.979C11.582 21.438 10.8398 21.438 10.3857 20.979L9.30176 19.895C8.83789 19.4312 8.84766 18.6743 9.32129 18.2202L15.2051 12.6147L1.17188 12.6147C0.522461 12.6147 0 12.0923 0 11.4429V9.88037C0 9.23096 0.522461 8.7085 1.17188 8.7085L15.2051 8.7085L9.32129 3.10303C8.84277 2.64892 8.83301 1.89209 9.30176 1.42822Z"
									fill="white"
								/>
							</svg>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default MostSelling;
