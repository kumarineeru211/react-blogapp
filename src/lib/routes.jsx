import Login from "../componets/auth/Login";
import Register from "../componets/auth/Register"
import {createBrowserRouter} from "react-router-dom";
import Home from "../componets/layout";
import CurrentPost from "../componets/layout/CurrentPost";

export const ROOT = "/";
export const LOGIN = "/login";
export const REGISTER = "/register";

export const router = createBrowserRouter([
  {path: ROOT, element: <Home />},
  {path: LOGIN, element: <Login />},
  {path: REGISTER, element: <Register />},
  {path: "/posts/:postId", element: <CurrentPost />},
]);
