import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../MainLayout";
import HomePage from "../Pages/Home/HomePage";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivetRoute from "./PrivetRoute";

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
          path:"/jobs/:id",
          element:<PrivetRoute><JobDetails></JobDetails></PrivetRoute>,
          loader:({params})=>fetch(`http://localhost:5000/jobs/${params.id}`)
        },
        {
          path: "/register",
          element: <Register></Register>,
        },
        {
          path: "/signIn",
          element:<SignIn></SignIn>,
        }
      ]
    },
  ]);
  

export default router;