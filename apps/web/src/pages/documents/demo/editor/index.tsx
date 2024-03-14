import * as Y from "yjs";
import { useEffect, useState } from "react";
import { HocuspocusProvider } from "@hocuspocus/provider";

import { IDemoUser } from "@/lib/demo";

import { IDocument } from "@/api/types";

import { EditorDocument } from "./document";

const yDocument = new Y.Doc();

interface Props {
  document: IDocument;
  user: IDemoUser;
}

const DemoEditor: React.FC<Props> = ({ document, user }) => {
  const [ready, setReady] = useState(false);
  const [provider, setProvider] = useState<HocuspocusProvider | null>(null);

  useEffect(() => {
    const provider = new HocuspocusProvider({
      url: import.meta.env.VITE_WS_URL,
      name: "demo",
      document: yDocument,
      token: "sadsad",
      onSynced() {
        setReady(true);
      },
    });
    setProvider(provider);

    return () => {
      provider.destroy();
    };
  }, []);

  if (!document || !provider) return;

  return <EditorDocument document={yDocument} provider={provider} ready={ready} user={user} />;
};

export default DemoEditor;
