import { createBrowserRouter, ScrollRestoration } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import LandingPage from "./pages/LandingPage/LandingPage";
import Home from "./pages/Home/Home";
import Credit from "./pages/Credit/Credit";
import Transformation from "./pages/Transformation/Transformation";
import SignUp from "./pages/SignUp/SignUp";
import SignIn from "./pages/SignIn/SignIn";
import Profile from "./pages/Profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: (
      <div className="relative">
        <ScrollRestoration />
        <Navbar />
        <LandingPage />
        <Footer />
      </div>
    ),
  },
  {
    path: "/home",
    errorElement: <ErrorPage />,
    element: (
      <div className="flex h-screen max-md:flex-col">
        <Sidebar />
        <div className="flex-grow overflow-y-auto">
          <ScrollRestoration />
          <Home />
        </div>
      </div>
    ),
  },
  {
    path: "/sign-up",
    errorElement: <ErrorPage />,
    element: (
      <>
        <ScrollRestoration />
        <SignUp />
      </>
    ),
  },
  {
    path: "/sign-in",
    errorElement: <ErrorPage />,
    element: (
      <>
        <ScrollRestoration />
        <SignIn />
      </>
    ),
  },
  {
    path: "/transformation/:transformationType",
    errorElement: <ErrorPage />,
    element: (
      <div className="flex h-screen max-md:flex-col">
        <Sidebar />
        <div className="flex-grow overflow-y-auto">
          <ScrollRestoration />
          <Transformation />
        </div>
      </div>
    ),
  },
  {
    path: "/credit",
    errorElement: <ErrorPage />,
    element: (
      <div className="flex h-screen max-md:flex-col">
        <Sidebar />
        <div className="flex-grow overflow-y-auto">
          <ScrollRestoration />
          <Credit />
        </div>
      </div>
    ),
  },
  {
    path: "/profile",
    errorElement: <ErrorPage />,
    element: (
      <div className="flex h-screen max-md:flex-col">
        <Sidebar />
        <div className="flex-grow overflow-y-auto">
          <ScrollRestoration />
          <Profile />
        </div>
      </div>
    ),
  },
]);

export default router;
