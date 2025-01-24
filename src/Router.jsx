import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import CollegeDetails from "./pages/CollegeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: `/colleges/:id`,
        element: <CollegeDetails />,
      },
    ],
  },
]);

export default router;
