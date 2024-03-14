import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

import { Provider } from "./provider";

const NotFoundPage = lazy(() => import("./pages/not-found"));
const DocumentListPage = lazy(() => import("./pages/documents/list"));
const DemoDocumentPage = lazy(() => import("./pages/documents/demo"));

export const router = createBrowserRouter([
  {
    element: <Provider />,
    children: [
      {
        path: "",
        element: <DocumentListPage />,
      },
      {
        path: "/document/demo",
        element: <DemoDocumentPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
