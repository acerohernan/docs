import * as Y from "yjs";
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import { EditorContent, useEditor } from "@tiptap/react";
import { HocuspocusProvider } from "@hocuspocus/provider";
import Collaboration from "@tiptap/extension-collaboration";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";

import { IUser } from "@/api/types";

import { Toolbar } from "./toolbar";
import { getRandomColor } from "./utils";
import { EditorSkeleton } from "./skeleton";

import "./styles.css";

interface Props {
  ready: boolean;
  document: Y.Doc;
  provider: HocuspocusProvider;
  user: IUser;
}

export const EditorDocument: React.FC<Props> = ({ document, provider, ready, user }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      Highlight,
      Collaboration.configure({
        document,
      }),
      CollaborationCursor.configure({
        provider,
        user: {
          name: user.name,
          color: getRandomColor(),
        },
      }),
    ],
  });

  if (!ready) return <EditorSkeleton />;

  return (
    <div>
      <Toolbar editor={editor} />
      <div className="p-4">
        <div className="w-full max-w-[800px] mx-auto h-full min-h-[1000px] bg-white border p-14">
          <EditorContent editor={editor} />
        </div>
      </div>
    </div>
  );
};
