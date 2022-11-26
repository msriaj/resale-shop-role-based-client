import AllCategories from "../Components/AllCategories/AllCategories";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import AddCategory from "../Pages/AddCategory/AddCategory";
import AddProduct from "../Pages/AddProduct/AddProduct";
import AllProduct from "../Pages/AllProduct/AllProduct";
import AllUser from "../Pages/AllUser/AllUser";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import MyBuyers from "../Pages/MyBuyers/MyBuyers";
import MyProducts from "../Pages/MyProduct/MyProducts";
import Overview from "../Pages/Overview/Overview";
import PostList from "../Pages/PostList/PostList";
import Profile from "../Pages/Profile.js/Profile";
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
        path: "/categories",
        element: <AllCategories />,
      },
      {
        path: "/category/:id",
        element: <PostList />,
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
        element: (
          <PrivateRoute permission={["admin"]}>
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
        path: "/dashboard/my-orders/",
        element: (
          <PrivateRoute permission={["admin", "buyers"]}>
            <p>my-orders/</p>
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
