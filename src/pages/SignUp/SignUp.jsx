import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import styles from "../../styles";
import { logo } from "../../assets";
import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { FaRegUser } from "react-icons/fa";

function SignUp() {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  // const navigate = useNavigate();
  const [register, setRegister] = useState({
    username: "",
    name:"",
    // firstName:"",
    // lastName:"",
    email: "",
    password: "",
  });
  const [errorMessage ,setErrorMessage] = useState();
  const VITE_REGISTER_API="import.meta.env.VITE_REGISTER_API"
  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
if(register.username.trim() === "" || register.email.trim() === "" || register.password.trim() === ""){{
  // alert("All fields are required");
  return;
  

}};
if (!emailRegex.test(register.email)) {
  setErrorMessage("Invalid email format");
  return;
}
if(register.username.length < 3 || register.username.length > 20){
  setErrorMessage("Username must be between 3 and 20");
  return;
}
if(register.password.length < 8 || register.password.length > 20){
  alert("Password must be between 8 and 20 characters long");
  setErrorMessage("Password must be between 8 and 20 characters long");
  return;
  }
  setErrorMessage("")
  // Make API call to register user here

  try{
    const response = await axios.post(VITE_REGISTER_API,{
      // clerkId:"",
      username: register.username,
      name:register.name,
      email: register.email,
      password: register.password,
      // photo:"",
      // planId:"",
      // creditBalance:"",

    })
    if(response.statusCode === 200){
      alert("User registered successfully. Please login to continue.");
      // navigate('/signin');
    }
    else{
      alert("Failed to register user. Please try again later.");
    }
    
  }catch(error){
    if(error.response.status === 400){
      setErrorMessage(error.response.data.message);
    }else{
      setErrorMessage("Failed to register user. Please try again later.");
    }

    }
  }

  return (
    <div
      className={`${styles.outerWrapper} bg-black lg:h-screen md:h-screen sm:h-screen max-sm:h-screen  flex justify-center items-center `}
    >
      <div className={`${styles.wrapper}`}>
        <div className="grid lg:grid-cols-2 md:grid-cols-1   sm:grid-cols-1 max-sm:grid-cols-1  md:h-screen sm:h-screen max-sm:h-screen lg:items-center lg:justify-items-center  md:justify-items-center  ">
          <div className="logo flex md:items-end justify-center sm:justify-center sm:items-end max-sm:justify-center max-sm:items-end">
            <img
              src={logo}
              alt="logo-falconeyeai"
              className="object-contain object-center lg:w-full md:w-1/2 sm:w-1/2 max-sm:w-1/2"
            />
          </div>
          <div className="lg:p-16 md:p-0 ">
            <h2
              className={`${styles.heading2} text-white flex lg:justify-start p-6 mb-5 md:justify-center sm:justify-center max-sm:justify-center `}
            >
              Sign Up
            </h2>
            <form className="w-full max-w-md" onSubmit={handleSubmit}>
              <div className="mb-4 flex items-center">
                <div className="relative w-full">
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#1A1A1D] flex gap-2 items-center">
                    <BsFillPersonFill className="h-8 w-8" />
                  </div>
                  <input
                    type="text"
                    id="name"
                    value={register.username}
                    onChange={handleChange}
                    name="username"
                    placeholder="UserName"
                    className="pl-12 border border-[#38383E] rounded-full focus:outline-none p-3 focus:ring focus:ring-blue-400 bg-[#38383E] bg-opacity-9 placeholder:text-[#1E1E1E] font-bold"
                    required
                  />
                </div>
              </div>
              <div className="mb-4 flex items-center">
                <div className="relative w-full">
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#1A1A1D] flex gap-2 items-center">
                  <FaRegUser className="h-7 w-7" />                  </div>
                  <input
                    type="text"
                    id="name"
                    value={register.fullName}
                    onChange={handleChange}
                    name="name"
                    placeholder="Name"
                    className="pl-12 border border-[#38383E] rounded-full focus:outline-none p-3 focus:ring focus:ring-blue-400 bg-[#38383E] bg-opacity-9 placeholder:text-[#1E1E1E] font-bold"
                    required
                  />
                </div>
              </div>
              <div className="mb-4 flex items-center  ">
                <div className="relative w-full">
                  <div className="absolute flex gap-2 items-center transform -translate-y-1/2 left-2 top-1/2 text-[#1A1A1D]">
                    <MdEmail className=" h-8 w-8" />
                  </div>

                  <input
                    type="email"
                    id="email"
                    value={register.email}
                    onChange={handleChange}
                    name="email"
                    placeholder="Email"
                    className="pl-12 border border-[#38383E] rounded-full focus:outline-none p-3 focus:ring focus:ring-blue-400 bg-[#38383E] bg-opacity-9 placeholder:text-[#1E1E1E] font-bold"
                    required
                  />
                </div>
              </div>
              <div className="mb-8 flex items-center ">
                <div className="relative w-full">
                  <div className="absolute flex gap-2 items-center transform -translate-y-1/2 left-2 top-1/2 text-[#1A1A1D]">
                    <RiLockPasswordLine className="h-8 w-8" />
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={register.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="pl-12 border border-[#38383E] rounded-full focus:outline-none p-3 focus:ring focus:ring-blue-400 bg-[#38383E] bg-opacity-9 placeholder:text-[#1E1E1E] font-bold"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <div className="pt-5"></div>
                {errorMessage && (
                  <div className="text-white text-sm">{errorMessage}</div>
                )}
                <button
                  type="submit"
                  className="text-white bg-gradient-to-r from-[#333399] via-[#333399] to-[#FF00CC] rounded-full p-1  "
                >
                  <div className={`rounded-full bg-black p-3 font-bold hover:bg-gradient-to-r from-[#333399] via-[#333399] to-[#FF00CC]  `}>Sign Up</div>
                </button>
                <p className="mt-6 text-center text-white">
                  Already have an account?{" "}
                  <a
                    href="#"
                    className={`${styles.primaryTextOnHover}`}
                  >
                    Sign In
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
