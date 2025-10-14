import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

export default function Dialog({
  open,
  setIsOpen,
  messageText,
}: {
  open: boolean;
  setIsOpen: (arg: boolean) => void;
  messageText: string;
}) {
  return (
    <AlertDialog open={open}>
      <AlertDialogContent className="sm:max-w-md">
        <AlertDialogHeader>
          <AlertDialogTitle className="flex items-center gap-2">
            {messageText}
          </AlertDialogTitle>
          <AlertDialogDescription>
            il prodotto è stato aggiunto al tuo carrello.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <div className="flex gap-2">
          <AlertDialogCancel
            onClick={() => setIsOpen(false)}
            className="flex-1"
          >
            Continua shopping
          </AlertDialogCancel>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}
