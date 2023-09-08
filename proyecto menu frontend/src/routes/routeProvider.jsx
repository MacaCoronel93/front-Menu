import { createBrowserRouter } from "react-router-dom";
import NotFound from "./notFound";
import Layout from './layout'
import Index from './index'
import Login from './login'

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
          
        ],
      },
    ],
  },
]);
