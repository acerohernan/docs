import { NotebookIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <div className="w-full px-4 pt-4 pb-2 flex items-center justify-between fixed bg-[#F9FBFD] z-10">
        <div className="flex items-center gap-3 max-w-[50%]">
          <Link to="/">
            <NotebookIcon className="flex-shrink-0 w-10 h-10" />
          </Link>
          <div>
            <h1 className="text-xl line-clamp-1">Demo document</h1>
            <div className="flex gap-2">
              <Button variant="ghost" size="inline">
                File
              </Button>
              <Button variant="ghost" size="inline">
                Edit
              </Button>
              <Button variant="ghost" size="inline">
                View
              </Button>
              <Button variant="ghost" size="inline">
                Insert
              </Button>
            </div>
          </div>
        </div>
        <div>
          <Avatar>
            <AvatarImage src="/images/user-placeholder.jpg" />
            <AvatarFallback>P</AvatarFallback>
          </Avatar>
        </div>
      </div>
      {/* Div to save space for fixed element */}
      <div className="h-[80px] w-full" />
    </>
  );
};
