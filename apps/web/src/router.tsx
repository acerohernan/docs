import { createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/home";

import { Provider } from "./provider";

export const router = createBrowserRouter([
  {
    element: <Provider />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
    ],
  },
]);
