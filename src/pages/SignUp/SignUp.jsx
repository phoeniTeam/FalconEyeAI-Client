import { BsFillPersonFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import styles from "../../styles";
import { logo } from "../../assets";
function SignUp() {
  return (
    <div className={`${styles.outerWrapper} bg-black `}>
      <div
        className={`${styles.wrapper} flex justify-center items-center p-64`}
      >
        <div className="grid grid-cols-2 items-center justify-items-center">
          <div className="logo p-20">
            <img
              src={logo}
              alt="logo-falconeyeai"
              className="object-contain object-center"
            />
          </div>
          <div className="border-2 p-20">
            <h2 className={`${styles.heading2} text-white p-6 mb-5`}>Sign Up</h2>
            <form>
              <div className="mb-4 flex items-center">
                <div className="relative">
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 text-[#1A1A1D] flex gap-2 items-center">
                    <BsFillPersonFill className="h-8 w-8"/>
                  </div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Name"
                    className="pl-12 border border-[#38383E] rounded-full focus:outline-none p-3 focus:ring focus:ring-blue-400 bg-[#38383E] bg-opacity-9 placeholder:text-[#1E1E1E] font-bold"
                    required
                  />
                </div>
              </div>
              <div className="mb-4 flex items-center  ">
                <div className="relative">
                  <div className="absolute flex gap-2 items-center transform -translate-y-1/2 left-2 top-1/2 text-[#1A1A1D]">
                    <MdEmail className=" h-8 w-8" />
                  </div>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="pl-12 border border-[#38383E] rounded-full focus:outline-none p-3 focus:ring focus:ring-blue-400 bg-[#38383E] bg-opacity-9 placeholder:text-[#1E1E1E] font-bold"
                    required
                  />
                </div>
              </div>
              <div className="mb-8 flex items-center ">
                <div className="relative">
                  <div className="absolute flex gap-2 items-center transform -translate-y-1/2 left-2 top-1/2 text-[#1A1A1D]">
                    <RiLockPasswordLine className="h-8 w-8"/>
                  </div>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Password"
                    className="pl-12 border border-[#38383E] rounded-full focus:outline-none p-3 focus:ring focus:ring-blue-400 bg-[#38383E] bg-opacity-9 placeholder:text-[#1E1E1E] font-bold"
                    required
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <button type="submit" className="text-white bg-gradient-to-r from-[#333399] via-[#333399] to-[#FF00CC] rounded-full p-1 ">
<div className="rounded-full bg-black p-3 ">
                  Sign Up
                  </div>
                </button>
                <p className="mt-6 text-center text-white">
                  Already have an account? <a href="#" className="text-transparent bg-clip-text bg-gradient-to-r from-[#333399] via-[#333399] to-[#FF00CC]
                  font-bold">Sign In</a>
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
