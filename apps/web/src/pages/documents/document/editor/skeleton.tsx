import { Skeleton } from "@/components/ui/skeleton";

export const EditorSkeleton = () => {
  return (
    <div>
      <div className="w-full px-2 fixed z-10">
        <Skeleton className="w-full h-[42px] rounded-2xl" />
      </div>
      {/* Div to save space for fixed element */}
      <div className="h-[42px] w-full" />

      <div className="p-4">
        <div className="w-full max-w-[800px] mx-auto h-[1000px] bg-white border p-14">
          {/* <Skeleton className="w-full h-full" /> */}
        </div>
      </div>
    </div>
  );
};
