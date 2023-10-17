import React from "react";
import {
  AlertDialog,
  AlertDialogTitle,
  AlertDialogContent,
  AlertDialogTrigger,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogAction,
  AlertDialogCancel,
} from "components/ui/alert-dialog";

export default function AlertMessage({
  children,
  title,
  description,
  onClick,
  actionText,
  cancelText,
}: {
  children: React.ReactNode;
  title: string;
  description: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  actionText: React.ReactNode;
  cancelText: React.ReactNode;
}) {
  return (
    <AlertDialog>
      <AlertDialogTrigger>{children}</AlertDialogTrigger>
      <AlertDialogContent className="font-sans">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={onClick}>{actionText}</AlertDialogAction>
          <AlertDialogCancel>{cancelText}</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
