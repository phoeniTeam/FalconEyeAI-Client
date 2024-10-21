import React from "react";
import styles from "../styles";
import { CiMenuBurger } from "react-icons/ci";
import { logoSide } from "../assets";
import { HiHome } from "react-icons/hi2";
import { FaImage } from "react-icons/fa";
import { BsStars } from "react-icons/bs";
import { IoMdColorFill } from "react-icons/io";
import { Link, useParams, useLocation } from "react-router-dom";
import { RiLogoutCircleLine } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa6";

function Sidebar() {
  const location = useLocation();

  const sideLinks = [
    {
      label: "Home",
      route: "/home",
      icon: <HiHome className="w-6 h-6 text-white" />,
    },
    {
      label: "Image Restore",
      route: "/transformation/image-restore",
      icon: <FaImage className="w-6 h-6 text-white" />,
    },
    {
      label: "Generative Fill",
      route: "/transformation/generative-fill",
      icon: <BsStars className="w-6 h-6 text-white" />,
    },
    {
      label: "Object Removal",
      route: "/transformation/object-removal",
      icon: (
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7.20703 5.55176H21.0996C22.6953 5.55176 24 6.8584 24 8.45215V20.1377C24 21.7334 22.6934 23.0381 21.0996 23.0381H7.20703C5.61133 23.0381 4.30664 21.7334 4.30664 20.1377V8.45215C4.30664 6.8584 5.61133 5.55176 7.20703 5.55176ZM1.96875 15.4072C1.96875 15.9502 1.52734 16.3916 0.984375 16.3916C0.441406 16.3916 0 15.9502 0 15.4072V4.84668C0 3.77832 0.4375 2.80566 1.14062 2.10254C1.84375 1.39941 2.81641 0.961914 3.88477 0.961914H16.6523C17.1953 0.961914 17.6367 1.40332 17.6367 1.94629C17.6367 2.48926 17.1953 2.93066 16.6523 2.93066H3.88477C3.35937 2.93066 2.87891 3.14551 2.53125 3.49316C2.18359 3.84082 1.96875 4.31934 1.96875 4.84668V15.4072ZM10.6055 15.4209C9.98438 15.4209 9.48047 14.917 9.48047 14.2959C9.48047 13.6748 9.98438 13.1709 10.6055 13.1709H17.7031C18.3242 13.1709 18.8281 13.6748 18.8281 14.2959C18.8281 14.917 18.3242 15.4209 17.7031 15.4209H10.6055Z"
            fill="white"
          />
        </svg>
      ),
    },
    {
      label: "Object Recolor",
      route: "/transformation/object-recolor",
      icon: <IoMdColorFill className="w-6 h-6 text-white" />,
    },
    {
      label: "Background Removal",
      route: "/transformation/background-removal",
      icon: (
        <svg
          width="25"
          height="26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.9038 16.7107C22.4144 16.7107 24.45 18.7463 24.45 21.257C24.45 23.7676 22.4144 25.8032 19.9038 25.8032C17.3932 25.8032 15.3576 23.7676 15.3576 21.257C15.3576 18.7463 17.3932 16.7107 19.9038 16.7107ZM2.18352 0.198898H22.0352C22.4874 0.198898 22.8916 0.384331 23.1874 0.678107C23.4833 0.973966 23.6666 1.38442 23.6666 1.83029V16.417C23.1541 16.019 22.5749 15.7002 21.9477 15.4836V2.22616C21.9477 2.13657 21.9144 2.06156 21.8519 2.00739C21.7977 1.95322 21.7144 1.91155 21.6331 1.91155H2.57105C2.48146 1.91155 2.40645 1.94488 2.35228 2.00739C2.29811 2.06156 2.25644 2.14282 2.25644 2.22616V16.8149H2.26269L8.92368 10.4373C9.19037 10.1914 9.60916 10.2185 9.84876 10.4852C9.85501 10.4915 9.85501 10.4998 9.86335 10.4998L15.4638 17.1254C14.4783 18.2046 13.8762 19.6423 13.8762 21.2195C13.8762 21.9049 13.9908 22.5633 14.1991 23.178H2.18352C1.73139 23.178 1.32719 22.9925 1.03133 22.6988C0.735473 22.405 0.552124 21.9925 0.552124 21.5466V1.83029C0.552124 1.37817 0.737557 0.973966 1.03133 0.678107C1.32511 0.382248 1.73764 0.198898 2.18352 0.198898ZM15.9139 16.6795L16.6869 11.9312C16.7494 11.5749 17.0848 11.3269 17.4411 11.3895C17.5786 11.4103 17.7015 11.479 17.7974 11.5686L21.3602 15.3127C20.906 15.2044 20.4351 15.1481 19.9476 15.1481C18.3995 15.146 16.9869 15.7252 15.9139 16.6795ZM17.5807 3.93672C18.2328 3.93672 18.8287 4.20341 19.2537 4.62845C19.685 5.05974 19.9455 5.64937 19.9455 6.30151C19.9455 6.95365 19.6788 7.54954 19.2537 7.97457C18.8225 8.40586 18.2328 8.6663 17.5807 8.6663C16.9285 8.6663 16.3327 8.39961 15.9076 7.97457C15.4763 7.54329 15.2159 6.95365 15.2159 6.30151C15.2159 5.64937 15.4826 5.05349 15.9076 4.62845C16.3389 4.19716 16.9306 3.93672 17.5807 3.93672ZM18.3808 18.4922L22.5394 22.9925C22.8686 22.4946 23.0603 21.8987 23.0603 21.257C23.0603 19.5152 21.6477 18.1025 19.9059 18.1025C19.3517 18.1005 18.8329 18.2421 18.3808 18.4922ZM21.4269 24.0197L17.2682 19.5193C16.939 20.0173 16.7473 20.6132 16.7473 21.2549C16.7473 22.9967 18.1599 24.4093 19.9017 24.4093C20.4559 24.4114 20.9747 24.2697 21.4269 24.0197Z"
            fill="white"
          />
        </svg>
      ),
    },
  ];

  const subSideLinks = [
    {
      label: "Profile",
      route: "/profile",
      icon: (
        <svg
          width="24"
          height="24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.06055 13.8828C8.44531 13.3359 7.95898 12.9414 7.85547 11.8047H7.78906C7.63642 11.8061 7.48613 11.767 7.35352 11.6914C7.13415 11.5533 6.96554 11.3476 6.87305 11.1055C6.65039 10.5957 6.48242 9.25781 7.0332 8.875L6.92969 8.80469L6.91797 8.65625C6.89648 8.38672 6.89062 8.07031 6.88477 7.71875C6.86523 6.46094 6.83984 4.93359 5.82617 4.62891L5.39258 4.49805L5.67773 4.14258C6.4274 3.19482 7.27886 2.33223 8.2168 1.57031C9.17969 0.804686 10.1797 0.296874 11.1484 0.146483C11.6539 0.0636 12.1713 0.0921487 12.6645 0.230132C13.1577 0.368115 13.6149 0.6122 14.0039 0.945311C14.2844 1.17466 14.5409 1.43184 14.7695 1.71289C15.2229 1.76266 15.6607 1.90734 16.0544 2.13751C16.4481 2.36769 16.7889 2.6782 17.0547 3.04883C17.3918 3.50016 17.644 4.00911 17.7988 4.55078C17.9594 5.10343 18.0255 5.67925 17.9941 6.25391C17.9635 7.29094 17.5397 8.27752 16.8086 9.01367C16.9372 9.01624 17.0635 9.04832 17.1777 9.10742C17.5996 9.33398 17.6133 9.82422 17.502 10.2363C17.3926 10.5781 17.2539 10.9785 17.123 11.3125C16.9629 11.7656 16.7324 11.8496 16.2793 11.8008C16.2559 12.918 15.7383 13.2266 15.043 13.8828C15.0723 15.5664 9.01953 15.3691 9.05664 13.8828H9.06055ZM8.74609 15.2715L10.5469 20.4746L11.4512 17.4219L11.0098 16.9375C10.6758 16.4492 10.791 15.8965 11.4004 15.7969C11.623 15.7746 11.847 15.77 12.0703 15.7832C12.3161 15.7677 12.5627 15.7768 12.8066 15.8105C13.3809 15.9375 13.4414 16.4941 13.1543 16.9375L12.7109 17.4219L13.6152 20.4746L15.2539 15.2715C16.4258 16.3281 20.5684 16.541 21.8633 17.2637C23.6562 18.2676 23.6074 22.1035 24 23.9043H0C0.390625 22.125 0.349609 18.2578 2.13672 17.2637C3.72852 16.377 7.44336 16.4453 8.74609 15.2715Z"
            fill="white"
          />
        </svg>
      ),
    },
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
  ];
  const isActive = (route) => location.pathname === route;
  return (
    <>
      <div className="drawer lg:drawer-open w-[19rem] max-md:w-full">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <label
            htmlFor="my-drawer"
            className="btn drawer-button min-h-10 h-10 border-grayLight lg:hidden"
          >
            <CiMenuBurger className="text-white w-6 h-6" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="fixed menu text-base-content h-full w-[19rem] p-4 border-2 border-r border-[#575765]">
            <div className="flex flex-col items-center justify-between w-full h-full">
              <div className="flex flex-col justify-start gap-2 w-full">
                <div className="py-2 pl-3">
                  <img src={logoSide} alt="logo" className="w-[13vw]" />
                </div>
                {sideLinks.map((ele, index) => {
                  return (
                    <li
                      key={index}
                      className=" flex justify-center items-center "
                    >
                      <Link
                        to={ele.route}
                        className={`w-[96%] flex justify-start items-center gap-3 rounded-full 
                            ${isActive(ele.route)
                            ? "bg-gradient-to-r from-primary via-primary to-secondary"
                            : ""
                          }`}
                      >
                        <div>{ele.icon}</div>
                        <div
                          className={` font-semibold text-base ${isActive(ele.route) ? "" : "hover:underline"
                            }`}
                        >
                          {ele.label}
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </div>
              <div className="flex flex-col gap-2 w-full">
                {subSideLinks.map((ele, index) => {
                  return (
                    <li key={index} className=" flex justify-center ">
                      <Link
                        to={ele.route}
                        className={`w-[96%] flex justify-start items-center gap-3 rounded-full 
                            ${isActive(ele.route)
                            ? "bg-gradient-to-r from-primary via-primary to-secondary"
                            : ""
                          }`}
                      >
                        {index === 0 ? (
                          <div className="dropdown dropdown-top md:dropdown-right md:dropdown-top w-full">
                            <div
                              tabIndex={0}
                              role="button"
                              className="w-full h-full flex justify-start items-center gap-3"
                            >
                              <div>{ele.icon}</div>
                              <div
                                className={`font-semibold text-base ${isActive(ele.route) ? "" : "hover:underline"
                                  }`}
                              >
                                {ele.label}
                              </div>
                            </div>
                            <ul
                              tabIndex={0}
                              className="dropdown-content bg-grayLight z-[1] w-40 rounded-xl shadow"
                            >
                              <li>
                                <button
                                  className=" text-lg hover:underline cursor-pointer focus:outline-none"
                                  onClick={() => {
                                  }}
                                >
                                  <FaRegUser /> Profile
                                </button>
                              </li>
                              <li>
                                <button
                                  className="text-error text-lg hover:underline cursor-pointer focus:text-error focus:outline-none"
                                  onClick={() => {
                                    // logout
                                  }}
                                >
                                  <RiLogoutCircleLine /> Logout
                                </button>
                              </li>
                            </ul>
                          </div>
                        ) : (
                          <>
                            <div>{ele.icon}</div>
                            <div
                              className={` font-semibold text-base ${isActive(ele.route) ? "" : "hover:underline"
                                }`}
                            >
                              {ele.label}
                            </div>
                          </>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
