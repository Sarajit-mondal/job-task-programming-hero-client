import {
    createBrowserRouter,
    Link,
  } from "react-router-dom";

import MainLayout from "../layout/mainLayout.jsx";
import Home from "../pages/home/Home.jsx";
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <div className="h-screen text-center mt-20"><h2>Page Not Found </h2> <Link to='/'>back Home</Link></div>,
      children:[
        {
          path: "/",
          element: <Home /> 
        },
        
      ]
    },
  ]);

  export default router;