import * as Y from "yjs";
import { toast } from "sonner";
import { useEffect, useState } from "react";
import { HocuspocusProvider } from "@hocuspocus/provider";
import { useNavigate, useParams } from "react-router-dom";

import { useDocument } from "@/hooks/query/useDocument";

import { getAccessToken, removeAccessToken } from "@/lib/token";

import { EditorDocument } from "./document";

const document = new Y.Doc();

export const Editor = () => {
  const [ready, setReady] = useState(false);
  const [provider, setProvider] = useState<HocuspocusProvider | null>(null);

  const navigate = useNavigate();
  const { docId } = useParams();
  const { data } = useDocument(docId ?? "");

  useEffect(() => {
    const provider = new HocuspocusProvider({
      url: import.meta.env.VITE_WS_URL,
      name: "demo",
      document,
      token: getAccessToken(),
      onSynced() {
        setReady(true);
      },
      onAuthenticationFailed() {
        toast.error("You're not authorized", {
          description: "Seems that your token is invalid. Going back to the home page...",
        });
        removeAccessToken();
      },
    });
    setProvider(provider);

    return () => {
      provider.destroy();
    };
  }, [navigate]);

  if (!data) return;
  if (!provider) return;

  return <EditorDocument document={document} provider={provider} ready={ready} user={data.user} />;
};
