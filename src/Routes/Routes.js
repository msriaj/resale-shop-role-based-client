import AllCategories from "../Components/AllCategories/AllCategories";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddCategory from "../Pages/AddCategory/AddCategory";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AdsDetails from "../Pages/AdsDetails/AdsDetails";
import AllBuyers from "../Pages/AllBuyers/AllBuyers";
import AllProduct from "../Pages/AllProduct/AllProduct";
import AllSeller from "../Pages/AllSeller/AllSeller";
import AllUser from "../Pages/AllUser/AllUser";
import Blog from "../Pages/Blog/Blog";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import LocationWise from "../Pages/LocationWise/LocationWise";
import Login from "../Pages/Login/Login";
import MyBuyers from "../Pages/MyBuyers/MyBuyers";
import MyOrders from "../Pages/MyOrders/MyOrders";
import MyProducts from "../Pages/MyProduct/MyProducts";
import Overview from "../Pages/Overview/Overview";
import Payment from "../Pages/Payment/Payment";
import PostList from "../Pages/PostList/PostList";

import Register from "../Pages/Register/Register";
import WishList from "../Pages/WishList/WishList";
import PrivateRoute from "./PrivateRoute";
const { createBrowserRouter } = require("react-router-dom");

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/reg",
        element: <Register />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/categories",
        element: <AllCategories />,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <PostList />
          </PrivateRoute>
        ),
      },
      {
        path: "/location/:id",
        element: (
          <PrivateRoute>
            <LocationWise />
          </PrivateRoute>
        ),
      },
      {
        path: "/advertisement/:id",
        element: (
          <PrivateRoute>
            <AdsDetails />
          </PrivateRoute>
        ),
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/overview",
        element: (
          <PrivateRoute permission={["admin", "seller", "buyers"]}>
            <Overview />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-product",
        element: (
          <PrivateRoute permission={["admin", "seller"]}>
            <AddProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-product",
        element: (
          <PrivateRoute permission={["admin"]}>
            <AllProduct />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-buyers/",
        element: (
          <PrivateRoute permission={["admin", "seller"]}>
            <MyBuyers />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-category/",
        element: (
          <PrivateRoute permission={["admin"]}>
            <AddCategory />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-user/",
        element: (
          <PrivateRoute permission={["admin"]}>
            <AllUser />
          </PrivateRoute>
        ),
      },

      {
        path: "/dashboard/all-seller/",
        element: (
          <PrivateRoute permission={["admin"]}>
            <AllSeller />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-buyer/",
        element: (
          <PrivateRoute permission={["admin"]}>
            <AllBuyers />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <PrivateRoute>
            <Payment />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`${process.env.REACT_APP_API_URI}/api/book/${params.id}`),
      },
      {
        path: "/dashboard/my-orders/",
        element: (
          <PrivateRoute permission={["admin", "buyers"]}>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-wishlist/",
        element: (
          <PrivateRoute permission={["admin", "buyers"]}>
            <WishList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-products/",
        element: (
          <PrivateRoute permission={["admin", "seller"]}>
            <MyProducts />
          </PrivateRoute>
        ),
      },
    ],
  },
]);
