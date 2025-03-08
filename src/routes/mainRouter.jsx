import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import ErrorPage from "../pages/Error";

const MainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard />,
        errorElement: <ErrorPage/>
    }
]);

export default MainRouter;