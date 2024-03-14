import { Link } from "react-router-dom";
import { NotebookIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { IDocument } from "@/api/types";

const buttons: { name: string }[] = [{ name: "File" }, { name: "Edit" }, { name: "View" }, { name: "Insert" }];

interface Props {
  document: IDocument | null;
}

export const Navbar: React.FC<Props> = ({ document }) => {
  return (
    <>
      <div className="w-full px-4 pt-4 pb-2 flex items-center justify-between fixed bg-[#F9FBFD] z-10">
        <div className="flex items-center gap-3 max-w-[50%]">
          <Link to="/">
            <NotebookIcon className="flex-shrink-0 w-10 h-10" />
          </Link>
          <div>
            <h1 className="text-xl line-clamp-1">
              {document ? document.title : <Skeleton className="w-[200px] h-[28px]" />}
            </h1>
            <div className="flex gap-2">
              {buttons.map(({ name }) =>
                document ? (
                  <Button variant="ghost" size="inline" key={`button-${name}`}>
                    {name}
                  </Button>
                ) : (
                  <Skeleton className="w-[40px] h-[20px] mt-2" key={`skeleton-button-${name}`} />
                ),
              )}
            </div>
          </div>
        </div>
        <div>
          {document ? (
            <Avatar>
              <AvatarImage src="/images/user-placeholder.jpg" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          ) : (
            <Skeleton className="w-[40px] h-[40px] rounded-full" />
          )}
        </div>
      </div>
      {/* Div to save space for fixed element */}
      <div className="h-[80px] w-full" />
    </>
  );
};
