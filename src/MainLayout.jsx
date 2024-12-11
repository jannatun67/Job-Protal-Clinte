import { Outlet } from "react-router-dom";
import Navbar from "./Pages/Home/Shared/Navbar";
import Footer from "./Pages/Home/Shared/Footer";


const MainLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;