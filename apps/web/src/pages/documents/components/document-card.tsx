import { Link } from "react-router-dom";
import { NotebookIcon } from "lucide-react";

import { Card } from "@/components/ui/card";

export const DocumentCard = () => {
  return (
    <Link className="text-start" to="/document/123213">
      <Card className="flex flex-col w-full h-[340px] transition-all hover:border-black">
        <div
          className="w-full flex-1 h-[340px]"
          style={{ borderTopRightRadius: "inherit", borderTopLeftRadius: "inherit" }}
        />
        <div className="p-2 px-4 border-t">
          <span className="line-clamp-1">Demo document</span>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1 my-3">
              <NotebookIcon className="w-4 h-4" />
              <span className="block text-xs text-gray-500">
                Opened {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          </div>
        </div>
      </Card>
    </Link>
  );
};
