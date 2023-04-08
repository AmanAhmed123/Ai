import { createBrowserRouter } from "react-router-dom";
import Login from "../component/loginPage/Login"
import Signup from "../component/signupPage/Signup"
import { Link } from "react-router-dom";
export const router = createBrowserRouter([
  {
    path: "/login",
    element: (
      <Login />
    ),
  },
  {
    path: "/",
    element: (
      <h2><Link to="/login">login</Link> </h2>
    ),
  },
  {
    path: "/signup",
    element: (
      <Signup />
    ),
  }
]);
