import { Suspense, lazy } from "react";

import type { IDemoUser } from "@/lib/demo";

import { useDemoDocument } from "@/hooks/query/useDemoDocument";

import { Navbar } from "../components/navbar";

import { EditorSkeleton } from "./editor/skeleton";

const DemoEditor = lazy(() => import("./editor"));

interface Props {
  user: IDemoUser | null;
}

export const DemoDocument: React.FC<Props> = ({ user }) => {
  const { data } = useDemoDocument();

  return (
    <div>
      <Navbar document={data ? data.document : null} />
      <Suspense fallback={<EditorSkeleton />}>
        {!!data && !!user ? <DemoEditor user={user} document={data.document} /> : <EditorSkeleton />}
      </Suspense>
    </div>
  );
};
