import { Loader2Icon } from "lucide-react";

export const LoadingPage = () => {
  return (
    <div className="w-full h-[100vh] flex items-center justify-center">
      <Loader2Icon className="h-12 w-12 animate-spin" />
    </div>
  );
};
