import { createBrowserRouter, ScrollRestoration } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import LandingPage from './pages/LandingPage/LandingPage';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import CreditPage from './pages/CreditPage/CreditPage';
import Transformation from './pages/Transformation/Transformation';

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
            <>
                <ScrollRestoration />
                <Navbar />
                <Home />
                <Footer />
            </>
        )
    },
    {
        path: '/registration',
        errorElement: <ErrorPage />,
        element: (
            <>
                <ScrollRestoration />
                <Navbar />
                <Registration />
                <Footer />
            </>
        )
    },
    {
        path: '/creditPage',
        errorElement: <ErrorPage />,
        element: (
            <>
                <ScrollRestoration />
                <Navbar />
                <CreditPage />
                <Footer />
            </>
        )
    },
    {
        path: '/transformation',
        errorElement: <ErrorPage />,
        element: (
            <>
                <ScrollRestoration />
                <Navbar />
                <Transformation />
                <Footer />
            </>
        )
    }
]);

export default router;