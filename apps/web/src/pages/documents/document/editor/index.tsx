import { EditorContent, useEditor } from "@tiptap/react";

import { Toolbar } from "./toolbar";
import { content, extensions } from "./constansts";

import "./styles.css";

export const Editor = () => {
  const editor = useEditor({ extensions, content });

  return (
    <div>
      <Toolbar editor={editor} />
      <div className="p-4">
        <div className="w-full max-w-[800px] mx-auto h-[1000px] bg-white border p-14">
          <EditorContent editor={editor} />
        </div>
      </div>
    </div>
  );
};
