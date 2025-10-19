import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import NewsById from "../Pages/NewsById";
import Login from "../Pages/Login";
import Registration from "../Pages/Registration";
import NewsDetails from "../Pages/NewsDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'about',
        Component: About    

      },
      {
        path: 'career',
        Component: Career
      },
      {
        path: '/news/:id',
        Component:NewsById
      }
    ],
  },
  {
    path:'login',
    Component: Login
  },
  {
    path: 'registration',
    Component: Registration
  },
  {
    path: '/newsDetails/:id',
    Component: NewsDetails
  }

]);

export { router };
