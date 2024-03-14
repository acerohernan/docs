import * as Y from "yjs";
import { EditorContent, useEditor } from "@tiptap/react";

// Tiptap extensions
import StarterKit from "@tiptap/starter-kit";
import Highlight from "@tiptap/extension-highlight";
import { HocuspocusProvider } from "@hocuspocus/provider";
import Collaboration from "@tiptap/extension-collaboration";
import BaseCodeBlock from "@tiptap/extension-code-block";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import CollaborationCursor from "@tiptap/extension-collaboration-cursor";

// Code highlighting
import { createLowlight } from "lowlight";
import js from "highlight.js/lib/languages/javascript";

import { IDemoUser } from "@/lib/demo";

import { Toolbar } from "./toolbar";
import { EditorSkeleton } from "./skeleton";

import "./styles.css";

// Code highlighting logic
const lowlight = createLowlight();
lowlight.register({ js });

interface Props {
  ready: boolean;
  document: Y.Doc;
  provider: HocuspocusProvider;
  user: IDemoUser;
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
          color: user.color,
        },
      }),
      BaseCodeBlock.extend({
        addKeyboardShortcuts() {
          return {
            // allow tab within code block
            Tab: () => {
              if (this.editor.isActive("codeBlock")) {
                return this.editor.commands.insertContent("\t");
              }
              return false;
            },
          };
        },
      }),
      CodeBlockLowlight.configure({
        lowlight,
        defaultLanguage: "js",
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
