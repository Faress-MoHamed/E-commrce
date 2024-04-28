import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import WishList from "./pages/whishList/WishList";
import Cart from "./pages/cart/Cart";
import LayOut from "./components/layout/LayOut.";
import "swiper/css";

import { MobileHandlerProvider } from "./utils/mobileHandler";
import Error from "./components/Error/Error";
import ProductDetiails from "./components/ProductDetails/ProductDetiails";
import { useDispatch } from "react-redux";
import { getAllProduct } from "./reduxToolkit/slices/GetAllProducts";
import { Toaster } from "react-hot-toast";

const App = () => {
	const dispatch = useDispatch();
	const getAll = async () => {
		const products = await dispatch(getAllProduct());
		return products.payload;
	};

	const Routing = createBrowserRouter([
		{
			path: "/",
			element: <LayOut />,
			children: [
				{ index: true, loader: getAll, element: <Home /> },
				{ path: "/about", element: <About /> },
				{ path: "/shop", element: <Shop /> },
				{ path: "/contact", element: <Contact /> },
				{ path: "/whishList", element: <WishList /> },
				{ path: "/cart", element: <Cart /> },
				{ path: "/shop/:slug", element: <ProductDetiails /> },
				{ path: "*", element: <Error /> },
			],
		},
	]);

	// useEffect(() => {
	// 	setIsLoading(true);
	// 	setTimeout(() => {
	// 		setIsLoading(false);
	// 	}, 4000);
	// }, []);
	return (
		<>
			<MobileHandlerProvider>
				{/* {isLoading && <Loader />} */}
				<RouterProvider router={Routing} />
				<Toaster
					position="top-right"
					toastOptions={{
						style: {
							fontSize: "1.25rem",
							width: 750,
							heigh: 500,
						},
					}}
				/>
			</MobileHandlerProvider>
		</>
	);
};

export default App;
