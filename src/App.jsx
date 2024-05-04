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
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProductDetiails from "./pages/ProductDetails/ProductDetiails";

const App = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				staleTime: 0,
			},
		},
	});

	const Routing = createBrowserRouter([
		{
			path: "/",
			element: <LayOut />,
			children: [
				{ index: true, element: <Home /> },
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

	return (
		<QueryClientProvider client={queryClient}>
			<ReactQueryDevtools initialIsOpen={false} />
			<MobileHandlerProvider>
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
		</QueryClientProvider>
	);
};
export default App;
