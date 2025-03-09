import { createBrowserRouter } from "react-router-dom";
import { ErrorPage,LoginPage,RegisterPage,DashboardPage, LandingPage, SubscriptionPage , WebcamPage} from "../pages";


const MainRouter = createBrowserRouter([
    {
        path:"/login",
        element: <LoginPage />,
        errorElement: <ErrorPage/>
    },
    {
        path:"/signup",
        element: <RegisterPage />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/",
        element: <LandingPage />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/subscription",
        element: <SubscriptionPage />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/home",
        element: <DashboardPage />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/webcam",
        element: <WebcamPage />,
        errorElement: <ErrorPage/>
    }
]);

export default MainRouter;