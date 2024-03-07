import { NotebookPenIcon } from "lucide-react";

export const Logo = () => {
  return (
    <div className="flex items-center gap-2">
      <NotebookPenIcon className="w-8 h-8" />
      <span className="text-xl">Docs</span>
    </div>
  );
};
