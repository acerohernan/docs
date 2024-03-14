import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getDemoUser, saveDemoUser } from "@/lib/demo";

import { Dialog } from "@/components/ui/dialog";
import { GuestDialog } from "../components/guest-dialog";

import { DemoDocument } from "./document";

const DemoDocumentPage = () => {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(getDemoUser);

  const navigate = useNavigate();

  useEffect(() => {
    if (user) return;

    // open modal if user not exists
    setOpen(true);
  }, [user]);

  return (
    <>
      <DemoDocument user={user} />
      <Dialog
        open={open}
        onOpenChange={(open) => {
          // if the user not exists and the modal is closed, redirect to homepage
          if (!user && !open) {
            navigate("/");
            return;
          }

          setOpen(open);
        }}
      >
        <GuestDialog
          action={(user) => {
            setUser(user);
            saveDemoUser(user);
            setOpen(false);
          }}
          cancel={() => {
            navigate("/");
          }}
        />
      </Dialog>
    </>
  );
};

export default DemoDocumentPage;
