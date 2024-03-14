import { toast } from "sonner";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { useDocument } from "@/hooks/query/useDocument";

import { EditorSkeleton } from "./editor/skeleton";
import { Navbar } from "./navbar";
import { Editor } from "./editor";

const DocumentPage = () => {
  const { docId } = useParams();
  const navigate = useNavigate();
  const { data, isError } = useDocument(docId ?? "");

  useEffect(() => {
    if (!isError || !navigate) return;

    const goBack = () => {
      navigate("/");
    };

    let timeoutId: string | number | NodeJS.Timeout | undefined;

    // eslint-disable-next-line prefer-const
    timeoutId = setTimeout(goBack, 3000 /* 3 seconds */);

    toast.error("Error at fetching the document", {
      description: "Seems that you don't have authorization to fetch this document, going back to home page...",
      action: {
        label: "Go back",
        onClick: () => {
          clearTimeout(timeoutId);
          goBack();
        },
      },
    });

    return () => {
      // clean interval in unmount
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isError, navigate]);

  return (
    <div className="bg-[#F9FBFD] min-h-[100vh] h-full relative">
      <Navbar document={data ? data.document : null} />
      <main>{data ? <Editor /> : <EditorSkeleton />}</main>
    </div>
  );
};

export default DocumentPage;
