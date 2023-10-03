import React, { useState } from "react";
import { RegisterAPI,GoogleSignInAPI} from "../api/AuthAPI";
import Logo from "../assets/logo.jpg" 
import '../Sass/LoginComponent.scss'
import GoogleButton from 'react-google-button'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


export default function RegisterComponent(){
    let navigate = useNavigate();
    const [credentials,setCredentials]=useState({});
    const login=async()=>{
        try{
            let res = await RegisterAPI(credentials.email, credentials.password);
        toast.success("Welcome to CampusNexus!!");
        navigate("/home");
        }
        catch(err){
            console.log(err);
            toast.error("Cannot create your account..");
        }
    }

    const googleSignin=()=>{
        let response=GoogleSignInAPI();
        navigate("/home");
    }
    return(
        <div className="login-wrapper">
      <img src={Logo} className="logo" />

      <div className="login-wrapper-inner">
        <h1 className="heading"><u><b>CampusNexus</b></u></h1>

        <div className="auth-inputs">
          <input
           onChange={(event) =>
            setCredentials({ ...credentials, email: event.target.value })
          }
            type="email"
            className="common-input"
            placeholder="Email or Phone number"
          />
          <input
            onChange={(event) =>
              setCredentials({...credentials, password: event.target.value })
            }
            type="password"
            className="common-input"
            placeholder="Password(6 or more characters)"
          />
        </div>
        <button onClick={login} className="login-btn">
          Join into our network
        </button>
      </div>
      <hr className="hr-text" data-content="or" />
        <div className="google-btn-container">
            <GoogleButton className="google-btn"
                onClick={googleSignin}
            />
        <p className="go-to-signup">Already on CampusNexus!!  <span className="join-now" onClick={()=>navigate("/")}>
            Sign in</span></p>

        </div>
    </div>
    )
}