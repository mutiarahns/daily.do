import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

type AlertConfirmationProps = {
  open: boolean;
  title: string;
  description: string;
  handleOpenDialog: (isOpened: boolean) => void;
  handleDeleteTask: () => void;
};

export function AlertConfirmation({
  open,
  title,
  description,
  handleOpenDialog,
  handleDeleteTask,
}: AlertConfirmationProps) {
  return (
    <AlertDialog open={open} onOpenChange={handleOpenDialog}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDeleteTask}>
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
