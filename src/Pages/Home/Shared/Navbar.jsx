import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import logo from "../../../assets/Lottie/logo.png"

const Navbar = () => {
  const{user,  signOutUser }=useContext(AuthContext)

  const handelSignOut = () =>{
    signOutUser()
    then(() => {
      console.log("Sign-out successful.");
    })
    .catch((error) => {
      console.log("An error happened.");
    });
  }
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
             
              <li>
              <NavLink to="/myApplication">MyApplication</NavLink>
              </li>
              <li>
            <NavLink to=""></NavLink>
            </li>
            <li>
            <NavLink to=""></NavLink>
            </li>
            </ul>
          </div>
          <a className=" md:text-2xl flex items-center font-bold ">
            <img className="w-12" src={logo} alt="" />
            Job Portal
            </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
            <NavLink to="/">Home</NavLink>
            </li>
            
            <li>
            <NavLink to="/myApplication">MyApplication</NavLink>
            </li>
            <li>
            <NavLink to=""></NavLink>
            </li>
            <li>
            <NavLink to=""></NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user? <>
          <button onClick={handelSignOut } className="btn bg-blue-500 hover:bg-blue-600 text-white">Log-Out</button>
            </>
            :
             <>
            <Link to="/register" className="btn bg-blue-500 hover:bg-blue-600 mr-2 md:mr-4 text-white">Register</Link>
            <Link to="/signIn" className="btn bg-blue-500 hover:bg-blue-600 text-white">Sign In</Link>
            </>
          }
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;
