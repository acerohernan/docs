import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { getAccessToken } from "@/lib/token";

import { useAuthContext } from "@/context/auth";

import { Dialog } from "@/components/ui/dialog";

import { IGetGuestTokenParams } from "@/api/auth/types";

import { GuestDialog } from "./guest-dialog";
import { DocumentCard } from "./document-card";

export const DemoDocument = () => {
  const navigate = useNavigate();
  const token = getAccessToken();
  const [open, setOpen] = useState(false);
  const { getGuestToken } = useAuthContext();

  const enterDemoDocument = () => {
    if (!token) {
      setOpen(true);
      return;
    }

    navigate("/document/demo");
  };

  const guestDialogAction = useCallback(
    async (params: IGetGuestTokenParams) => {
      const success = await getGuestToken(params);

      if (!success) {
        alert("something went wrong");
        return;
      }

      navigate("/document/demo");
    },
    [getGuestToken, navigate],
  );

  return (
    <>
      <button className="text-start" onClick={enterDemoDocument}>
        <DocumentCard
          document={{
            id: "demo",
            title: "Demo document",
            lastOpenedAt: Date.now(),
          }}
        />
      </button>
      <Dialog open={open} onOpenChange={setOpen}>
        <GuestDialog action={guestDialogAction} cancel={() => setOpen(false)} />
      </Dialog>
    </>
  );
};
