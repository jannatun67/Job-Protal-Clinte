import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivetRoute = ({children}) => {
    const{user,loading}=useContext(AuthContext);
    const location = useLocation()
    // console.log(location);

    if (loading) {
        return <span className="loading loading-spinner loading-md"></span>
    }

    if (user) {
        return children
    }
    return <Navigate to="/signIn" state={location?.pathname}></Navigate>
   
};

export default PrivetRoute;