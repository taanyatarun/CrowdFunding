import { ConnectWallet } from "@thirdweb-dev/react";
import Donor from "./pages/Donor";
import Login from "./pages/Login/Login";
import Org from "./pages/Org";
import Register from "./pages/Register/Register";

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
    path: '/org/*',
    element: <div><Org/></div>
  }
])

export default function Home() {
  return (
    <RouterProvider router={router}/>
  );
}
