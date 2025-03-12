import { createBrowserRouter } from "react-router-dom";
import { ErrorPage,LoginPage,RegisterPage,DashboardPage, LandingPage, SubscriptionPage , WebcamPage,CemarasPage , ModelParametersPage, DemoPage,LivePage,NotificationPage,ReportsPage} from "../pages";


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
        path: "/camera",
        element: <CemarasPage />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/demo",
        element: <DemoPage />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/webcam",
        element: <WebcamPage />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/live",
        element: < LivePage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/modelparameters",
        element: <ModelParametersPage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/notifications",
        element: <NotificationPage/>,
        errorElement: <ErrorPage/>
    },
    {
        path: "/reports",
        element: <ReportsPage/>,
        errorElement: <ErrorPage/>
    },
]);

export default MainRouter;