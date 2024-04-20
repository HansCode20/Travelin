import Home from "../pages/Home";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Detail from "../components/Promo/Detail";




const routeList = [
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {

        path: "/detail/:id", // Note the :id parameter
       element: <Detail />

    }
    
];

export default routeList;