import { DemoDocument } from "./demo-document";

export const RecentDocuments = () => {
  return (
    <div className="w-full max-w-[700px] mx-auto h-50 p-4 ">
      <span>Recent documents</span>
      <div className="mt-4 grid gap-2 flex-wrap xs:grid-cols-2 md:grid-cols-3">
        {/* Public demo document */}
        <DemoDocument />
        {/* Private documents (comming soon...) */}
      </div>
    </div>
  );
};
