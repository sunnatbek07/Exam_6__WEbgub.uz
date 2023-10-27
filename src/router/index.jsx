import { lazy } from "react";
// import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter } from 'react-router-dom';
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";

const App = lazy(() => import("../App"));
const Error = lazy(() => import("../pages/Error"));
const Home = lazy(() => import("../pages/Home"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/signin",
                element: <SignIn />
            },
            {
                path: "/signup",
                element: <SignUp />
            },
        ],
    },
]);

export default router;