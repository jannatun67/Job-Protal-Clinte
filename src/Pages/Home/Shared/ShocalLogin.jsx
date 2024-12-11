import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useNavigate } from "react-router-dom";


const ShocalLogin = () => {
    const navigate= useNavigate
    const{SignInWithGoogle}=useContext(AuthContext)
    const handelGoogleLogin = ()=>{
        SignInWithGoogle()
        .then(result => {
            console.log(result.user);
          if (result.user) {
            navigate('/')
          }
        })
        .catch((error) => {
           console.log(error.message);
          });
        
    }
    return (
        <div>
            <button onClick={handelGoogleLogin} className="btn">Login With Google</button>
        </div>
    );
};

export default ShocalLogin;