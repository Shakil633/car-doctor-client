import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login";
import SingUp from "../Pages/SingUp";
import Checkout from "../Pages/Checkout/Checkout";
import Bookings from "../Pages/Bookings/Bookings";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/singUp",
        element: <SingUp></SingUp>,
      },
      {
        path: "/checkout/:id",
        element: (
          <PrivetRoute>
            <Checkout></Checkout>
          </PrivetRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://car-doctor-server-flame-eight.vercel.app/services/${params.id}`
          ),
      },
      {
        path: "/booking",
        element: (
          <PrivetRoute>
            <Bookings></Bookings>
          </PrivetRoute>
        ),
      },
    ],
  },
]);

export default router;
