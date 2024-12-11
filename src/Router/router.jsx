import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../MainLayout";
import HomePage from "../Pages/Home/HomePage";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>Route Note Fount</h2>,
      children:[
        {
            path: "/",
            element: <HomePage></HomePage>,
        },
        {
          path: "/register",
          element: <Register></Register>,
        }
      ]
    },
  ]);
  

export default router;