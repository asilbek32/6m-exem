import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../componenets/main-layout";
import Home from "../pages/home";
import Order from "../pages/order/order";
import Like from "../pages/like/like";
import ShoppCard from "../pages/shop-card/shopCard";
import BuyProduct from "../pages/buy-product";
import ProductInfo from "../pages/product-info";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/orders",
        element: <Order />,
      },
      {
        path: "/like",
        element: <Like />,
      },
      {
        path: "/cart",
        element: <ShoppCard />,
      },
      {
        path: "/buy",
        element: <BuyProduct />,
      },
      {
        path: "/product/:id",
        element: <ProductInfo />,
      },
    ],
  },
]);
