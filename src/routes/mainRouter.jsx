import { createBrowserRouter } from "react-router-dom";
import { ErrorPage,LoginPage,RegisterPage,DashboardPage } from "../pages";

const MainRouter = createBrowserRouter([
    {
        path:"/login",
        element: <LoginPage />,
        errorElement: <ErrorPage/>
    },
    {
        path:"/sigup",
        element: <RegisterPage />,
        errorElement: <ErrorPage/>
    },
    {
        path: "/",
        element: <DashboardPage />,
        errorElement: <ErrorPage/>
    }
]);

export default MainRouter;