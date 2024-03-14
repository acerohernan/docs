import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";

import { LoadingPage } from "./pages/loading";

import { router } from "./router";

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
