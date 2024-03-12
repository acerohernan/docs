import { Link, useParams } from "react-router-dom";
import { NotebookIcon } from "lucide-react";

import { useDocument } from "@/hooks/query/useDocument";

import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const buttons: { name: string }[] = [{ name: "File" }, { name: "Edit" }, { name: "View" }, { name: "Insert" }];

export const Navbar = () => {
  const { docId } = useParams();
  const { isLoading, data } = useDocument(docId ?? "");

  return (
    <>
      <div className="w-full px-4 pt-4 pb-2 flex items-center justify-between fixed bg-[#F9FBFD] z-10">
        <div className="flex items-center gap-3 max-w-[50%]">
          <Link to="/">
            <NotebookIcon className="flex-shrink-0 w-10 h-10" />
          </Link>
          <div>
            <h1 className="text-xl line-clamp-1">
              {data ? data.document.title : <Skeleton className="w-[200px] h-[28px]" />}
            </h1>
            <div className="flex gap-2">
              {buttons.map(({ name }) =>
                isLoading ? (
                  <Skeleton className="w-[40px] h-[20px] mt-2" key={`skeleton-button-${name}`} />
                ) : (
                  <Button variant="ghost" size="inline" key={`button-${name}`}>
                    {name}
                  </Button>
                ),
              )}
            </div>
          </div>
        </div>
        <div>
          {data ? (
            <Avatar>
              <AvatarImage src="/images/user-placeholder.jpg" />
              <AvatarFallback>P</AvatarFallback>
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
