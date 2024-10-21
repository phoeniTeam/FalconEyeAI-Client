import React, { useState } from "react";
import styles from "../styles";
import { logoSide } from "../assets";
import { HiHome } from "react-icons/hi2";
import { FaImage } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { IoMdColorFill } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import { SlMenu } from "react-icons/sl";
import { FaUserAlt } from "react-icons/fa";
import { MdHideImage } from "react-icons/md";
import { HiMiniSquare2Stack } from "react-icons/hi2";

function Sidebar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const sideLinks = [
    {
      label: "Home",
      route: "/home",
      icon: <HiHome className="w-5 h-5 lg:w-6 lg:h-6 text-white" />,
    },
    {
      label: "Image Restore",
      route: "/transformation/image-restore",
      icon: <FaImage className="w-5 h-5 lg:w-6 lg:h-6 text-white " />,
    },
    {
      label: "Generative Fill",
      route: "/transformation/generative-fill",
      icon: <BsStars className="w-5 h-5 lg:w-6 lg:h-6 text-white " />,
    },
    {
      label: "Object Removal",
      route: "/transformation/object-removal",
      icon: <HiMiniSquare2Stack className="w-5 h-5 lg:w-6 lg:h-6 text-white" />,
    },
    {
      label: "Object Recolor",
      route: "/transformation/object-recolor",
      icon: <IoMdColorFill className="w-5 h-5 lg:w-6 lg:h-6 text-white " />,
    },
    {
      label: "Background Removal",
      route: "/transformation/background-removal",
      icon: <MdHideImage className="w-5 h-5 lg:w-6 lg:h-6 text-white" />,
    },
  ];

  const subSideLinks = [
    {
      label: " Buy Credit",
      route: "/credit",
      icon: (
        <svg
          width="20"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.43635 5.37469H5.41932V4.56422C5.41932 3.30844 5.9326 2.16703 6.75948 1.34063C7.58635 0.51375 8.72776 0 9.98354 0C11.2393 0 12.3812 0.51375 13.2076 1.34063C14.0345 2.16703 14.5482 3.30844 14.5482 4.56422V5.37469H18.5635C18.8045 5.37469 19.0229 5.47453 19.1804 5.63203L19.2231 5.67984C19.3567 5.83406 19.4378 6.03516 19.4378 6.24938V20.8627C19.4378 21.7238 19.0843 22.5089 18.5153 23.0775C17.9467 23.6461 17.1615 24 16.3004 24H3.69901C2.83979 24 2.05463 23.6461 1.48463 23.0766C0.915571 22.5094 0.562134 21.7252 0.562134 20.8627V6.24938C0.562134 6.00844 0.660571 5.78906 0.81854 5.63109C0.97604 5.47359 1.19541 5.37469 1.43635 5.37469ZM9.40135 12.9755C9.40135 12.645 9.66948 12.3769 9.99995 12.3769C10.3304 12.3769 10.5985 12.645 10.5985 12.9755V14.9091H12.5317C12.8617 14.9091 13.1298 15.1767 13.1298 15.5072C13.1298 15.8377 12.8617 16.1058 12.5317 16.1058H10.5985V18.0389C10.5985 18.3694 10.3304 18.6375 9.99995 18.6375C9.66948 18.6375 9.40135 18.3694 9.40135 18.0389V16.1058H7.46823C7.13776 16.1058 6.86963 15.8377 6.86963 15.5072C6.86963 15.1767 7.13776 14.9091 7.46823 14.9091H9.40135V12.9755ZM6.53213 5.37469H13.4354V4.56422C13.4354 3.61594 13.0468 2.75297 12.421 2.12719C11.7953 1.50188 10.9323 1.11281 9.98354 1.11281C9.03526 1.11281 8.17182 1.50188 7.54651 2.12719C6.92073 2.75297 6.53213 3.61594 6.53213 4.56422V5.37469ZM5.41932 7.53375V6.48891H1.67588V20.8627C1.67588 21.4181 1.90417 21.9234 2.2712 22.2905C2.63682 22.6584 3.14307 22.8858 3.69901 22.8858H16.3004C16.8545 22.8858 17.3607 22.657 17.7278 22.29C18.0948 21.923 18.324 21.4167 18.324 20.8627V6.48891H14.5482V7.54547C14.9612 7.75547 15.2443 8.18437 15.2443 8.67891C15.2443 9.38156 14.6748 9.95062 13.9726 9.95062C13.2704 9.95062 12.7004 9.38156 12.7004 8.67891C12.7004 8.16891 13.0014 7.72875 13.4354 7.52625V6.48891H6.53213V7.53797C6.95307 7.74516 7.24323 8.17781 7.24323 8.67891C7.24323 9.38156 6.67417 9.95062 5.97151 9.95062C5.26932 9.95062 4.70026 9.38156 4.70026 8.67891C4.70026 8.175 4.99323 7.73906 5.41932 7.53375Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      label: "Profile",
      route: "/profile",
      icon: <FaUserAlt className="w-5 h-5 lg:w-6 lg:h-6 text-white" />,
    },
  ];

  const isActive = (route) => location.pathname === route;

  return (
    <div className="flex">
      <SlMenu
        onClick={() => setIsOpen(!isOpen)}
        className="text-white w-6 h-6 m-4 lg:hidden"
      />
      {/* Sidebar */}
      <div
        className={`fixed z-50 top-0 left-0 bg-[#040509] border-r border-[#575765] h-full pl-1 py-1 transition-transform transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:flex lg:flex-col w-64 max-md:w-52`}
      >
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-start py-2 pt-4 pl-4 pb-4 cursor-pointer lg:hidden"
        >
          <SlMenu className="text-white w-6 h-6" />
        </div>
        <div className=" lg:pt-4 pl-3 pb-1 lg:pb-2">
          <img
            src={logoSide}
            alt="logo"
            className="w-[8.5rem] lg:w-[10.5vw] "
          />
        </div>

        <div className="flex flex-col justify-between h-[84%] lg:h-full">
          <ul className="menu gap-1">
            {sideLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.route}
                  className={`flex items-center gap-3 p-2 rounded-full ${
                    isActive(link.route)
                      ? "bg-gradient-to-r from-primary via-primary to-secondary"
                      : "hover:underline"
                  }`}
                >
                  {link.icon}
                  <span className={`${styles.paragraph4}`}>{link.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <ul className="menu">
            {subSideLinks.map((link, index) => (
              <li key={index}>
                <Link
                  to={link.route}
                  className={`flex items-center gap-3 p-2 rounded-full ${
                    isActive(link.route)
                      ? "bg-gradient-to-r from-primary via-primary to-secondary"
                      : "hover:underline"
                  }`}
                >
                  {link.icon}
                  <span className={`${styles.paragraph4}`}>{link.label}</span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/"
                className={`flex items-center gap-3 p-2 rounded-full group hover:text-red-700 }`}
              >
                <RiLogoutCircleLine className="w-5 h-5 lg:w-6 lg:h-6 text-white group-hover:text-red-700" />
                <span
                  className={`${styles.paragraph4} group-hover:text-red-700`}
                >
                  {" "}
                  Logout
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
