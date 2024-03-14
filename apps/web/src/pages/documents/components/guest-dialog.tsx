import React, { useState } from "react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import { IDemoUser } from "@/lib/demo";

import { getRandomColor } from "../document/editor/utils";

interface Props {
  action: (user: IDemoUser) => void;
  cancel: () => void;
}

export const GuestDialog: React.FC<Props> = ({ action, cancel }) => {
  const [userName, setUserName] = useState("");

  const onAction = () => {
    action({ name: userName, color: getRandomColor() });
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Enter your name</DialogTitle>
        <DialogDescription>Enter the name to show in your tooltip at writing in the demo document</DialogDescription>
      </DialogHeader>
      <div>
        <Label htmlFor="name" className="text-right">
          Name
        </Label>
        <Input id="name" onChange={(e) => setUserName(e.target.value)} placeholder="Your name" className="mt-1" />
      </div>
      <DialogFooter className="gap-2 sm:gap-0">
        <Button variant="outline" onClick={cancel}>
          Cancel
        </Button>
        <Button type="button" onClick={onAction}>
          Continue
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};
