import { PlusIcon } from "lucide-react";

import { Card } from "@/components/ui/card";

export const TemplateGallery = () => {
  return (
    <div className="w-full bg-[#EDF2FA]">
      <div className="max-w-[700px] mx-auto p-4 py-5">
        <span>Start a new document</span>
        <div className="mt-4">
          <button className="text-start">
            <Card className="w-[150px] h-[200px] transition-all hover:border-black flex items-center justify-center">
              <PlusIcon className="w-12 h-12" />
            </Card>
          </button>
          <span className="mt-2 block text-sm">Blank document</span>
        </div>
      </div>
    </div>
  );
};
