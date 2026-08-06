import {createBrowserRouter} from "react-router-dom";
import Home from "../pages/Home";
import RootLayout from "../Layouts/RootLayout";
import ProductDetail from "../pages/ProductDetail";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: "products/:id",
        element: <ProductDetail/>
      },
    ],
  },
]);



export default routers;