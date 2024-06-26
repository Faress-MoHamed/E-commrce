import { useQueryClient } from "@tanstack/react-query";

const FilterCategoryItem = ({
	data,
	activeIndex,
	index,
}) => {
	const { title } = data;
	const QueryClient = useQueryClient();
	const img = data?.image?.data[0]?.attributes?.url;
	return (
		<div
			onClick={() =>
				QueryClient.invalidateQueries({
					queryKey: ["filterCategories"],
				})
			}
			className={`filterCategory--container ${
				activeIndex === index ? "active" : ""
			}`}
		>
			<div className="filterItem--image">
				<div className="filterItem--badge">
					<svg
						width="21"
						height="16"
						viewBox="0 0 21 16"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M7.13253 15.3524L0.307525 8.52739C-0.102508 8.11736 -0.102508 7.45254 0.307525 7.04246L1.79242 5.55753C2.20245 5.14745 2.86731 5.14745 3.27735 5.55753L7.875 10.1551L17.7227 0.307525C18.1327 -0.102508 18.7976 -0.102508 19.2076 0.307525L20.6925 1.79246C21.1025 2.20249 21.1025 2.86731 20.6925 3.27739L8.61746 15.3524C8.20739 15.7625 7.54257 15.7625 7.13253 15.3524Z"
							fill="white"
						/>
					</svg>
				</div>
				<img src={img} alt="filter--item" />
			</div>
			<p className="filterItem--title">{title}</p>
		</div>
	);
};

export default FilterCategoryItem;
