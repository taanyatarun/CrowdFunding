import { ConnectWallet } from "@thirdweb-dev/react";
import "./Home.css";
import Donor from "./Components/Donor/Donor";
import Login from "./Components/Login/Login";
import Org from "./Components/Org/Org";
import Register from "./Components/Register/Register";

import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <div><Login/></div>
  },
  {
    path: '/register',
    element: <div><Register/></div>
  },
  {
    path: '/donor',
    element: <div><Donor/></div>
  },
  {
    path: '/org',
    element: <div><Org/></div>
  }
])

export default function Home() {
  return (
    <RouterProvider router={router}/>
  );
}
