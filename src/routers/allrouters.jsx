import { createBrowserRouter, Link } from "react-router-dom";

import MainLayout from "../layout/mainLayout.jsx";
import Home from "../pages/home/Home.jsx";
import SignIn from "../pages/from/SignIn.jsx";
import SignUp from "../pages/from/SignUp.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: (
      <div className="h-screen text-center mt-20">
        <h2>Page Not Found </h2> <Link to="/">back Home</Link>
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products",
        element: <Home />,
      },
      {
        path: "/signIn",
        element: <SignIn />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
