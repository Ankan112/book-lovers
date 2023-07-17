import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import NewBook from "../pages/NewBook";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import NotFound from "../pages/NotFound";
import BookDetails from "../pages/BookDetails";
import EditBook from "../pages/EditBook";
import PrivateRoute from "./PrivateRoute";
import Wishlist from "../pages/Wishlist";
import CurrentlyRead from "../pages/CurrentlyRead";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/all-books",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/book-details/:id",
        element: (
          <PrivateRoute>
            <BookDetails></BookDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/edit-book/:id",
        element: (
          <PrivateRoute>
            <EditBook></EditBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/new-book",
        element: (
          <PrivateRoute>
            <NewBook></NewBook>
          </PrivateRoute>
        ),
      },
      {
        path: "/wishlist",
        element: (
          <PrivateRoute>
            <Wishlist></Wishlist>
          </PrivateRoute>
        ),
      },
      {
        path: "/currently-reading",
        element: (
          <PrivateRoute>
            <CurrentlyRead></CurrentlyRead>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound></NotFound>,
  },
]);

export default router;
