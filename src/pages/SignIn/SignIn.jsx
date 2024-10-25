import styles from '../../styles';
import { logo } from '../../assets';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function SignIn() {
    const [signIn, setSignIn] = useState({
        email: '',
        password: '',
    });
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState('');
    const VITE_LOGIN_API = import.meta.env.VITE_LOGIN_API;
    const USER_LOCAL_STORAGE = import.meta.env.VITE_USER_LOCAL_STORAGE;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignIn({
            ...signIn,
            [name]: value,
        });
    };

    const handleSignIn = async (e) => {
        e.preventDefault();
        // handle form submission
        console.log("////////",signIn);

        try {
            const response = await axios.post(VITE_LOGIN_API, {
                email: signIn.email,
                password: signIn.password,
            });
            if (response.status === 200) {
                console.log('User logged in successfully');
                alert("Welcome")
                localStorage.setItem(
                    USER_LOCAL_STORAGE,
                    JSON.stringify(response.data)
                );
                // redirect home page
                navigate('/home');
            } else {
                console.log('Invalid credentials');
                // display error message
            }
        } catch (error) {
            console.log('Error in signing in', error);
            if (error.response.status === 400) {
                setErrorMessage('Invalid email or password');
            } else if (error.response.status === 500) {
                setErrorMessage('Internal server error');
            }else{
                setErrorMessage('Failed to sign in. Please try again later.');
            }
            // display error message
        }
    };


    return (
        <div
            className={`${styles.outerWrapper} bg-black lg:h-screen md:h-screen sm:h-screen max-sm:h-screen  flex justify-center items-center `}
        >
            <div className={`${styles.wrapper}`}>
                <div className="grid lg:grid-cols-2 md:grid-cols-1   sm:grid-cols-1 max-sm:grid-cols-1  md:h-screen sm:h-screen max-sm:h-screen lg:items-center lg:justify-items-center  md:justify-items-center sm:justify-items-center max-sm:justify-items-center  ">
                    <div className="logo flex md:items-end justify-center sm:justify-center sm:items-end max-sm:justify-center max-sm:items-end">
                        <img
                            src={logo}
                            alt="logo-falconeyeai"
                            className="object-contain object-center lg:w-full md:w-1/2 sm:w-1/2 max-sm:w-1/2"
                        />
                    </div>
                    <div className="lg:p-16">
                        <h2
                            className={`${styles.heading2} text-white p-6 mb-5 md:text-center sm:text-center max-sm:text-center`}
                        >
                            Sign In
                        </h2>
                        <form
                            className="w-full max-w-md"
                            onSubmit={handleSignIn}
                        >
                            <div className="mb-4 flex items-center  ">
                                <div className="relative w-full">
                                    <div className="absolute flex gap-2 items-center transform -translate-y-1/2 left-2 top-1/2 text-[#1A1A1D]">
                                        <MdEmail className=" h-8 w-8" />
                                    </div>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={signIn.email}
                                        onChange={handleChange}
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
                                        value={signIn.password}
                                        onChange={handleChange}
                                        placeholder="Password"
                                        className="pl-12 border border-[#38383E] rounded-full focus:outline-none p-3 focus:ring focus:ring-blue-400 bg-[#38383E] bg-opacity-9 placeholder:text-[#1E1E1E] font-bold"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col">
                                {errorMessage && (
                                    <p className="text-red-500 text-xs">
                                        {errorMessage}
                                    </p>
                                )}
                                <button
                                    type="submit"
                                    className="text-white bg-gradient-to-r from-[#333399] via-[#333399] to-[#FF00CC] rounded-full p-1 "
                                >
                                    <div className="gradient-button ">
                                        Sign In
                                    </div>
                                </button>
                                <p className="mt-6 text-center text-white">
                                    Do not have an account?{' '}
                                    <Link
                                        to="/sign-up"
                                        className={`${styles.primaryTextOnHover}`}
                                    >
                                        Sign Up
                                    </Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
