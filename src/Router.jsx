import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import CollegeDetails from "./pages/CollegeDetails";
import College from "./pages/College";
import Admission from "./pages/Admission";
import MyCollege from "./pages/MyCollege";

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
        path: "/colleges",
        element: <College />,
      },
      {
        path: "/admission",
        element: <Admission />,
      },
      {
        path: "my-college",
        element: <MyCollege />,
      },
      {
        path: `/colleges/:id`,
        element: <CollegeDetails />,
      },
    ],
  },
]);

export default router;
