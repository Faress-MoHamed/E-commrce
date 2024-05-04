import { useQuery } from "@tanstack/react-query";
import fetchImage from "../../hooks/fetchImage";
import { Circles } from "react-loader-spinner";

const Image = ({ path, alt }) => {
	const { data, isLoading, isError } = useQuery({
		queryKey: "image",
		queryFn: () => fetchImage(path),
	});
	if (isLoading) return (
		<Circles
			height="80"
			width="80"
			color="#d62828"
			ariaLabel="circles-loading"
			wrapperStyle={{}}
			wrapperClass=""
			visible={true}
		/>
	);
	if (isError) return <div>Error fetching image</div>;

	return <img src={data} alt={alt} />;
};
export default Image;
