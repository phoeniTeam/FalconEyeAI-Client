import styles from "../../styles"
import { logo } from "../../assets";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
function SignIn() {
    return (
        <div className={`${styles.outerWrapper} bg-black lg:h-screen md:h-screen sm:h-screen max-sm:h-screen  flex justify-center items-center `}>
            <div className={`${styles.wrapper}`}>
            <div className="grid lg:grid-cols-2 md:grid-cols-1   sm:grid-cols-1 max-sm:grid-cols-1  md:h-screen sm:h-screen max-sm:h-screen lg:items-center lg:justify-items-center  md:justify-items-center  ">
            <div className="logo flex md:items-end justify-center sm:justify-center sm:items-end max-sm:justify-center max-sm:items-end">
            <img
              src={logo}
              alt="logo-falconeyeai"
              className="object-contain object-center lg:w-full md:w-1/2 sm:w-1/2 max-sm:w-1/2"
            />
                    </div>
                    <div className="lg:p-16">
                    <h2 className={`${styles.heading2} text-white p-6 mb-5 md:text-center sm:text-center max-sm:text-center`}>Sign In</h2>
            <form className="w-full max-w-md">
              <div className="mb-4 flex items-center  ">
                <div className="relative w-full">
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
                <div className="relative w-full">
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
                  Sign In
                  </div>
                </button>
                <p className="mt-6 text-center text-white">
                  Do not have an account? <a href="#" className="text-transparent bg-clip-text bg-gradient-to-r from-[#333399] via-[#333399] to-[#FF00CC]
                  font-bold">Sign Up</a>
                </p>
              </div>
            </form>
                    </div>

                </div>

            </div>

        </div>
    )
}

export default SignIn