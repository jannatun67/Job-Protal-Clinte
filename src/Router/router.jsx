import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../MainLayout";
import HomePage from "../Pages/Home/HomePage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<h2>Route Note Fount</h2>,
      children:[
        {
            path: "/",
            element: <HomePage></HomePage>,
        }
      ]
    },
  ]);
  

export default router;