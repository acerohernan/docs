import React from "react";
import {
  BoldIcon,
  Code2Icon,
  CodeIcon,
  ItalicIcon,
  ListIcon,
  ListOrderedIcon,
  Redo2Icon,
  StrikethroughIcon,
  TextQuoteIcon,
  Undo2Icon,
} from "lucide-react";
import { Editor } from "@tiptap/react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface IToolbarButton {
  name: string;
  icon: React.ElementType;
  isActive: (editor: Editor) => boolean;
  isDisabled: (editor: Editor) => boolean;
  onClick: (editor: Editor) => () => void;
}

const history: IToolbarButton[] = [
  {
    name: "undo",
    icon: Undo2Icon,
    isActive: () => false,
    isDisabled: (editor) => !editor.can().chain().focus().undo().run(),
    onClick: (editor) => () => editor.chain().focus().undo().run(),
  },
  {
    name: "redo",
    icon: Redo2Icon,
    isActive: () => false,
    isDisabled: (editor) => !editor.can().chain().focus().redo().run(),
    onClick: (editor) => () => editor.chain().focus().redo().run(),
  },
];
const decorations: IToolbarButton[] = [
  {
    name: "bold",
    icon: BoldIcon,
    isActive: (editor) => editor.isActive("bold"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleBold().run(),
    onClick: (editor) => () => editor.chain().focus().toggleBold().run(),
  },
  {
    name: "italic",
    icon: ItalicIcon,
    isActive: (editor) => editor.isActive("italic"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleItalic().run(),
    onClick: (editor) => () => editor.chain().focus().toggleItalic().run(),
  },
  {
    name: "strike",
    icon: StrikethroughIcon,
    isActive: (editor) => editor.isActive("strike"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleStrike().run(),
    onClick: (editor) => () => editor.chain().focus().toggleStrike().run(),
  },
  {
    name: "code",
    icon: CodeIcon,
    isActive: (editor) => editor.isActive("code"),
    isDisabled: (editor) => !editor.can().chain().focus().toggleCode().run(),
    onClick: (editor) => () => editor.chain().focus().toggleCode().run(),
  },
];

const blocks: IToolbarButton[] = [
  {
    name: "bulletList",
    icon: ListIcon,
    isActive: (editor) => editor.isActive("bulletList"),
    isDisabled: () => false,
    onClick: (editor) => () => editor.chain().focus().toggleBulletList().run(),
  },
  {
    name: "orderedList",
    icon: ListOrderedIcon,
    isActive: (editor) => editor.isActive("orderedList"),
    isDisabled: () => false,
    onClick: (editor) => () => editor.chain().focus().toggleOrderedList().run(),
  },
  {
    name: "blockquote",
    icon: TextQuoteIcon,
    isActive: (editor) => editor.isActive("blockquote"),
    isDisabled: () => false,
    onClick: (editor) => () => editor.chain().focus().toggleBlockquote().run(),
  },
  {
    name: "codeBlock",
    icon: Code2Icon,
    isActive: (editor) => editor.isActive("codeBlock"),
    isDisabled: () => false,
    onClick: (editor) => () => editor.chain().focus().toggleCodeBlock().run(),
  },
];

interface Props {
  editor: Editor | null;
}

export const Toolbar: React.FC<Props> = ({ editor }) => {
  if (!editor) return;

  return (
    <div className="mx-4 bg-[#EDF2FA] rounded-2xl overflow-x-auto xs:flex xs:justify-center">
      <div className="p-2 flex gap-1">
        {history.map((icon) => (
          <ToolbarButton button={icon} editor={editor} key={`toolbar-icon-${icon.name}`} />
        ))}
        <Separator orientation="vertical" className="mx-1 h-auto bg-gray-300" />
        {decorations.map((icon) => (
          <ToolbarButton button={icon} editor={editor} key={`toolbar-icon-${icon.name}`} />
        ))}
        <Separator orientation="vertical" className="mx-1 h-auto bg-gray-300" />
        {blocks.map((icon) => (
          <ToolbarButton button={icon} editor={editor} key={`toolbar-icon-${icon.name}`} />
        ))}
      </div>
    </div>
  );
};

interface ButtonProps {
  editor: Editor;
  button: IToolbarButton;
}

const ToolbarButton: React.FC<ButtonProps> = ({ editor, button: { onClick, icon: Icon, isActive, isDisabled } }) => {
  const active = isActive(editor);
  const disabled = isDisabled(editor);

  return (
    <Button
      size="inline"
      variant="ghost"
      onClick={onClick(editor)}
      className={cn("border", active ? "border-gray-400" : "border-[#EDF2FA]", disabled && "opacity-50")}
    >
      <Icon className="w-4 h-4" />
    </Button>
  );
};
