import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import DocumentListPage from "./pages/documents/list";

import { Provider } from "./provider";

const DocumentPage = lazy(() => import("./pages/documents/document"));

export const router = createBrowserRouter([
  {
    element: <Provider />,
    children: [
      {
        path: "",
        element: <DocumentListPage />,
      },
      {
        path: "/document/:docId",
        element: <DocumentPage />,
      },
    ],
  },
]);
