import Lottie from "lottie-react";
import registerLottieData from "../../assets/Lottie/register.json";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";
import ShocalLogin from "../Home/Shared/ShocalLogin";


const Register = () => {
  const { createUser,setUser}= useContext(AuthContext)
  const handelRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password,name);

    createUser(email,password,name)

    .then(result =>{
      console.log(result.user);
      setUser(result.user)

    })
    .catch((error) => {
      Swal.fire("Please try again!");
    });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left md:w-80 md:ml-56">
            <Lottie animationData={registerLottieData}></Lottie>
          </div>
          <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl w-full md:w-[500px]">
            <h1 className="md:text-4xl text-3xl font-bold text-center mt-4">
              Register now!
            </h1>
            <form onSubmit={handelRegister} className="card-body ">
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                  pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
                  title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <div className="divider">OR</div>
            <div className="flex justify-center mb-6">
              <ShocalLogin></ShocalLogin>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
