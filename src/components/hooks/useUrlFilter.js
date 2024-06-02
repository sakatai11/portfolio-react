import { useLocation } from "react-router-dom";

const useUrlFilter = () => {
	const location = useLocation();
	console.log(location);
	const title = location.state?.title; // titleデータを受け取る
	console.log(title);

	if (title !== "PHOTOS") {
		const newfilters = title;
		console.log(newfilters);
		return newfilters;
	} else {
		return "";
	}
};

export default useUrlFilter;
