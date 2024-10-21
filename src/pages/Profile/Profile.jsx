import React from "react";
import { FaUserTie, FaFilter } from "react-icons/fa";
import { MdStars } from "react-icons/md";
import { FaDotCircle } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import styles from "../../styles";
import { IoSearch } from "react-icons/io5";

function Profile() {
  return (
    <div className={styles.wrapper}>
      <div className="pt-5 px-4 flex flex-col justify-between">
        <div className="flex gap-8 items-start">
          <div className=" relative w-24 h-24 flex justify-center items-center bg-[#1d1a1a] rounded-full">
            <FaUserTie size={48} className="text-white" />
            <FaEdit className=" absolute top-0 left-24 text-darkWhite fill-current cursor-pointer" />
          </div>

          <div className="flex flex-col mt-2">
            <p className={styles.paragraph1}>Abdulaziz</p>
            <div className="flex gap-10 mt-3 ">
              <div
                className={`${styles.primaryBackground} rounded-full p-1 items-center`}
              >
                <FaDotCircle className="text-white" size={20} />
              </div>
              <div
                className={`${styles.primaryBackground} rounded-full p-1 items-center`}
              >
                <MdStars className="text-white" size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <div className={`flex space-x-2 mt-4 mb-4 ${styles.paragraph1}`}>
            <span>Your</span>
            <span className={styles.primaryText}>Creations</span>
          </div>

          <div className="flex items-center">
            <div className="flex items-center w-96">
              <IoSearch className="h-5 w-5 ml-2 opacity-70 text-[#38383E]" />
              <input
                type="search"
                placeholder="Search..."
                className="text-white placeholder:text-[#38383E] bg-transparent focus:outline-none w-full pl-2"
              />
            </div>
            <div className="ml-3 btn btn-circle border-none bg-[#131313] hover:bg-[#131313] min-h-10 h-10 w-10">
              <FaFilter className="text-[#38383E] w-5 h-5" />
            </div>
          </div>
        </div>

        <div className="flex justify-between lg:space-x-8 py-5 space-x-1 flex-wrap space-y-4">
          {/* Column 1 */}
          <div className="flex flex-col items-center space-y-5">
            <div className="rounded-lg shadow-lg bg-[#131313] h-96 w-32">
              <img
                src="https://i.pinimg.com/736x/26/a1/ea/26a1ea8e6f7ed5b9c31f36a4f02d4770.jpg"
                alt="Image 1"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="rounded-lg shadow-lg bg-[#131313] h-64 w-32">
              <img
                src="https://i.pinimg.com/564x/57/1d/7c/571d7c91f250715862d7337d14fd4e11.jpg"
                alt="Image 2"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col items-center space-y-5">
            <div className="rounded-lg shadow-lg bg-[#131313] h-80 w-32">
              <img
                src="https://i.pinimg.com/736x/0a/cb/53/0acb53df3922624786dba5fa0de5af02.jpg"
                alt="Image 3"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="rounded-lg shadow-lg bg-[#131313] h-56 w-32">
              <img
                src="https://i.pinimg.com/736x/4b/5b/c5/4b5bc5355bb1caeeb1094603a01c77d1.jpg"
                alt="Image 4"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Column 3 */}
          <div className="flex flex-col items-center space-y-5">
            <div className="rounded-lg shadow-lg bg-[#131313] h-96 w-32">
              <img
                src="https://i.pinimg.com/736x/4e/03/87/4e03872d7166cc5ed92c490708af3261.jpg"
                alt="Image 5"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="rounded-lg shadow-lg bg-[#131313] h-64 w-32">
              <img
                src="https://i.pinimg.com/736x/70/3b/06/703b06ee21b448a9d30313d1e17400a9.jpg"
                alt="Image 6"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Column 4  */}
          <div className="flex flex-col items-center space-y-5">
            <div className="rounded-lg shadow-lg bg-[#131313] h-64 w-32">
              <img
                src="https://i.pinimg.com/736x/62/88/5b/62885bc372e05ee0dde3b4f0dcf22b2c.jpg"
                alt="Image 7"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="rounded-lg shadow-lg bg-[#131313] h-96 w-40">
              <img
                src="https://i.pinimg.com/736x/6e/b6/d4/6eb6d482c981c66dd001fd5a51ac032d.jpg"
                alt="Image 8"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Column 5  */}
          <div className="flex flex-col items-center space-y-5">
            <div className="rounded-lg shadow-lg bg-[#131313] h-80 w-40">
              <img
                src="https://i.pinimg.com/736x/ba/55/10/ba5510a35fcb791602fd70982608767a.jpg"
                alt="Image 9"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="rounded-lg shadow-lg bg-[#131313] h-56 w-28">
              <img
                src="https://i.pinimg.com/564x/87/18/21/87182104d5563a868649e5b7ff249684.jpg"
                alt="Image 10"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
