import {createBrowserRouter,} from "react-router-dom";
import MainLayout from "../MainLayout";
import HomePage from "../Pages/Home/HomePage";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/SignIn/SignIn";
import JobDetails from "../Pages/JobDetails/JobDetails";
import PrivetRoute from "./PrivetRoute";
import JobApply from "../Pages/JobApply/JobApply";
import MyApplications from "../Pages/MyAppplications/MyApplications";

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
          path:"/jobApply/:id",
          element:<PrivetRoute><JobApply></JobApply></PrivetRoute>,
        },
        {
          path:"/myApplication",
          element:<PrivetRoute><MyApplications></MyApplications></PrivetRoute>,
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