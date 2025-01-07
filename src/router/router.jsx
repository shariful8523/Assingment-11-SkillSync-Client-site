import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../page/Home/Home";
import Register from "../page/Register";
import SingIn from "../page/SingIn";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: 'register',
            element: <Register></Register>
        },
        {
            path: 'SingIn',
            element: <SingIn></SingIn>
        }
      ]
    },
  ]);

  export default router;