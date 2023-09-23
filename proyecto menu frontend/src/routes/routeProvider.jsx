import { createBrowserRouter } from "react-router-dom";
import NotFound from "./notFound";
import Layout from './layout'
import Index from './index'
import Login from './login'
import Registro from "./registro";
import Nosotros from "./nosotros";

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        
        children: [
          {
            index: true,
            element: <Index />,
          },
          {
            path: "/login",
            element: <Login />,
          },
          {
            path: "/registro",
            element: <Registro />,
          },
          {
            path: "/nosotros",
            element: <Nosotros />,
          },
          
        ],
      },
    ],
  },
]);
