import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AllProduct from "../Pages/AllProduct/AllProduct";
import AllUser from "../Pages/AllUser/AllUser";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyBuyers from "../Pages/MyBuyers/MyBuyers";
import Overview from "../Pages/Overview/Overview";
import Profile from "../Pages/Profile.js/Profile";
import Register from "../Pages/Register/Register";
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
        path: "/product-details/:id",
        element: <p>product detilas</p>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoute>
            <Profile />
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
        element: <Overview />,
      },
      {
        path: "/dashboard/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/all-product",
        element: <AllProduct />,
      },
      {
        path: "/dashboard/my-buyers/",
        element: <MyBuyers />,
      },
      {
        path: "/dashboard/all-user/",
        element: <AllUser />,
      },
      {
        path: "/dashboard/my-orders/",
        element: <p>my-orders/</p>,
      },
      {
        path: "/dashboard/my-wishlist/",
        element: <p>my-wishlist</p>,
      },
    ],
  },
]);
