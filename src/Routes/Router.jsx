import { createBrowserRouter } from "react-router";
import RootLayout from "../Layouts/RootLayout";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Career from "../Pages/Career";
import NewsById from "../Pages/NewsById";

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
]);

export { router };
