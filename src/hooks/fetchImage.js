import { useQuery } from "@tanstack/react-query";

const fetchImage = async (filePath) => {
	try {
		const response = await fetch(filePath);
		if (!response.ok) {
			throw new Error("Failed to fetch image");
		}
		const blob = await response.blob();
		return URL.createObjectURL(blob);
	} catch (error) {
		console.error("Error fetching image:", error);
		throw error; // re-throw the error to be caught by useQuery
	}
};
export default fetchImage;
