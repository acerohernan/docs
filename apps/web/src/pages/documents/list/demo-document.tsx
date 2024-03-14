import { Link } from "react-router-dom";

import { useDemoDocument } from "@/hooks/query/useDemoDocument";

import { DocumentCard } from "./document-card";
import { DocumentCardSkeleton } from "./document-card-skeleton";

export const DemoDocument = () => {
  const { data, isLoading } = useDemoDocument();

  if (isLoading) return <DocumentCardSkeleton />;

  if (!data) return null;

  return (
    <Link to="/document/demo">
      <DocumentCard document={data.document} />
    </Link>
  );
};
