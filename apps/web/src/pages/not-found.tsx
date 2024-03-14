import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center flex-col">
      <h1 className="text-5xl mb-12">Not Found</h1>
      <Link to="/">
        <Button>Return to home screen</Button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
