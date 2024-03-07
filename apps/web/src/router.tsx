import { createBrowserRouter } from "react-router-dom";

import DocumentListPage from "./pages/documents/list";
import DocumentPage from "./pages/documents/document";

import { Provider } from "./provider";

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
