import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import Credit from './pages/Credit/Credit';
import Transformation from './pages/Transformation/Transformation';
import SignUp from './pages/SignUp/SignUp';
import SignIn from './pages/SignIn/SignIn';
import Profile from './pages/Profile/Profile';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: (
            <>
                <ScrollRestoration />
                <Navbar />
                <LandingPage />
                <Footer />
            </>
        )
    },
    {
        path: '/home',
        errorElement: <ErrorPage />,
        element: (
            <div className='flex'>
                <ScrollRestoration />
                <Sidebar />
                <Home />
            </div>
        )
    },
    {
        path: '/sign-up',
        errorElement: <ErrorPage />,
        element: (
            <>
                <ScrollRestoration />
                <SignUp />
            </>
        )
    },
    {
        path: '/sign-in',
        errorElement: <ErrorPage />,
        element: (
            <>
                <ScrollRestoration />
                <SignIn />
            </>
        )
    },
    {
        path: '/transformation/:transformationType',
        errorElement: <ErrorPage />,
        element: (
            <>
                <ScrollRestoration />
                <Navbar />
                <Transformation />
                <Footer />
            </>
        )
    },
    {
        path: '/credit',
        errorElement: <ErrorPage />,
        element: (
            <>
                <ScrollRestoration />
                <Navbar />
                <Credit />
                <Footer />
            </>
        )
    },
    {
        path: '/profile',
        errorElement: <ErrorPage />,
        element: (
            <div className='flex'>
                <ScrollRestoration />
                <Sidebar />
                <Profile />
            </div>
        )
    },
]);

export default router;